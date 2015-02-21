Meteor.publish("allItems", function () {
  return Items.find();
});
