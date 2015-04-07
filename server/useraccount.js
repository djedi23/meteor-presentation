
Meteor.startup(function() {
    ServiceConfiguration.configurations.update(
      { "service": "meetup" },
      {
        $set: {
          "appId": "",
          "secret": ""
        }
      },
      { upsert: true }
    );

    ServiceConfiguration.configurations.update(
      { "service": "github" },
      {
        $set: {
          "clientId": "",
          "secret": ""
        }
      },
      { upsert: true }
    );
});
