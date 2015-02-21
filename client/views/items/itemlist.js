Meteor.subscribe('allItems');

Template.itemList.helpers({
  items: function() {
    return Items.find();
  }
});
