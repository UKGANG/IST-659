define([ 'backbone', 'model/page_type', 'model/page_type'], function(Backbone, PageType, User) {
    var Role = Backbone.Model.extend({
        idAttribute: "roleId",
        url : "/fge/role",
        sync : mySyncFunction,
        defaults : function() {
            return {
            	roleId : '',
            	user : new User(),
                pageType : new PageType(),

            };
        },

    });

    function mySyncFunction(method, model, options){
    	if ("delete" == method) {
    		model.url = model.url + "/" + model.get('roleId');
    	}
    	
    	return Backbone.sync(method, model, options);
    }

    return Role;
});


