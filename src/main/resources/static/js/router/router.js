define([ 'jquery', 'underscore', 'backbone', 'view/index_view',
], function($, _, Backbone, IndexView) {
    var Router = Backbone.Router.extend({

        initialize: function() {
        	new IndexView();
        },

    });

    return Router;

});
