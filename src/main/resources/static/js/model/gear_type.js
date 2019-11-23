define([ 'backbone'], function(Backbone) {
    var GearType = Backbone.Model.extend({
        idAttribute: "rid",
//        defaults : function() {
//            return {
//                courtId : '',
//                courtName : ''
//
//            };
//        },
    });

    return GearType;
});