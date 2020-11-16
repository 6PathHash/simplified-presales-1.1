const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1605408240,
  refundTime: 1605408240 + 86400,
  endTime: 1605408240 + 86400*2,
  softCap: ether("500"),
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 1
};

config.presale = {
  maxBuyPerAddress: ether("25"),
  uniswapEthBP: 5000,
  uniswapLidEthBP: 2000,
  uniswapTusdEthBP: 0,
  lidEthBP: 500,
  hardcap: ether("750"),
  token: "",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "",
  lidLiqLocker: "0x5d05eEF83499789fD2d3e6b2A7483430B40A0325",
  tusdLiqLocker: "0x52083d6A1680d42D8Fd2cD2e2F9edD18858bAcD9",
  projectLock: "",
  teamLock: "",
  tokenPoolsBP: {
    marketing: 500,
    team: 1461,
    lidFee: 100,
    project: 2910,
    liquidity: 1449,
    presale: 3000,
    lidLiq: 580,
    tusdLiq: 0
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 1000,
  owner: "0x4735581201F4cAD63CCa0716AB4ac7D6d9CFB0ed",
  claimer: ""
}

module.exports = config;
