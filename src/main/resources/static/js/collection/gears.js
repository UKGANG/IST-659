define(['backbone', 'model/gear'], function (Backbone, Gear) {
    var Gears = Backbone.Collection.extend({
    	url : "/fge/gear",
    	model : Gear,
        idAttribute: "rid",
        sync : mySyncFunction,

    });

    function mySyncFunction(method, model, options){
		options.url = "/fge/gear/" + options.gearTypeId;
		return Backbone.sync(method, model, options);
	};
    return Gears;
});