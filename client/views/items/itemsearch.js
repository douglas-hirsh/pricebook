Template.itemsearch.events({
  'keyup .searchInput': _.throttle(function(e, t) {
    Session.set('searchQuery', t.$('.searchInput').val());
  },500)
});
