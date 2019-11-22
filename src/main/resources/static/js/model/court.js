define([ 'backbone'], function(Backbone) {
    var Court = Backbone.Model.extend({
        idAttribute: "rid",
//        defaults : function() {
//            return {
//                courtId : '',
//                courtName : ''
//
//            };
//        },
    });

    return Court;
});