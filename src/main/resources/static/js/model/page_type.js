define([ 'backbone'], function(Backbone) {
    var PageType = Backbone.Model.extend({
        idAttribute: "rid",
        defaults : function() {
            return {
                pageTypeId : '',
                pageName : ''

            };
        },

    });

    return PageType;
});