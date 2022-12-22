const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {
  it('has a name',async()=>{
    const ETHDaddy=await ethers.getContractFactory('ETHDaddy')
    let ethDaddy=await ETHDaddy.deploy('Eth Daddy','ETHD')
    let result=await ethDaddy.name()
    expect(result).to.equal('Eth Daddy')
     result=await ethDaddy.symbol()
    expect(result).to.equal('ETHD')
  })

})
