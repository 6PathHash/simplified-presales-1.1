const { scripts, ConfigManager } = require("@openzeppelin/cli");
const { add, push, create } = scripts;
const { publicKey } = require("../privatekey");

const config = require("../config");

const LidSimplifiedPresale = artifacts.require("LidSimplifiedPresale");

async function setTokenPools(accounts, networkName) {
  let owner = accounts[0];
  return;

  const timelockParams = config.timelock;

  const presale = await LidSimplifiedPresale.deployed();

  const poolsBP = config.presale.tokenPoolsBP;

  let poolAddresses = [config.presale.lidFund, config.presale.lidLiqLocker];
  let poolAmounts = [poolsBP.lidFee, poolsBP.lidLiq];
  if (poolsBP.team != 0) {
    poolAddresses.push(config.presale.teamFund);
    poolAmounts.push(poolsBP.team);
  }
  if (poolsBP.project != 0) {
    poolAddresses.push(config.presale.projectFund);
    poolAmounts.push(poolsBP.project);
  }
  if (poolsBP.marketing != 0) {
    poolAddresses.push(config.presale.marketingFund);
    poolAmounts.push(poolsBP.marketing);
  }

  await presale.setTokenPools(
    poolsBP.liquidity,
    poolsBP.presale,
    poolAddresses,
    poolAmounts
  );
}

module.exports = function(deployer, networkName, accounts) {
  deployer.then(async () => {
    await setTokenPools(accounts, networkName);
  });
};
