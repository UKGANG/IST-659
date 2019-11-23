define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'bootbox'
	, 'collection/gear_types', 'text!template/gear_type.html'
		], function($, _, Backbone, bootstrap4, bootbox
				, GearTypes, GearTypeHTML) {
	var GearTypeView = Backbone.View.extend({
		el : null,
		template : _.template(GearTypeHTML),
		gearTypes : new GearTypes(),
		parent: null,
		events: {
            "click .dropdown-menu li" : "switchDropdown"
         },

		initialize : function(root, that) {
			console.log('Gear type dropdown initialized');
			this.$el = root;
			this.render();
			
		},

		render: function() {
			var that = this;
			this.gearTypes.fetch({
				success: function (model) {
					that.$el.html(that.template({labels: model.models[0].attributes.gearTypes}));
					_.bindAll(that, "switchDropdown");
                },
			});
		},

		switchDropdown: function(e) {
			var selText = $(e.currentTarget).html();
			$('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
			this.parent.gearType = $(e.currentTarget).attr("data");
		},

	});

	return GearTypeView;

});
