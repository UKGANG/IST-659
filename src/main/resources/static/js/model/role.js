define([ 'backbone', 'model/page_type', 'model/page_type'], function(Backbone, PageType, User) {
    var Role = Backbone.Model.extend({
        idAttribute: "userId",
        url : "/fge/role",
        defaults : function() {
            return {
            	roleId : '',
            	user : new User(),
                pageType : new PageType(),

            };
        },
    });

    return Role;
});
