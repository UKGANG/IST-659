define([ 'backbone', 'model/page_type'], function(Backbone, PageType) {
    var Role = Backbone.Model.extend({
        idAttribute: "userId",
        url : "/fge/role",
        defaults : function() {
            return {
            	roleId : '',
            	userId : '',
            	roleName : '',
                pageType : new PageType(),

            };
        },
    });

    return Role;
});
