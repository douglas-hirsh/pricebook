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
      $('#addItem').find('input:text').val('');
      $('#itemStore').focus();
    }
  });
}

Template.addItem.events({
  'click button': function(e, b){
    
    return false;
  },
  'keypress input': function(e){
    if(e.keyCode === 13){
      addItem();
    }
    else if(e.keyCode === 27){
      $('#addItem').find('input:text').val('');
      $('#itemStore').focus();
    }
  }

  
});

