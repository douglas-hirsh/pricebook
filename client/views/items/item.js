Meteor.subscribe('allItems');

Template.item.helpers({
  editing: function(){
    return Session.equals('editItemId', this._id);
  },
  canEdit: function(){
    if(Meteor.userId() !== this.owner){
      return "hidden";
    }
  }
});

var saveItem = function(){
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
Template.item.events({
  'click .deleteItem': function(){
    Items.remove(this._id);
  },
  'click .editItem': function(){
    Items.simpleSchema().namedContext('updateForm').resetValidation();
    Items.simpleSchema().namedContext('insertForm').resetValidation();
    Session.set('editItemId', this._id);
  },
  'click .cancelItem': function(){
    Items.simpleSchema().namedContext('updateForm').resetValidation();
    Items.simpleSchema().namedContext('insertForm').resetValidation();
    Session.set('editItemId', null);
  },
  'click .saveItem': function(){
    saveItem();
  },
  'keypress input': function(e){
    if(e.keyCode === 13){
      saveItem();
    }
    else if(e.keyCode === 27){
      Session.set('editItemId', null);
    }
  }
});

