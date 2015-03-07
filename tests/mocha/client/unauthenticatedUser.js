if (!(typeof MochaWeb === 'undefined')){
  

  MochaWeb.testOnly(function(){
    describe("As a non-authenticated user", function(){
      var signInAndOutButton = $('#at-nav-button');
      before(function(){
        if (signInAndOutButton.val() === 'Sign Out'){
          signInAndOutButton.click();
        }
        Meteor.call('clearTestUser');

      });
      it("I should be able to see the sign in button", function(){
        chai.assert.equal(signInAndOutButton.html(),'Sign In');
      });
      it("I should not be able to see the add items accordion", function(){
        chai.assert.equal($('div.addItemAccordion').length, 0);
      });
      it("I should not be able to see the column containing the modification buttons.", function(){
        chai.assert.equal($('table thead tr th').length, 7);
      });
      it("I should be able to register a new user.", function(done){
       
        $('#at-nav-button').click();
        setTimeout(function(){
          $('#at-signUp').click();
          setTimeout(function(){
            $('#at-field-email').val('test@test.com');
            $('#at-field-password').val('test1234');
            $('#at-field-password_again').val('test1234');
            $('#at-btn').click();
            setTimeout(function(){
              chai.assert.equal($('table thead tr th').length, 8);
              done();

            }, 500)

          },500);

          
        }, 500);
      });
    }); 
  });
}
