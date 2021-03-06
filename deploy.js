const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "type job olive correct damp vote fold layer lumber list garment enable",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/b74b7fcce44e42af8b71dfad0e7a71a9"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
    
  console.log(interface);
  console.log("Contract deployed to", result.options.address);
};

deploy();
