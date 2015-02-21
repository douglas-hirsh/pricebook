AccountsTemplates.configureRoute('signIn');
Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('itemList');
});
