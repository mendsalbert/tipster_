# Tipster
<p align="center"> 
 <img src="https://bafybeie4voti3c45dcbyyrn55t3k2ob2oy7ig4v22lklnrt2lul7xl5nmy.ipfs.infura-ipfs.io/" />
</p>

<p align="center"> 
Tipster
</p>


<p align="center"> 
Tipster is a social rewarding platform with blockchain
</p>

<p align="center"> 
 <a href="https://tipster-peach.vercel.app/">View App</a>
</p>

# About The Project
![This is an image](https://bafybeieo4fpkee35frhtxjsck6zgkrowgd4spxzmhgn7vrrcrxtln3m5y4.ipfs.infura-ipfs.io/)

Making use of blockchain technology, we present to you Tipster. Tipster is a social rewarding platform that seeks to reward users for their posts by the way of tips in crypto. A user makes a post on the platform which is available to the community and anyone in this community can show impression to the post by giving crypto in the form of tips. The platform comes with search page where users can explore posts made by other users and can also make a search for a particular post. There is also a profile visit where a user can click on a particular identicon by a user to see other posts by that user. The platform also comes with my profile which shows all posts made by yourself should you find yourself on the platform. There is also a chatting side of the platform. The chat side allow all users to communicate together in a single group and this is to allow users on the platform socialize. The chats are available on the platform for a specified period.

# Built With
This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
- [React.js](https://reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.13/)
- [Moralis](https://moralis.io/)

# Getting started
The project consist of the backend and also the front end.

### Prerequisites
- nodejs installed
- npm
- Ganache 
- truffle
 
npm install npm@latest -g
npm install -g truffle


### Local setup
To run this project locally, follow these steps.
1. Clone the project locally, change into the directory, and install the dependencies:

git clone https://github.com/mendsalbert/tipster_

cd Tipster

# install using NPM or Yarn
npm install

# or

yarn

2. Start Ganache
3. Deploy the contracts to the local network

truffle migrate --reset

4.Start the app

npm start


# Configuration
To deploy to Ropsten test, update the configurations located in truffle-config.js to use a private key and, optionally, deploy to a private RPC like Infura.

js
require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = ''; 

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/0bb5f379eaa943809fd8ebf66724df89"),
      network_id: 3,
      gas: 5000000,
      confirmation: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}



# Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# License
Distributed under the MIT License.

# Contact
- Brilliant Kwakye - https://twitter.com/a_moah__
- Mends Albert - https://twitter.com/mendalbert
- Daniel Sarkodie - https://twitter.com/AbrantepaSark
