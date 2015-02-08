var addItem = function(){
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
      this.$('form').find('input:text').val('');
      $('#itemStore').focus();
    }
  });
}

Template.addItem.events({
  'submit form': function(e, b){
    addItem();
    return false;
  }  
});

