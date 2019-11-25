define([ 'backbone'], function(Backbone) {
    var Dashboard = Backbone.Model.extend({
        url: "/fge/user",
        idAttribute: "rid",
        sync : mySyncFunction,
        defaults : function() {
            return {
            	userId : '',
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
    	if ("undefined" != typeof(model.get("userId")) 
    			&& null != model.get("userId").length 
    			&& model.get("userId").length > 0) {
    		method = "update"
    	}
    	return Backbone.sync(method, model, options);
	};

	return Dashboard;
});
