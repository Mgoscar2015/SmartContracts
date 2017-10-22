var Person = artifacts.require("Person");
expect = require("chai").expect;

contract("Testing the Person contract",function(accounts){
 describe("Deploy the Person contract",function(){
 	it("Get and instance of the Person contract",function(){
 	   return Person.new().then(function(instance){
 	   	personContract = instance;
 	   });
 	});
 });

 describe("Test the contract variables",function() {
	describe("Variable: name",function(){
		it("Use setName to set a first name", function(){
			return personContract.setName("mgoscar").then(function(response){
				expect(response).to.not.be.an("error smart Contract");
				});
			});

		it("check the first name was set properly",function(){
			return personContract.name().then(function(response){
				expect(response.toString()).to.be.equal("mgoscar");
				});
			});	
	
		it("Use setName to set a second name", function(){
			return personContract.setName("Maria").then(function(response){
				expect(response).to.not.be.an("error smart Contract");
				});
			});

		it("check the second name was set properly",function(){
			return personContract.name().then(function(response){
				expect(response.toString()).to.be.equal("Maria");
				});
			});	
		});	
	});
});