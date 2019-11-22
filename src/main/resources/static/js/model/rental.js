define([ 'backbone'], function(Backbone) {
    var Rental = Backbone.Model.extend({
        url: "/fge/reservation/gear",
        idAttribute: "rid",
    });

    return Rental;
});