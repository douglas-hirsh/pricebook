Meteor.publish("allItems", function (searchQuery) {
  return Items.find({name: {$regex: searchQuery, $options: 'i'}},{limit:10});
});
