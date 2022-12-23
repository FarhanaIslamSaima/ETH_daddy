const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {
  let ethDaddy;
  const name='Eth Daddy'
  const symbol='ETHD'
  beforeEach(async()=>{
    [deployer,owner]=await ethers.getSigners();
    const ETHDaddy=await ethers.getContractFactory('ETHDaddy')
    ethDaddy=await ETHDaddy.deploy('Eth Daddy','ETHD')
    const testalist=await ethDaddy.connect(deployer).list('jackEth',tokens(10));
    await testalist.wait();
  })
  describe('deployment',async()=>{
    it('has a name',async()=>{
   
      let result=await ethDaddy.name()
      expect(result).to.equal(name)
   
    })
    it('has a symbol',async()=>{
     
       let result=await ethDaddy.symbol()
      expect(result).to.equal(symbol)
    })
    it('sets the owner',async()=>{
     
      let result=await ethDaddy.owner()
     expect(result).to.equal(deployer.address)
  
  })
  it('return max supply',async()=>{
    let result=await ethDaddy.maxSupply();
    expect(result).to.be.equal(1);
  })
  it('return total Supply',async()=>{
    const totalSupply=await ethDaddy.totalSupply();
    expect(totalSupply).to.be.equal(0)
  })
  })


 describe('testing list',async()=>{
  it('setup domain list',async()=>{
    let domains=await ethDaddy.getDomain(1);
    expect(domains.name).to.be.equal('jackEth')
    expect(domains.cost).to.be.equal(tokens(10))
    expect(domains.isOwned).to.be.equal(false)
  })
 })
 
 describe('Minting',async()=>{
  const ID=1;
  const amount=ethers.utils.parseUnits("10",'ether')
  
  beforeEach(async()=>{
    const transaction=await ethDaddy.connect(owner).mint(ID,{value:amount})
    await transaction.wait();
  })
  it('update the owner',async()=>{
     const owner1=await ethDaddy.ownerOf(ID);
     expect(owner1).to.be.equal(owner.address);
  })
  it('update contract balance',async()=>{
    const balance=await ethDaddy.getBalance();
    expect(balance).to.be.equal(amount);
   })
   it('update domain status',async()=>{
    const domains=await ethDaddy.getDomain(ID);
    expect(domains.isOwned).to.be.equal(true);
   })
   it('Update the total supply',async()=>{
    const totalSupply=await ethDaddy.totalSupply();
    expect(totalSupply).to.be.equal(1);
   })
 })

 describe('withdrawing',async()=>{
  const ID=1;
  const amount=ethers.utils.parseUnits("10",'ether');
  var balancebefore;
  beforeEach(async()=>{
    balancebefore=await ethers.provider.getBalance(deployer.address);

    const transaction1=await ethDaddy.connect(owner).mint(ID,{value:amount})
    await transaction1.wait()

    const transaction2=await ethDaddy.connect(deployer).withdraw();
    await transaction2.wait()

  })
  it('update owner balance',async()=>{
    const balanceAfter=await ethers.provider.getBalance(deployer.address);
    expect(balanceAfter).to.be.greaterThan(balancebefore);
  })
  it('update contract balance',async()=>{
    const result=await ethDaddy.getBalance();
    expect(result).to.be.equal(0);
  })
 })


})




