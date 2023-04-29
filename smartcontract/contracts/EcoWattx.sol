// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./EcoWattXLib.sol";

contract EcoWattXEscrow{
   using EcoWattXLib for EcoWattXLib.AccountDetails;
   using EcoWattXLib for EcoWattXLib.TransactionInfo;
   using EcoWattXLib for EcoWattXLib.Merchant;

 
   mapping(address => EcoWattXLib.AccountDetails) public account;
   mapping(address => EcoWattXLib.Merchant) public merchantsMemo;
   mapping(address => EcoWattXLib.TransactionInfo) public transactions;

  uint public totalTransactions;


  event MerchantRegistered(address merchantId, string merchantName);
  event UnitPurchased(address customerId, uint unitBought, uint amountPaid, address providerName, string meterNumber);


  function registerMerchantMemo(string memory merchantName, uint totalUnits, uint amountPerKWH, EcoWattXLib.EnergyType energyType) public {
    // Check if the account is already registered
    require(account[msg.sender].role == EcoWattXLib.AccountRole.Merchant, "Only a merchant account can register as a merchant");
    
    // Check if the merchant is already registered
    require(merchantsMemo[msg.sender].merchantId == address(0), "Merchant is already registered");
    
    // Register the merchant
    EcoWattXLib.Merchant memory merchant = EcoWattXLib.Merchant(msg.sender, merchantName, totalUnits, amountPerKWH, energyType);
    merchantsMemo[msg.sender] = merchant;
    
    emit MerchantRegistered(msg.sender, merchantName);
  }

  function purchaseUnits(uint units, address providerName, string memory meterNumber) public payable {
    // Check if the buyer is registered
    require(account[msg.sender].role == EcoWattXLib.AccountRole.User, "Only a user account can purchase units");
    
    // Check if the merchant is registered
    require(merchantsMemo[msg.sender].merchantId != address(0), "Merchant is not registered");
    
    // Check if there are enough units available
    require(units <= merchantsMemo[msg.sender].totalUnits, "Not enough units available for purchase");
    
    // Calculate the amount to pay
    uint amountToPay = units * merchantsMemo[msg.sender].amountPerKWH;
    
    // Check if the buyer sent enough funds
    require(msg.value >= amountToPay, "Not enough funds sent for purchase");
    
    // Record the transaction
    EcoWattXLib.TransactionInfo memory transaction = EcoWattXLib.TransactionInfo(msg.sender, units, amountToPay, providerName, meterNumber, merchantsMemo[msg.sender].energyType);
    transactions[address(this)] = transaction;
    totalTransactions++;
    
    // Update the merchant's total units
    merchantsMemo[providerName].totalUnits -= units;
    account[msg.sender].wattsAmount += units;


    
    // Transfer funds to the merchant
    payable(msg.sender).transfer(amountToPay);
   
    
    emit UnitPurchased(msg.sender, units, amountToPay, providerName, meterNumber);
  }

   function getAllaccount() external view returns (EcoWattXLib.AccountDetails memory) {
     return account[msg.sender];
  }

   function getAllmerchantsMemo() external view returns (EcoWattXLib.Merchant memory) {
    return merchantsMemo[msg.sender];
  }
}


