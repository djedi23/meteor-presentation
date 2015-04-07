Template.press.helpers({
    presentation: function(){
	var self=this;
        if (_.isEmpty(self))
            return undefined;

	if (self)
	    Session.set('currentPresentation', self._id);


	return self;
    }
});
