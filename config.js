const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1609218000,
  refundTime: 1609218000 + 86400,
  endTime: 1609218000 + 86400 * 2,
  softCap: ether("100")
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 3600
};

config.presale = {
  token: "0xbbd170e8be0f7a2614ced8de2439e812f1c45dbc",
  hardcap: ether("1000"),
  maxBuyPerAddress: ether("25"),

  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // const
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2", // const

  uniswapEthBP: 5000,
  // NOTE: the object key order should be match
  ethPoolAddress: {
    lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f",
    dev: "0xb6Fa11BE3237993B69B46F4d54Dcc2381407Fd0a",
    lidFund: "0x2afE616c6E7999EF5a569dD72830023066c0875f" // const
  },
  ethPoolBPs: {
    lidLiqLocker: 2000,
    dev: 2500,
    lidFund: 500
  },

  uniswapTokenBP: 1500,
  presaleTokenBP: 3000,
  // NOTE: the object key order should be match
  tokenPoolAddress: {
    lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f", // const
    lidFund: "0x2afE616c6E7999EF5a569dD72830023066c0875f", // const
    project: "",
    team: "",
    marketing: "0xb6Fa11BE3237993B69B46F4d54Dcc2381407Fd0a"
  },
  tokenPoolBPs: {
    lidLiq: 600,
    lidFee: 100,
    project: 4300,
    team: 0,
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
