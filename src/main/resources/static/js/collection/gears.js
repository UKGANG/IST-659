define(['backbone', 'model/gear'], function (Backbone, Gear) {
    var Gears = Backbone.Collection.extend({
    	url : "/fge/gear",
    	model : Gear,
        idAttribute: "rid",
        sync : mySyncFunction,
        save: function (options) {
            this.sync("update", this, options);
        }

    });

    function mySyncFunction(method, model, options){
    	if ("read" == method) {
    		model.url = "/fge/gear/" + options.gearTypeId;
    	}
    	model.gearIds = options.gearIds;
		return Backbone.sync(method, model, options);
	};
    return Gears;
});