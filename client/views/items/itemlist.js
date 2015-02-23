Tracker.autorun(function(){
  Meteor.subscribe('allItems', Session.get('searchQuery'));
});

Template.itemList.helpers({
  items: function() {
    return Items.find();
  }
});
