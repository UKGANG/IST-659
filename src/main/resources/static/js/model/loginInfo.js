define([ 'backbone'], function(Backbone) {
    var LoginInfo = Backbone.Model.extend({
        //urlRoot: "/rest/monitor/trackings",
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