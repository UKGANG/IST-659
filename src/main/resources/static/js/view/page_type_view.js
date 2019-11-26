define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'bootbox'
	, 'jquery.dataTables', 'jquery.autocomplete'
	, 'model/role', 'collection/roles'
	, 'model/page_type', 'collection/page_types', 'text!template/page_type.html'
		], function($, _, Backbone, bootstrap4, bootbox
				, dataTable, autocomplete
				, Role, Roles
				, PageType, PageTypes, PageTypeHTML) {
	var PageTypeView = Backbone.View.extend({
		el : null,
		template : _.template(PageTypeHTML),
		pageTypes : new PageTypes(),
		events: {
			"click .dropdown-menu li" : "switchDropdown",
         },

		initialize : function() {
			console.log('Page type dropdown initialized');
			
		},

		render: function() {
			var that = this;
			this.pageTypes.fetch({
				success: function (model) {
					that.$el.html(that.template({labels: model.models}));
					_.bindAll(that, "switchDropdown");
					that.switchDropdown();
                },
			});
		},

		switchDropdown: function(e) {
			var that = this;
			var pageTypeId = "";
			if (e) {
				var selText = $(e.currentTarget).html();
				$('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
				pageTypeId = $(e.currentTarget).attr("data");
			}
			// roles
			var roles = new Roles();
			roles.fetch({
				data: {pageTypeId: pageTypeId},
				success: function (model) {
					that.parent.roles = model;
					that.parent.refreshGrid();
                },
			});
		},

//		refreshGrid: function() {
//			this.parent.refreshGrid();
//			bootbox.alert("Mock refresh grid");
//		}
	});

	return PageTypeView;

});
