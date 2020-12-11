const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1605408240,
  refundTime: 1605408240 + 86400,
  endTime: 1605408240 + 86400 * 2,
  softCap: ether("500")
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 1
};

config.presale = {
  token: "",
  hardcap: ether("750"),
  maxBuyPerAddress: ether("25"),

  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // const
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2", // const

  uniswapEthBP: 5000,
  // NOTE: the object key order should be match
  ethPoolAddress: {
    lidLiqLocker: "0x5d05eEF83499789fD2d3e6b2A7483430B40A0325",
    dev: "",
    lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2" // const
  },
  ethPoolEthBP: {
    lidLiqLocker: 2000,
    dev: 2500,
    lidFund: 500
  },

  uniswapTokenBP: 1449,
  presaleTokenBP: 3000,
  // NOTE: the object key order should be match
  tokenPoolAddress: {
    lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f", // const
    lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2", // const
    project: "",
    team: "",
    marketing: ""
  },
  tokenPoolsBP: {
    lidLiq: 580,
    lidFee: 100,
    project: 2910,
    team: 1461,
    marketing: 500
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 1000,
  owner: "0x4735581201F4cAD63CCa0716AB4ac7D6d9CFB0ed",
  claimer: ""
};

module.exports = config;
