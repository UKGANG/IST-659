define([ 'backbone'], function(Backbone) {
    var Court = Backbone.Model.extend({
        idAttribute: "rid",
    });

    return Court;
});