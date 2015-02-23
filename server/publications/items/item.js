Meteor.publish("allItems", function (searchQuery) {
  console.log('allItems pub executes');
  console.log('searchquery', searchQuery);
  return Items.find({name: {$regex: searchQuery, $options: 'i'}});
});
