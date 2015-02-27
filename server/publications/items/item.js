Meteor.publish("allItems", function (searchQuery) {
  var mongoQuery = {};
  if(searchQuery){
    _.each(_.keys(searchQuery), function(key){
      if(_.isNumber(searchQuery[key])){
        mongoQuery[key] = searchQuery[key];
      }else{
        mongoQuery[key] = {$regex: searchQuery[key], $options: 'i'};
      }
    });
  }
  return Items.find(mongoQuery,{limit:10});
});
