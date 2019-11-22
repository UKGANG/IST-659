define([ 'backbone'], function(Backbone) {
    var Reservation = Backbone.Model.extend({
    	url : "/fge/court/reservation",
        idAttribute: "rid",

    });

    return Reservation;
});