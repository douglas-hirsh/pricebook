Template.itemsearch.events({
  'keyup .searchInput': _.throttle(function(e, t) {
    Session.set('searchQuery', {name: t.$('.searchInput').val()});
  },500)
});
