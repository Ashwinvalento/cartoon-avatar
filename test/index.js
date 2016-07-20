var should = require('chai').should(),
	toonavatar = require("../lib/cartoon-avatar");

describe('generate_avatar', function() {
	var baseURL = "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/";
	
	  it('should generate correct uri given no options', function() {
		  toonavatar.generate_avatar().should.be.ok;
		  toonavatar.generate_avatar().should.not.have.string("undefined");
	  });
	  
	  it('should generate correct uri given gender as male and an id', function() {
		  toonavatar.generate_avatar({"gender":"male","id":1}).should.equal(baseURL+"male/1.png");
		  toonavatar.generate_avatar({"gender":"male","id":75}).should.equal(baseURL+"male/75.png");
		  toonavatar.generate_avatar({"gender":"male","id":129}).should.equal(baseURL+"male/129.png");
		  toonavatar.generate_avatar({"gender":"male","id":129}).should.not.equal(baseURL+"female/129.png");
		  
	  });
	  
	  it('should generate correct uri given gender as male using shorthand and an id', function() {
		  toonavatar.generate_avatar({"gender":"m","id":1}).should.equal(baseURL+"male/1.png");
		  toonavatar.generate_avatar({"gender":"m","id":75}).should.equal(baseURL+"male/75.png");
		  toonavatar.generate_avatar({"gender":"m","id":129}).should.equal(baseURL+"male/129.png");
		  toonavatar.generate_avatar({"gender":"m","id":129}).should.not.equal(baseURL+"female/129.png");

		  
	  });
	  
	  it('should generate correct uri given gender as female and an id', function() {
		  toonavatar.generate_avatar({"gender":"female","id":1}).should.equal(baseURL+"female/1.png");
		  toonavatar.generate_avatar({"gender":"female","id":75}).should.equal(baseURL+"female/75.png");
		  toonavatar.generate_avatar({"gender":"female","id":114}).should.equal(baseURL+"female/114.png");
		  toonavatar.generate_avatar({"gender":"female","id":114}).should.not.equal(baseURL+"male/114.png");

	  });
	  
	  it('should generate correct uri given gender as female using shorthand and an id', function() {
		  toonavatar.generate_avatar({"gender":"f","id":1}).should.equal(baseURL+"female/1.png");
		  toonavatar.generate_avatar({"gender":"f","id":75}).should.equal(baseURL+"female/75.png");
		  toonavatar.generate_avatar({"gender":"f","id":114}).should.equal(baseURL+"female/114.png");
		  toonavatar.generate_avatar({"gender":"f","id":114}).should.not.equal(baseURL+"male/114.png");

	  });
	  
	  it('should generate correct uri given gender as male and No id', function() {
		  toonavatar.generate_avatar({"gender":"male"}).should.have.string("male");
		  toonavatar.generate_avatar({"gender":"male"}).should.not.have.string("female");

	  });
	  
	  it('should generate correct uri given gender as male as shorthand and No id', function() {
		  toonavatar.generate_avatar({"gender":"m"}).should.have.string("male");
		  toonavatar.generate_avatar({"gender":"m"}).should.not.have.string("female");

	  });
	  
	  it('should generate correct uri given gender as female and No id', function() {
		  toonavatar.generate_avatar({"gender":"female"}).should.have.string("female");

	  });
	  
	  it('should generate correct uri given gender as female as shorthand and No id', function() {
		  toonavatar.generate_avatar({"gender":"f"}).should.have.string("female");

	  });
	  
	  it('should generate correct uri given gender as male and an id greater than the LIMIT', function() {
		  toonavatar.generate_avatar({"gender":"male","id":150}).should.not.have.string("undefined");
		  toonavatar.generate_avatar({"gender":"male","id":150}).should.not.equal(baseURL+"male/150.png");
		  toonavatar.generate_avatar({"gender":"male","id":130}).should.equal(baseURL+"male/1.png");
	  });
	  
	  it('should generate correct uri given gender as female and an id greater than the LIMIT', function() {
		  toonavatar.generate_avatar({"gender":"female","id":10}).should.not.have.string("undefined");
		  toonavatar.generate_avatar({"gender":"female","id":150}).should.not.equal(baseURL+"female/150.png");
		  toonavatar.generate_avatar({"gender":"female","id":115}).should.equal(baseURL+"female/1.png");
	  });
});