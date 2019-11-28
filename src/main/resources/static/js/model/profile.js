define([ 'backbone'], function(Backbone) {
    var Profile = Backbone.Model.extend({
        url: "/fge/user",
        idAttribute: "userId",
        sync : mySyncFunction,
        defaults : function() {
            return {
            	profileId : '',
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
    			&& model.get("userId")) {
    		options.url = model.url + "/" + model.get("userId")
    	} else if (model.get("userId")) {
    		method = "update"
    	}
    	return Backbone.sync(method, model, options);
	};

	return Profile;
});
