const hre = require("hardhat");

async function pending(){
    const a = await hre.network.provider.send("eth_getBlockByNumber", ["pending",false,]);
    console.log(a)
}
pending()
