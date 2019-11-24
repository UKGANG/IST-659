define(['backbone', 'model/user'], function (Backbone, User) {
    var Users = Backbone.Collection.extend({
    	url : "/fge/user",
    	model : User,
        idAttribute: "rid",

    });

    return Users;
});