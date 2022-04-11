const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Minter", function () {

  let minter

  this.beforeEach(async function () {
    const Minter = await ethers.getContractFactory("Minter");

    minter = await Minter.deploy("Minter", "MNT");

  })
  it("Name should be consistent", async function () {

    expect(await minter.name()).to.equal("Minter");
  });

  it("Symbol should be consistent", async function () {

    expect(await minter.symbol()).to.equal("MNT");
  });
});
