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
			"click .dropdown-menu li" : "switchDropdown",
			"click #activity_save" : "save",
		},

		initialize : function() {
			console.log('Activity type dropdown initialized');
			
		},

		render: function() {
			var that = this;
			var uniqueCourtId = [];
			for (const [k, v] of that.parent.courtIdCount.entries()) {
				if (v) {
					uniqueCourtId.push(k);
				}
			}
			this.activityTypes.fetch({
				data: {courtIds: uniqueCourtId.toString()},
				success: function (model) {
					if (!model.models.length) {
						bootbox.alert("No activity available! Try reserve one court at a time.");
						return;
					}
					that.$el.html(that.template({labels: model.models}));
					$('#activityTypeModal').modal('show');
                },
			});
		},

		switchDropdown: function(e) {
			var that = this;
			var activityTypeId = "";
			if (e) {
				var selText = $(e.currentTarget).html();
				$('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
				activityTypeId = $(e.currentTarget).attr("data");
			}
			this.parent.activityTypeId = activityTypeId;
		},

		save: function() {
//			that.parent.activityType = 
			this.parent.reserve();
		}
	});

	return ActivityTypeView;

});
