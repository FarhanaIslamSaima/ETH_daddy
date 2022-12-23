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
  })
  it('sets the owner',async()=>{
     
    let result=await ethDaddy.owner()
   expect(result).to.equal(deployer.address)

})
it('return max supply',async()=>{
  let result=await ethDaddy.maxSupply();
  expect(result).to.be.equal(1);
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
    const transaction=await ethDaddy.connect(owner).mint(ID)
    await transaction.wait();
  })
  it('update the owner',async()=>{
     const owner1=await ethDaddy.ownerOf(ID);
     expect(owner1).to.be.equal(owner.address);
  })
 })

})
