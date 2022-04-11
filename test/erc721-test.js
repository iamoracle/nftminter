const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC721", function () {

  let erc721

  this.beforeEach(async function () {
    const ERC721 = await ethers.getContractFactory("ERC721");

    erc721 = await ERC721.deploy("XYZLOTTERY", "XYZL");

  })
  it("Name should be consistent", async function () {

    expect(await erc721.name()).to.equal("XYZLOTTERY");
  });

  it("Symbol should be consistent", async function () {

    expect(await erc721.symbol()).to.equal("XYZL");
  });
});
