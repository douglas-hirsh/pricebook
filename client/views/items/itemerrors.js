var contextName = "";

Template.itemerrors.helpers({
  errors: function(){
    var context = Items.simpleSchema().namedContext(this.contextName);
    contextName = this.contextName;
    return context.invalidKeys().map(function(data){ return {message: context.keyErrorMessage(data.name)}});
  },
  attributes: function(){
    return {
      class: contextName + "errors"
    };
  }
});

