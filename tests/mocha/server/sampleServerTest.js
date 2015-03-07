if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    Meteor.methods({
      clearTestUser: function(){
        Meteor.users.remove({emails: {$elemMatch: {address: 'test@test.com'}}});
      }
    });

    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(){
        chai.assert(Meteor.release);
      });
    });
  });
}
