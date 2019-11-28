define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'bootbox'
	, 'model/activity_type', 'collection/activity_types'
	, 'text!template/activity_type.html'
		], function($, _, Backbone, bootstrap4, bootbox
				, ActivityType, ActivityTypes, ActivityTypeHTML) {
	var ActivityTypeView = Backbone.View.extend({
		el : null,
		template : _.template(ActivityTypeHTML),
		activityTypes : new ActivityTypes(),
		events: {
         },

		initialize : function() {
			console.log('Activity type dropdown initialized');
			
		},

		render: function() {
			var that = this;
			this.activityTypes.fetch({
				success: function (model) {
					that.$el.html(that.template({labels: model.models}));
                },
			});
		},

	});

	return ActivityTypeView;

});
