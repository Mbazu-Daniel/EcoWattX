// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

library EcoWattXLib {
    enum AccountRole {
        Merchant,
        User
    }

    enum EnergyType {
        Renewable,
        NonRenewable
    }

    struct AccountDetails {
        address accountId;
        string accountName;
        string location;
        uint wattsAmount;
        AccountRole role;
        bool active;
    }

    struct TransactionInfo {
        address customerId;
        uint unitBought;
        uint amountPaid;
        address providerName;
        string meterNumber;
        EnergyType energyType;
    }

    struct Merchant {
        address merchantId;
        string merchantName;
        uint totalUnits;
        uint amountPerKWH;
        string sourceOfEnergy;
        EnergyType energyType;
    }


}