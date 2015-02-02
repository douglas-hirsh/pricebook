Template.item.helpers({
  editing: function(){
    return Session.equals('editItemId', this._id);
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

    Items.update(Session.get('editItemId'), {$set: editItem});
    Session.set('editItemId', null);
  }
});

