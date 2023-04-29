EcoWattXLib Solidity Library
EcoWattXLib is a Solidity library that provides data structures for managing accounts and transactions related to renewable and non-renewable energy sources. It includes the following features:

AccountRole: An enumeration for defining the role of an account as either a Merchant or User.
EnergyType: An enumeration for defining the type of energy as either Renewable or NonRenewable.
AccountDetails: A struct for storing the details of an account, including the account ID, name, location, watts amount, role, and active status.
TransactionInfo: A struct for storing the details of a transaction, including the customer ID, unit bought, amount paid, provider name, meter number, and energy type.
Merchant: A struct for storing the details of a merchant, including the merchant ID, name, total units, amount per KWH, source of energy, and energy type.
To use this library, include the following line at the beginning of your Solidity file:

solidity

pragma solidity ^0.8.9;
import "./EcoWattXLib.sol";
Then, you can use any of the data structures and functions defined in the library.

EcoWattXEscrow
EcoWattXEscrow is a smart contract that implements an energy trading platform called EcoWattX. The contract enables users to purchase renewable energy from registered merchants and receive a reward in EcoWattX (EWX) tokens for doing so.

This smart contract is written in Solidity 0.8.9 and uses the OpenZeppelin SafeMath library. Before deploying the contract, ensure that you have imported the EcoWattXLib.sol and EcoWattXToken.sol files.

The contract has the following features:

Functions for creating new accounts and registering merchants
Function for purchasing units of renewable energy from a registered merchant
Function for getting the account details of the caller
Function for getting the merchant's memo details of the caller
Function for withdrawing EWX tokens from the caller's reward balance
Events for registering a merchant's memo, purchasing units of energy, and withdrawing EWX tokens
