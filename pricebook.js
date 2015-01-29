Items = new Mongo.Collection('items');

if(Meteor.isClient){
  Template.itemList.helpers({
    items: function() {
      return Items.find();
    }
  });  
}
