Template.item.helpers({
  editing: function(){
    return Session.equals('editItemId', this._id);
  },
  errors: function(){
    var context = Items.simpleSchema().namedContext('updateForm');
    return context.invalidKeys().map(function(data){ return {message: function() {return context.keyErrorMessage(data.name)}}});
  } 
});

Template.item.events({
  'click .deleteItem': function(){
    Items.remove(this._id);
  },
  'click .editItem': function(){
    Session.set('editItemId', this._id);
  },
  'click .cancelItem': function(){
    Items.simpleSchema().namedContext('updateForm').resetValidation();
    Session.set('editItemId', null);
  },
  'click .saveItem': function(){
    var editItem = {
      store: $("#editItemStore").val(),
      name: $("#editItemName").val(),
      weight: $("#editItemWeight").val(),
      weightType: $("#editItemWeightType").val(),
      qty: $("#editItemQty").val(),
      qtyType: $("#editItemQtyType").val(),
      price: $("#editItemPrice").val()
    }

    Items.update(Session.get('editItemId'), {$set: editItem}, {validationContext: 'updateForm'}, function(error, result) {
      if(!error){
        Session.set('editItemId', null);
      }
    });
  }
});

