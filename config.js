const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1606539600,
  refundTime: 1606539600 + 86400,
  endTime: 1606539600 + 86400 * 2,
  softCap: ether("200"),
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 1,
};

config.presale = {
  maxBuyPerAddress: ether("25"),
  uniswapEthBP: 5500,
  uniswapLidEthBP: 1500,
  uniswapTusdEthBP: 0,
  lidEthBP: 500,
  hardcap: ether("2000"),
  token: "0xc9dfcd0a1dd2d7bb6fd2ef91a16a6a1c4e9846dd",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "0xfd06f032aD856D60732e7B539D50AdE347185458",
  teamFund: "",
  projectFund: "",
  lidLiqLocker: "0x5d05eEF83499789fD2d3e6b2A7483430B40A0325",
  tusdLiqLocker: "0x52083d6A1680d42D8Fd2cD2e2F9edD18858bAcD9",
  projectLock: "",
  teamLock: "",
  tokenPoolsBP: {
    marketing: 500,
    team: 0,
    lidFee: 100,
    project: 500,
    liquidity: 3064,
    presale: 5500,
    lidLiq: 836,
    tusdLiq: 0,
  },
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 1000,
  owner: "0x4735581201F4cAD63CCa0716AB4ac7D6d9CFB0ed",
  claimer: "",
};

module.exports = config;
