const fs = require("fs");
const HDWallet = require("truffle-hdwallet-provider");

const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraProjectId = fs.readFileSync(".infura").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () =>
        new HDWallet(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraProjectId}`
        ),
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
    },
  },
};
