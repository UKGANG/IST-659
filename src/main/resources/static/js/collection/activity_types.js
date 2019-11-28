define(['backbone', 'model/activity_type'], function (Backbone, ActivityType) {
    var ActivityTypes = Backbone.Collection.extend({
    	url : "/fge/activityTypes",
    	model : ActivityType,
        idAttribute: "rid",

    });

    return ActivityTypes;
});