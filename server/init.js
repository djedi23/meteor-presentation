Meteor.startup(function(){
  if (! modules.collections.Presentations.findOne({name:'mypresentation'})) {
    modules.collections.Presentations.insert({
      name: 'mypresentation',
      steps: [
	{id:"s1",
	  x:-1000,
	  y:-1500,
	  md: "rrezy: reactive prezentation",
	  style:"clean",
	  worldStyle:"clear"
	},
	{id:"s2",
	  x:0,
	  y:-1500,
	  "rotate":"270", "scale":"3", "rotateY":"45",
	  md: "Don't you think that presentations given **in modern browsers** shouldn't **copy the limits** of 'classic' slide decks?",
	  "interaction" : {
            "type" : "quiz",
	    "data" : {
	      "question" : "Question:",
	      "responses" : [ 
                {
		  "k" : "r1",
		  "l" : "reponse 1"
                }, 
                {
		  "k" : "r2",
		  "l" : "reponse 2"
                }
	      ]
            }}
	},
	{id:"s3",
	  x:1000,
	  y:-1500,
	  style:"clean",
	  worldStyle:"blue",
	  md: "Would you like to **impress your audience** with **stunning visualization** of your talk?"
	}
      ]
    });
  }
});


