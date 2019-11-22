define(['backbone', 'model/court'], function (Backbone, Court) {
    var Courts = Backbone.Collection.extend({
    	url : "/fge/court",
    	model : Court,
        defaults : function() {
            return {
                courtId : '',
                courtName : ''

            };
        }
    });
    return Courts;
});
