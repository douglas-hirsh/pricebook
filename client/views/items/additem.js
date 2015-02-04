Template.addItem.events({
  'submit form': function(e, b){
    var newItem = {
      store: $('#itemStore').val(),
      name: $('#itemName').val(),
      weight: $('#itemWeight').val(),
      weightType: $('#itemWeightType').val(),
      qty: $('#itemQty').val(),
      qtyType: $('#itemQtyType').val(),
      price: $('#itemPrice').val()
    };
    
    Items.insert(newItem, {validationContext: 'insertForm'}, function(error, result) {
      if(!error){
        $('#addItemForm').find('input:text').val('');
        $('#itemStore').focus();
      }
    });
    
    return false;
  },
  
});

Template.addItem.helpers({
  errors: function(){
    console.log('running errors helper');
    var context = Items.simpleSchema().namedContext('insertForm');
    return context.invalidKeys().map(function(data){ return {message: context.keyErrorMessage(data.name)}});
  }
});

