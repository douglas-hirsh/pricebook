Template.itemerrors.helpers({
  errors: function(){
    var context = Items.simpleSchema().namedContext(this.contextName);
    return context.invalidKeys().map(function(data){ return {message: context.keyErrorMessage(data.name)}});
  }
});
