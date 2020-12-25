const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1609347600,
  refundTime: 1609347600 + 86400,
  endTime: 1609347600 + 86400 * 2,
  softCap: ether("100")
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 3600
};

config.presale = {
  token: "0x689CF5f8DD09BBB4417514C88909bb64ebA2547D",
  hardcap: ether("1000"),
  maxBuyPerAddress: ether("25"),

  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // const
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2", // const

  uniswapEthBP: 5000,
  // NOTE: the object key order should be match
  ethPoolAddress: {
    lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f",
    dev: "0x6B19E26D7706425e82C5c45eBB14Dc502c55db6B",
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
    marketing: "0x6B19E26D7706425e82C5c45eBB14Dc502c55db6B"
  },
  tokenPoolBPs: {
    lidLiq: 600,
    lidFee: 100,
    project: 3300,
    team: 1000,
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
