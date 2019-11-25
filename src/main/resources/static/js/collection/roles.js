define(['backbone', 'model/role'], function (Backbone, Role) {
    var Roles = Backbone.Collection.extend({
    	url : "/fge/role",
    	model : Role,
        idAttribute: "roleId",

    });

    return Roles;
});