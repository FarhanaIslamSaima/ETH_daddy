const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {
  let ethDaddy;
  const name='Eth Daddy'
  const symbol='ETHD'
  beforeEach(async()=>{
    const ETHDaddy=await ethers.getContractFactory('ETHDaddy')
    ethDaddy=await ETHDaddy.deploy('Eth Daddy','ETHD')
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
 

})
