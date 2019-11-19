define([ 'backbone'], function(Backbone) {
    var Dashboard = Backbone.Model.extend({
        //urlRoot: "/rest/monitor/trackings",
        idAttribute: "rid",
        defaults : function() {
            return {
                userName : '',
                password : ''

            };
        },

    });

    return Dashboard;
});