var contextName = "";

Template.itemerrors.helpers({
  errors: function(){
    var context = Items.simpleSchema().namedContext(contextName);
    return context.invalidKeys().map(function(data){ return {message: context.keyErrorMessage(data.name)}});
  },
  attributes: function(){
    return {
      class: "errors " + contextName
    };
  }
});

Template.itemerrors.created = function(){
  contextName = this.data.contextName;
}
