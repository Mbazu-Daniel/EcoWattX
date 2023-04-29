const { ethers } = require("hardhat");

async function main() {
  // Calling the contracts
  const EcoWattXToken = await ethers.getContractFactory("EcoWattX");

  // Deploy the contract
  const ecoWattXToken = await EcoWattXToken.deploy();

  await ecoWattXToken.deployed();

  // print the contract address
  console.log("EcoWattXToken  deployed to: ", ecoWattXToken.address);

  // Calling the contracts
  const EcoWattXEscrow = await ethers.getContractFactory("EcoWattXEscrow");

  // Deploy the contract
  const ecoWattXEscrow = await EcoWattXEscrow.deploy(ecoWattXToken.address);

  await ecoWattXEscrow.deployed();

  // print the contract address
  console.log("EcoWattXEscrow  deployed to: ", ecoWattXEscrow.address);

  // Staking contract address
  // Calling the contracts
  const EcoWattXStake = await ethers.getContractFactory("EcoWattXStake");

  // Deploy the contract
  const ecoWattXStake = await EcoWattXStake.deploy();

  await ecoWattXStake.deployed();

  // print the contract address
  console.log("EcoWattXStake  deployed to: ", ecoWattXStake.address);

  console.log("Sleeping.....");
  // Wait for polygonscan to notice that the contract has been deployed
  await sleep(10000);

  // Verify the EcoWattXEscrow   contract after deploying
  await hre.run("verify:verify", {
    contract: "contracts/EcoWattX.sol:EcoWattXEscrow",
    address: ecoWattXEscrow.address,
    constructorArguments: [ecoWattXToken.address],
  });
  await hre.run("verify:verify", {
    contract: "contracts/EcoWattXToken.sol:EcoWattX",
    address: ecoWattXToken.address,
    constructorArguments: [],
  });
  await hre.run("verify:verify", {
    contract: "contracts/EcoWattXStaking.sol:EcoWattXStake",
    address: ecoWattXStake.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
