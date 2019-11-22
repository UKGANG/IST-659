define(['backbone'], function (Backbone) {
    var GearRental = Backbone.Model.extend({
    	url : "/fge/reservation/gear",
    });
    return GearRental;
});
