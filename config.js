const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1607922000,
  refundTime: 1607922000 + 86400,
  endTime: 1607922000 + 86400 * 2,
  softCap: ether("150")
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 1
};

config.presale = {
  maxBuyPerAddress: ether("25"),
  uniswapEthBP: 4250,
  uniswapLidEthBP: 1750,
  uniswapTusdEthBP: 0,
  lidEthBP: 800,
  hardcap: ether("2500"),
  token: "0x52d904eff2605463c2f0b338d34abc9b7c3e3b08",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0x2afE616c6E7999EF5a569dD72830023066c0875f",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "0x904aEfA7Ed357b7184b72fF3F492CED11abE639D",
  teamFund: "0x169898d4bce7bEeED085027Dc305991d77b5769a",
  projectFund: "0xc53219ae46Dd6b017F2a3834D31085F0f198d847",
  lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f",
  tusdLiqLocker: "0x52083d6A1680d42D8Fd2cD2e2F9edD18858bAcD9",
  tokenPoolsBP: {
    marketing: 500,
    team: 2200,
    lidFee: 100,
    project: 0,
    liquidity: 1912,
    presale: 4500,
    lidLiq: 788,
    tusdLiq: 0
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 1000,
  owner: "0x4735581201F4cAD63CCa0716AB4ac7D6d9CFB0ed",
  claimer: ""
};

module.exports = config;
