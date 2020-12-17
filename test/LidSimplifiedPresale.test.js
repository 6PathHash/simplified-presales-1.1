const { accounts, contract } = require("@openzeppelin/test-environment");
const {
  expectRevert,
  time,
  BN,
  ether,
  balance
} = require("@openzeppelin/test-helpers");
const { expect } = require("chai");

const Token = contract.fromArtifact("Token");
const TeamLock = contract.fromArtifact("LidTimeLock");
const ProjectLock = contract.fromArtifact("LidTimeLock");
const LidSimplifiedPresale = contract.fromArtifact("LidSimplifiedPresale");
const LidSimplifiedPresaleRedeemer = contract.fromArtifact(
  "LidSimplifiedPresaleRedeemer"
);
const LidSimplifiedPresaleTimer = contract.fromArtifact(
  "LidSimplifiedPresaleTimer"
);
const LidSimplifiedPresaleAccess = contract.fromArtifact(
  "LidSimplifiedPresaleAccess"
);

const owner = accounts[0];
const depositors = [accounts[1], accounts[2], accounts[3], accounts[4]];
const marketingFund = accounts[5];
const initialTokenHolder = accounts[6];
const lidFund = accounts[7];
const lidLiqLocker = accounts[8];
const devFund = accounts[9];

const TOTAL_TOKENS = ether("100000000");
const SECONDS_PER_HOUR = 3600;

const config = {
  timer: {
    startTime: Math.floor(Date.now() / 1000 - 60),
    refundTime: Math.floor(Date.now() / 1000 - 60) + 120,
    endTime: Math.floor(Date.now() / 1000 - 60) + 120 * 2,
    softCap: ether("10")
  },
  redeemer: {
    redeemBP: 10000,
    redeemInterval: 3600
  },
  presale: {
    hardcap: ether("50"),
    maxBuyPerAddress: ether("10"),
    uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // const
    access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2", // const
    uniswapEthBP: 5000,
    ethPoolBPs: {
      lidLiqLocker: 2000,
      dev: 2500,
      lidFund: 500
    },
    uniswapTokenBP: 2000,
    presaleTokenBP: 3000,
    tokenPoolBPs: {
      lidLiq: 500,
      lidFee: 100,
      project: 2500,
      team: 1400,
      marketing: 500
    }
  }
};

describe("LidSimplifiedPresale", function() {
  before(async function() {
    this.Token = await Token.new();
    this.TeamLock = await TeamLock.new();
    this.ProjectLock = await ProjectLock.new();
    this.Presale = await LidSimplifiedPresale.new();
    this.Redeemer = await LidSimplifiedPresaleRedeemer.new();
    this.Timer = await LidSimplifiedPresaleTimer.new();
    this.Access = await LidSimplifiedPresaleAccess.new();

    await this.Token.initialize(TOTAL_TOKENS, initialTokenHolder);
    await this.Redeemer.initialize(
      config.redeemer.redeemBP,
      config.redeemer.redeemInterval,
      this.Presale.address,
      owner
    );
    await this.Presale.initialize(
      config.presale.maxBuyPerAddress,
      config.presale.hardcap,
      owner,
      this.Timer.address,
      this.Redeemer.address,
      this.Access.address,
      this.Token.address,
      config.presale.uniswapRouter
    );
    await this.Token.transfer(this.Presale.address, TOTAL_TOKENS, {
      from: initialTokenHolder
    });

    await this.Presale.setEthPools(
      config.presale.uniswapEthBP,
      [lidLiqLocker, devFund, lidFund],
      Object.values(config.presale.ethPoolBPs),
      {
        from: owner
      }
    );

    await this.Presale.setTokenPools(
      config.presale.uniswapTokenBP,
      config.presale.presaleTokenBP,
      [
        lidLiqLocker,
        lidFund,
        this.ProjectLock.address,
        this.TeamLock.address,
        marketingFund
      ],
      Object.values(config.presale.tokenPoolBPs),
      {
        from: owner
      }
    );
  });

  describe("State: Before Presale Start", function() {
    describe("#deposit", function() {
      it("Should revert", async function() {
        await expectRevert(
          this.Presale.deposit({ from: depositors[0] }),
          "Presale not yet started."
        );
      });
    });
    describe("#sendToUniswap", function() {
      it("Should revert", async function() {
        await expectRevert(
          this.Presale.sendToUniswap({ from: depositors[0] }),
          "Presale not yet started."
        );
      });
    });
  });

  describe("State: Presale", function() {
    before(async function() {
      await this.Timer.initialize(
        config.timer.startTime,
        config.timer.refundTime,
        config.timer.endTime,
        config.timer.softCap,
        this.Presale.address,
        owner
      );
    });
    describe("#deposit", function() {
      it("total depositers, amount", async function() {
        await this.Presale.deposit({ from: depositors[0], values: ether("5") });
        await this.Presale.deposit({
          from: depositors[1],
          values: ether("10")
        });

        await expect(this.Redeemer.totalShares(), ether("15"));
        await expect(this.Redeemer.totalDepositors(), new BN("2"));
      });
    });
  });

  describe("State: Presale Ended", function() {
    before(async function() {
      await time.increase(240);
    });
    describe("#deposit", function() {
      it("should revert", async function() {
        await expectRevert(
          this.Presale.deposit({ from: depositors[0] }),
          "Presale Ended, time over limit."
        );
      });
    });
  });
});
