// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract EcoWattXStake {

    struct RewardStake {
        address userAddress;
        uint posititonId;
        uint startDate;
        uint unlockDate;
        uint percentInterest;
        uint amountStaked;
        uint amountInterest;
        bool active;
    }


    RewardStake position;

     uint[] public stakePeriod;

    uint public currentPositionId;

    mapping(uint => RewardStake) public positions;

    mapping(uint => uint) public plans;


    constructor() {
        currentPositionId = 0;

      plans[30] = 200;
      plans[60] = 300;
        plans[90] = 500;
        plans[180] = 700;
        plans[365] = 1000;

        stakePeriod.push(30);
        stakePeriod.push(60);
        stakePeriod.push(90);
        stakePeriod.push(180);
        stakePeriod.push(365);
    }


    function
   

}