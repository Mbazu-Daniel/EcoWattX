// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./EcoWattXLib.sol";
import "./EcoWattXToken.sol";


contract EcoWattXEscrow {
  using EcoWattXLib for EcoWattXLib.AccountDetails;
  using EcoWattXLib for EcoWattXLib.TransactionInfo;
  using EcoWattXLib for EcoWattXLib.Merchant;

 
  mapping(address => EcoWattXLib.AccountDetails) public account;
  mapping(address => EcoWattXLib.Merchant) public merchantsMemo;
  mapping(uint => EcoWattXLib.TransactionInfo) public transactions;
  mapping(address => uint256) public rewardBalance;
  mapping(address => uint256) public merchantBalance;
  mapping(address => uint[]) public users;
  mapping(address => uint[]) public merchants;
  mapping(address => uint256[]) public energyTransactionByAddress;
  uint public totalTransactionId;
  uint public accountId;

  EcoWattX public ewxToken;


  event MerchantMemoRegistered(address merchantId, string merchantName, uint totalUnits, uint amountPerKWH, string sourceOfEnergy, EcoWattXLib.EnergyType energyType);
  event UnitPurchased(address customerId, uint unitBought, uint amountPaid, address providerName, string meterNumber, EcoWattXLib.EnergyType indexed energyType);
  event Withdraw(address userAddress, uint withdrawAmount, uint balances);
  event Transfer(address userAddress, address to, uint balances);
 
  constructor(address tokenAddress) {
    totalTransactionId = 0;
    ewxToken = EcoWattX(tokenAddress);
  }

  function accountCreation(string memory name, string memory location, EcoWattXLib.AccountRole role) external  {
    require(msg.sender != address(0), "Empty address");
    account[msg.sender] = EcoWattXLib.AccountDetails( msg.sender,
      name, location, 0, role, true
    );

    if(role == EcoWattXLib.AccountRole.Merchant) {
      users[msg.sender].push(accountId);
    }  else {
      merchants[msg.sender].push(accountId);
    }

    accountId++;
    
  }
  function registerMerchantMemo(uint totalUnits, uint amountPerKWH,string memory sourceOfEnergy, EcoWattXLib.EnergyType energyType) public {
    // Check if the account is already registered
    require(account[msg.sender].role == EcoWattXLib.AccountRole.Merchant, "Only a merchant account can register as a merchant");
    
    // Check if the merchant is already registered
    require(merchantsMemo[msg.sender].merchantId == address(0), "Merchant is already registered");
    
    // Register the merchant
    string memory merchantName = account[msg.sender].accountName;
    EcoWattXLib.Merchant memory merchant = EcoWattXLib.Merchant(msg.sender, merchantName, totalUnits, amountPerKWH, sourceOfEnergy, energyType);
    merchantsMemo[msg.sender] = merchant;
    
    emit MerchantMemoRegistered(msg.sender, merchantName, totalUnits, amountPerKWH, sourceOfEnergy, energyType);
  }

  function purchaseUnits(uint amount, address providerName, string memory meterNumber, EcoWattXLib.EnergyType energyType) external payable {
    // Check if the buyer sent enough funds
    require(amount > 0, "Not enough funds sent for purchase");

    // Check if the buyer is registered
    require(account[msg.sender].role == EcoWattXLib.AccountRole.User, "Only a user account can purchase units");
    
    // Check if the merchant is registered
    require(merchantsMemo[msg.sender].merchantId != address(0), "Merchant is not registered");

    // Calculate the units to recieve
    uint units = amount / merchantsMemo[msg.sender].amountPerKWH;
    
    // Check if there are enough units available
    require(units <= merchantsMemo[providerName].totalUnits, "Not enough units available for purchase");
    

    // Update the merchant's total units
    merchantsMemo[providerName].totalUnits -= units;
    account[msg.sender].wattsAmount += units;

  if(energyType == EcoWattXLib.EnergyType.Renewable) {
    //Calculate the amount of EWX to reward the user
    uint reward = (amount / 200) * 100; // Reward 2% of the purchase amount in EWX tokens
    rewardBalance[msg.sender] += reward;
  }
    
    merchantBalance[providerName] += amount; 
   
    // Record the transaction
    transactions[totalTransactionId] = EcoWattXLib.TransactionInfo(msg.sender, units, amount, providerName, meterNumber, energyType);
    energyTransactionByAddress[msg.sender].push(totalTransactionId);
    totalTransactionId++;
    
    
    emit UnitPurchased(msg.sender, units, amount, providerName, meterNumber, energyType);
  }

  function getUseraccount() external view returns (EcoWattXLib.AccountDetails memory) {
    return account[msg.sender];
  }

  function getAllmerchantsMemo() external view returns (EcoWattXLib.Merchant memory) {
    return merchantsMemo[msg.sender];
  }


  function getUserTransaction() external view returns (uint[] memory) {
   return energyTransactionByAddress[msg.sender];
  } 
function withdrawEWX(
    address payable receiver,
    uint withdrawAmount
) external {
    // Check that the customer has sufficient funds
    require(withdrawAmount <= rewardBalance[msg.sender], "Insufficient funds");

    // Use SafeMath's sub function to prevent underflow
    rewardBalance[msg.sender] = rewardBalance[msg.sender] - withdrawAmount;

    // Transfer tokens from the contract to the receiver
    require(receiver != address(0), "Invalid receiver address");
    require(withdrawAmount > 0, "Invalid withdrawal amount");
    ewxToken.transfer(receiver, withdrawAmount);

    // Log event of the withdrawal made
    emit Withdraw(msg.sender, withdrawAmount, rewardBalance[msg.sender]);
}


   function transferEWX(
        address to,
        uint transferAmount
    ) external payable returns (bool) {
        // check that the customer has sufficient funds
        require(rewardBalance[msg.sender] >= transferAmount, "insufficient funds");

        // Use SafeMath's sub function to prevent underflow
        rewardBalance[msg.sender] -= transferAmount;

        // add transferred amount to receivers account
        rewardBalance[to] += transferAmount;

        // log event of the transfer made
        emit Transfer(msg.sender, to, transferAmount);
        return true;
    }
  // Fallback and Receive function
  receive() external payable {} // allow the contract to receive ether

  fallback() external payable {} // allow the contract to receive tokens


}

