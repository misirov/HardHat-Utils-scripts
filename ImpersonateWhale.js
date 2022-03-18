
// on ftm network 
// Impersonating the account of a whale with TOKEN
const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider();

const whale = "0xd3d176F7e4b43C70a68466949F6C64F06Ce75BB9";
const USDC_address = "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75";
const USER_address = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"


async function ImpersonateWhale(){
    await provider.send("hardhat_impersonateAccount", ["0xd3d176F7e4b43C70a68466949F6C64F06Ce75BB9"]);
    const whale = await provider.getSigner("0xd3d176F7e4b43C70a68466949F6C64F06Ce75BB9");

    const usdc = new ethers.Contract(
        USDC_address,
        [ "function totalSupply() external view returns (uint256)", 
          "function transfer(address to, uint256 amount) external returns (bool)"
        ], 
        whale
    )
    var tx = await usdc.transfer(USER_address, "400000000")
    console.log(tx)
}

ImpersonateWhale()
