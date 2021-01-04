const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1609650000,
  refundTime: 1609650000 + 86400,
  endTime: 1609650000 + 86400 * 2,
  softCap: ether("500")
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 3600
};

config.presale = {
  token: "0x0F8d7cd85736da5F03B8fc5E023Cb23edF4281e3",
  hardcap: ether("2500"),
  maxBuyPerAddress: ether("50"),

  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // const
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2", // const

  uniswapEthBP: 5500,
  // NOTE: the object key order should be match
  ethPoolAddress: {
    lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f",
    dev: "0x797f9a8974cc3d6402ee9ded53c74903ebda75da",
    lidFund: "0x2afE616c6E7999EF5a569dD72830023066c0875f" // const
  },
  ethPoolBPs: {
    lidLiqLocker: 800,
    dev: 3000,
    lidFund: 700
  },

  uniswapTokenBP: 2663,
  presaleTokenBP: 4000,
  // NOTE: the object key order should be match
  tokenPoolAddress: {
    lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f", // const
    lidFund: "0x2afE616c6E7999EF5a569dD72830023066c0875f", // const
    project: "0x6DB7eC5c34A5DCeFF2B6277cce8cD2eC3933B505",
    team: "0xcF31DA67AcAa56c584CA9732e2Aaf90802C48Cac",
    marketing: ""
  },
  tokenPoolBPs: {
    lidLiq: 508,
    lidFee: 100,
    project: 1729,
    team: 1000,
    marketing: 0
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 1000,
  owner: "0x4735581201F4cAD63CCa0716AB4ac7D6d9CFB0ed",
  claimer: ""
};

module.exports = config;
