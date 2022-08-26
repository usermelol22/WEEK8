require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
       accounts: ["4d760aeb8b2b2509f52373ef287a3dc5c5fbbe84f0e650d43e7490335a56619a"]
    }
  }

};