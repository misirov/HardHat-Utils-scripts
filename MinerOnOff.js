const hre = require("hardhat");

/// Pass argument to script. Ex:
///     $ node ./MinerOnOff.js on
///     $ node ./MinerOnOff.js off

const miner = async () => {
    const myArgs = process.argv.slice(2);
    if(myArgs[0] === 'off'){
        console.log("Turning OFF automine...")
        let a = await hre.network.provider.send("evm_setAutomine", [false]);
        console.log(a, "... done")
        return 0;
    
    } else if(myArgs[0] === 'true') {
        console.log("Turning on automine...")
        await hre.network.provider.send("evm_setAutomine", [true]);
        console.log("... done")
        return 0;
    } 
    else{
        console.log("please pass 'true' or 'false' as argument\n")
        return 1;
    }
}

miner()
