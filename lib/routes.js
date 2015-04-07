
//var subs = new SubsManager();

Router.route('/', {
  name:'home',
  template: 'press',
  data: function () {
    return modules.collections.Presentations.findOne({name:'mypresentation'});
  },
  waitOn: function() {
    return Meteor.subscribe('presentationsByName', 'mypresentation');
  }
});

Router.route('/p/:name', {
  name:'presentation',
  template: 'press',
  data: function () {
    return modules.collections.Presentations.findOne({name:this.params.name});
  },
  waitOn: function() {
    var self = this;
    return Meteor.subscribe('presentationsByName', self.params.name);
  }
});

