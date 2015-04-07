Meteor.startup(function () {
    Accounts.onCreateUser(function(options, user) {
        if (Meteor.users.find().count() === 0)
            user.roles=_.map(modules.rolesList, function(e){return e.role;});

        return user;
    });
});
