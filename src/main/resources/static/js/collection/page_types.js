define(['backbone', 'model/page_type'], function (Backbone, PageType) {
    var PageTypes = Backbone.Collection.extend({
    	url : "/fge/pageTypes",
    	model : PageType,
        idAttribute: "rid",

    });

    return PageTypes;
});