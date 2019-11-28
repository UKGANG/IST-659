define([ 'backbone'], function(Backbone) {
    var ActivityType = Backbone.Model.extend({
        idAttribute: "rid",
        defaults : function() {
            return {
            	activityTypeId : '',
                activityName : ''

            };
        },

    });

    return ActivityType;
});