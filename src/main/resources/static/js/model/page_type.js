define([ 'backbone'], function(Backbone) {
    var Dashboard = Backbone.Model.extend({
        idAttribute: "rid",
        defaults : function() {
            return {
                pageTypeId : '',
                pageName : ''

            };
        },

    });

    return Dashboard;
});