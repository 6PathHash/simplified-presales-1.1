const HDWalletProvider = require("@truffle/hdwallet-provider");
const { privateKey, publicKey } = require("./privatekey");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          privateKey,
          "wss://ropsten.infura.io/ws/v3/8baf9b19ef5f4aa8b3c1f355794baeb1"
        );
      },
      network_id: 3,
      gasPrice: 90e9,
      from: publicKey,
      gas: 8e6,
      networkCheckTimeout: 100000000
    },
    live: {
      provider: function() {
        return new HDWalletProvider(
          privateKey,
          "wss://mainnet.infura.io/ws/v3/8baf9b19ef5f4aa8b3c1f355794baeb1"
        );
      },
      network_id: 1,
      gasPrice: 50e9,
      from: publicKey,
      gas: 8e6
    }
  },
  api_keys: {
    etherscan: "XY7JJPPYPNVVYAE22S5NS1W81NQ9727IVE"
  },
  plugins: ["truffle-plugin-verify"],
  compilers: {
    solc: {
      version: "0.5.16",
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
};
