const { scripts, ConfigManager } = require("@openzeppelin/cli");
const { add, push, create } = scripts;
const { publicKey } = require("../privatekey");

const config = require("../config");

const LidSimplifiedPresale = artifacts.require("LidSimplifiedPresale");

async function setTokenPools(accounts, networkName) {
  const presale = await LidSimplifiedPresale.deployed();

  const presaleConfig = config.presale;
  const ethPools = Object.values(presaleConfig.ethPoolAddress).filter(
    (el) => !!el
  );
  const ethPoolBPs = Object.values(presaleConfig.ethPoolBPs).filter(
    (el) => !!el
  );

  await presale.setEthPools(presaleConfig.uniswapEthBP, ethPools, ethPoolBPs);

  const tokenPools = Object.values(presaleConfig.tokenPoolAddress).filter(
    (el) => !!el
  );
  const tokenPoolBPs = Object.values(presaleConfig.tokenPoolBPs).filter(
    (el) => !!el
  );

  await presale.setTokenPools(
    presaleConfig.uniswapTokenBP,
    presaleConfig.presaleTokenBP,
    tokenPools,
    tokenPoolBPs
  );
}

module.exports = function(deployer, networkName, accounts) {
  deployer.then(async () => {
    await setTokenPools(accounts, networkName);
  });
};
