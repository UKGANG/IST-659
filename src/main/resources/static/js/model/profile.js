define([ 'backbone'], function(Backbone) {
    var Profile = Backbone.Model.extend({
        url: "/fge/user",
        idAttribute: "userId",
        sync : mySyncFunction,
        defaults : function() {
            return {
            	participantId : '',
                email : '',
                password : '',
                repeat : '',
                firstName : '',
                middleName : '',
                lastName : '',
                gender : '',
                phoneNo : '',
                ssn : '',
                dob : '',

            };
        },

    });

    function mySyncFunction(method, model, options){
    	if ("read" == method 
    			&& model.get("participantId")) {
    		options.url = model.url + "/" + model.get("participantId")
    	} else if (model.get("participantId")) {
    		method = "update"
    	}
    	return Backbone.sync(method, model, options);
	};

	return Profile;
});
