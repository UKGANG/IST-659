define([ 'backbone'], function(Backbone) {
    var GearType = Backbone.Model.extend({
        idAttribute: "rid",
    });

    return GearType;
});