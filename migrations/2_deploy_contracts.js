var Licitacion = artifacts.require("Licitacion");

module.exports = function(deployer) {
  deployer.deploy(Licitacion);
};