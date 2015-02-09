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

var resetForm = function(template){
  template.$('form').find('input:text').val('');
  template.$('#addItemAccordion').accordion('close', 0);
}

Template.addItem.events({
  'submit form': function(e, template){
    addItem();
    return false;
  },
  'click #cancelButton': function(e, template){
    resetForm(template);
  },
  'keypress input': function(e, template){
    if(e.keyCode === 27){
      resetForm(template);
    } 
  }
 
});

Template.addItem.rendered = function(){
  var self = this;
  $('#addItemAccordion.ui.accordion').accordion({
    onOpen: function(){
      self.$('#itemStore').focus();
    }
  });
}

