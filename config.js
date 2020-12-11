const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1607749200,
  refundTime: 1607749200 + 86400,
  endTime: 1607749200 + 86400 * 2,
  softCap: ether("100")
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 1
};

config.presale = {
  maxBuyPerAddress: ether("20"),
  uniswapEthBP: 5500,
  uniswapLidEthBP: 1500,
  uniswapTusdEthBP: 0,
  lidEthBP: 500,
  hardcap: ether("800"),
  token: "0xdf666d442a737fb066f00cbd130a042ee5f9da29",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "",
  teamFund: "",
  projectFund: "",
  lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f",
  tusdLiqLocker: "0x52083d6A1680d42D8Fd2cD2e2F9edD18858bAcD9",
  projectLock: "",
  teamLock: "",
  tokenPoolsBP: {
    marketing: 500,
    team: 0,
    lidFee: 100,
    project: 3300,
    liquidity: 1925,
    presale: 3500,
    lidLiq: 675,
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
