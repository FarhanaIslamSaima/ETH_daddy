// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  const [deployer]=await ethers.getSigners();
  const Name='Eth Daddy';
  const symbol='ETHD';
  const Ethdaddy=await ethers.getContractFactory('ETHDaddy');
  const ethDaddy=await Ethdaddy.deploy(Name,symbol);
  await ethDaddy.deployed();
  console.log(`{Deployed domain contract address at:${ethDaddy.address}}`)

  const names=['saima.eth','Boni.eth','Nisa.eth','Raba.eth','Mithila.eth','Samiha.eth','Ontora.eth'];
  const costs=[tokens(10),tokens(20),tokens(30),tokens(40),tokens(50),tokens(60)]
  for(var i=0;i<6;i++){
    const transaction=await ethDaddy.connect(deployer).list(names[i],costs[i]);
    await transaction.wait();

    console.log(names[i]);

  }

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
