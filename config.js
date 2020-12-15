const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1608055200,
  refundTime: 1608055200 + 86400,
  endTime: 1608055200 + 86400 * 2,
  softCap: ether("100")
};

config.redeemer = {
  redeemBP: 10000,
  redeemInterval: 1
};

config.presale = {
  maxBuyPerAddress: ether("20"),
  uniswapEthBP: 5000,
  uniswapLidEthBP: 2000,
  uniswapTusdEthBP: 0,
  lidEthBP: 500,
  hardcap: ether("750"),
  token: "0x6946a8498d981cb51b6aB8Dcd551963eB165524C",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0x2afE616c6E7999EF5a569dD72830023066c0875f",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "0x590ee21760825afD0cdf8CE018860785Ab6c7F8f",
  teamFund: "0x727De2c214C737dA045B693dB700511d1d517E73",
  projectFund: "0xA16bDE21C7FA67f4a67fcb9AbCf3372b51019eeF",
  lidLiqLocker: "0x2afE616c6E7999EF5a569dD72830023066c0875f",
  tusdLiqLocker: "0x52083d6A1680d42D8Fd2cD2e2F9edD18858bAcD9",
  tokenPoolsBP: {
    marketing: 500,
    team: 1300,
    lidFee: 100,
    project: 3000,
    liquidity: 1500,
    presale: 3000,
    lidLiq: 600,
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
