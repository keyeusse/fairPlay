var Licitacion = artifacts.require("Licitacion");
chai = require("chai");
chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

expect = chai.expect;

contract("Testing the tender", function(tenders){
    describe("Deploy the tender contract", function(){
        it("Get and instance of the tender contract", function(){
            return Licitacion.deployed().then(function(instance){
            tenderContract = instance;
            expect(tenderContract).to.be.not.null;
            })
        });
    });

    describe("Variables", function(){
        describe("Name", function(){
            it("Should set the name properly", function(){
                return tenderContract.setName("Nombre de la empresa").then(function(response){
                expect(response).to.not.be.an("error");
                });
            });
            it("Should get the name saved previously", function(){
                return tenderContract.name().then(function(name){
                expect(name).to.be.equals("Nombre de la empresa");
                });
            });
            it("Should reject saving a name from another account", function(){
                return expect(tenderContract.setName("Contrato de Salud", {"from": tenders[4]})).to.be.eventually.rejected;
            });
            it("Should get the name saved originally", function(){
                return tenderContract.name().then(function(name){
                expect(name).to.be.equals("Nombre de la empresa");
                });
            });
         });
     });
});