Meteor.publish("allItems", function (searchQuery) {
  var mongoQuery = {};
  if(searchQuery){
    _.each(_.keys(searchQuery), function(key){
      mongoQuery[key] = {$regex: searchQuery[key], $options: 'i'};
    });
  }

  return Items.find(mongoQuery,{limit:10});
});
