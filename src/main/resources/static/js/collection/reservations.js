define(['backbone', 'model/reservation'], function (Backbone, Reservation) {
    var Reservations = Backbone.Collection.extend({
    	url : "/fge/court/reservation",
    	model : Reservation,
        idAttribute: "rid",

    });
    return Reservations;
});