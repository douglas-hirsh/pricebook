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
    
    Items.insert(newItem, function(error, result) {
      //The list of errors is available by calling Books.simpleSchema().namedContext("insertForm").invalidKeys()
      console.log(error, result);
    });

    $('#addItemForm').find('input:text').val('');
    $('#itemStore').focus();
    return false;
  }
});

