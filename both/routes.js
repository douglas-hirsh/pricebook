AccountsTemplates.configure({
  defaultState: 'hide',
  onSubmitHook: function(errors, state){
    if(!errors){
      AccountsTemplates.setState('hide');
    }
  }
});

Router.route('/', function () {
  AccountsTemplates.setState('hide');
  this.render('itemhome');
});
