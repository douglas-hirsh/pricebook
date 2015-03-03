Tracker.autorun(function(){
  Meteor.subscribe('allItems', Session.get('searchQuery'));
});

Template.itemList.helpers({
  items: function() {
    return Items.find();
  }
});

Template.itemList.events({
  'click #searchButton': function(e, t){
    if($('.ui.input.filterInput:visible').length != 0){
      Session.set('searchQuery', {});
    }
    $('.ui.input.filterInput').transition('slide down');
  }
});
