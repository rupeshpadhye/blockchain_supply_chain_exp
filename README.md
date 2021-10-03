# Supplay Chain DAPP

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.


## Ganache Setup

1. Install `npm install -g ganache-cli`

## Truffle Setup

1. Install `npm install truffle@4.1.17 -g`
1. Clone the repo
1. Go to the folder project-6
1. Run `truffle develop`
1. Migrate contracts `migrate --reset`
1. Run `test` inside the truffle console

## Frontend Setup

1. Go to the folder project-6
1. Install dependencies with `npm install`
1. Run local server `npm run dev`
1. Open `localhost:3000` in your browser

## Deploy in Rinkeby

1. Run `truffle migrate --reset --network rinkeby`

- Create `.infura` and `.secret` files in `project-6` contains mnemonic and project id

Network: rinkeby (id: 4)
  ConsumerRole: 0x47Ce67cb09ad2470BE2cd600876bc70460CB89CE
  DistributorRole: 0x4265dfCcb7E1B5c0caaA8874cdD72aCc1f3945C7
  FarmerRole: 0xb3e0950EAA8210b772dAB72e1BC5405071885Bde
  Migrations: 0x1158f958572FB5b8692d25e1efc15862Fe9F2c77
  RetailerRole: 0x037bC4c60c1ed23A800da03324bC8F1a67FD41aC
  SupplyChain: 0xf5682f0c131cdD75350e2642f3364563cFBb49C0


- Transaction ID: 0xae66e9af68fd645ec5d6252e9af0eb885a657d693cff6684f47cf7a7d6cea236

- Contract address ([Contract deployed in Rinkeby](https://rinkeby.etherscan.io/tx/0xae66e9af68fd645ec5d6252e9af0eb885a657d693cff6684f47cf7a7d6cea236#eventlog))


## Versions 
 Node - 16