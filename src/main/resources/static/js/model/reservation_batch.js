define([ 'backbone', 'collection/reservations'], function(Backbone, Reservations) {
    var ReservationBatch = Backbone.Model.extend({
    	url : "/fge/court/reservation",
        idAttribute: "rid",
        model: Reservations 
    });

    return ReservationBatch;
});