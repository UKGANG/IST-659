define([ 'backbone'], function(Backbone) {
    var LoginInfo = Backbone.Model.extend({
        url: "/fge/greeting",
        idAttribute: "rid",
        defaults : function() {
            return {
                userName : '',
                password : ''

            };
        },
    });

    return LoginInfo;
});