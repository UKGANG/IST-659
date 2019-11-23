define(['backbone', 'model/gear_type'], function (Backbone, GearType) {
    var GearTypes = Backbone.Collection.extend({
    	url : "/fge/gearType",
    	model : GearType,
        idAttribute: "rid",

    });
    return GearTypes;
});