Template.item.events({
  'click .deleteItem': function(){
    Items.remove(this._id);
  }
});

