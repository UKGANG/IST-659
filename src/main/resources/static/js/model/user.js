define([ 'backbone'], function(Backbone) {
    var User = Backbone.Model.extend({
        idAttribute: "rid",
        url : "/fge/user",
    });

    return User;
});
