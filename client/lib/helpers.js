UI.registerHelper('isLoggedIn', function() {
  return !!Meteor.user();
});
UI.registerHelper('currentUserName', function() {
  if(Meteor.user()){
    return Meteor.user().emails[0].address;
  }
});
