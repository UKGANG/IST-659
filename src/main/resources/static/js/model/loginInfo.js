define([ 'backbone'], function(Backbone) {
    var LoginInfo = Backbone.Model.extend({
        url: "/fge/login",
        idAttribute: "rid",
        defaults : function() {
            return {
                email : '',
                password : ''

            };
        },
    });

    return LoginInfo;
});