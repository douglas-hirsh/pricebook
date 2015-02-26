Template.itemsearch.events({
  'keyup .searchInput': _.throttle(function(e, t) {
    var searchQuery = Session.get('searchQuery') || {};
    searchQuery[this.columnName] = t.$('.searchInput').val();
    Session.set('searchQuery', searchQuery);
  },500)
});

Template.itemsearch.rendered=function(){
  var searchQuery = Session.get('searchQuery') || {};
  var searchColumnValue = searchQuery[this.data.columnName] || '';

  this.$('.searchInput').val(searchColumnValue);
}
