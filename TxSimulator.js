const { ethers } = require("hardhat");

/// Simulating transactions between 2 accounts

const botOneTransact = async (bot_1, bot_2) => {
    let amount = Math.floor(Math.random() * 90)
    var tx = {
        from: bot_1.address,
        to:bot_2.address,
        value: ethers.utils.parseEther(amount.toString()),
        data: "0x00"
    }
    const transaction = await bot_1.sendTransaction(tx)
    n = transaction.value / 10**18
    console.log( `Bot 1 sent ${n.toString()} Eth to Bot 2`)
}

const botTwoTransact = async (bot_1, bot_2) => {
    let amount = Math.floor(Math.random() * 90)
    var tx = {
        from: bot_2.address,
        to:bot_1.address,
        value: ethers.utils.parseEther(amount.toString()),
        data: "0x00"
    }
    const transaction = await bot_2.sendTransaction(tx)
    n = transaction.value / 10**18
    console.log( `Bot 2 sent ${n.toString()} Eth to Bot 1\n`)
}



main = async() => {
    console.log('Starting transaction simulation. Make sure node listening on 127.0.0.1:8545')
    
    /// hardhat development private keys
    const pk_one = "0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0";
    const pk_two = "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";

    /// connect to hardhat local node
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

    const bot_one = new ethers.Wallet(pk_one, provider);
    const bot_two = new ethers.Wallet(pk_two, provider)

    console.log(`Bot addresses:\n> Bot 1 address: ${bot_one.address}\n> Bot 2 address: ${bot_two.address}\n`)

    while(true){
        await new Promise(resolve => setTimeout(resolve, 4000)),
        botOneTransact(bot_one, bot_two)

        await new Promise(resolve => setTimeout(resolve, 4000)),
        botTwoTransact(bot_one, bot_two)    
    }

}

main()
