define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'bootbox'
	, 'jquery.dataTables', 'jquery.ui'
	, 'model/profile', 'text!template/profile.html'
		], function($, _, Backbone, bootstrap4, bootbox
				, dataTable, jqueryUI
				, Profile, ProfileHTML) {
	var ProfileView = Backbone.View.extend({
		el : null,
		template : _.template(ProfileHTML),
		profile : new Profile(),
		parent : null,
		events: {
            "click #profile_save" : "save",
            "click #date_append" : "showCalendar",
            "change #email" : "setValue",
            "change #password" : "setValue",
            "change #repeat" : "setValue",
            "change #firstName" : "setValue",
            "change #middleName" : "setValue",
            "change #lastName" : "setValue",
            "change #gender" : "setValue",
            "change #phoneNo" : "setValue",
            "change #ssn" : "setValue",
            "change #dob" : "setValue",
		},

		setValue : function(e) {
			e.stopPropagation();
			this.profile.set($(e.currentTarget).attr("id"), $(e.currentTarget).val())
		},

		showCalendar: function() {
			e.stopPropagation();
			$("#dob").datepicker("show");
		},

		initialize : function() {
			console.log('Profile status initialized');
//			_.bindAll(this, "save", "showCalendar", "setValue");
		},

		render: function() {
			var that = this;
			this.$el.html(this.template(this.profile.toJSON()));
			$("#dob").datepicker();
		},

		save: function(e) {
			e.stopPropagation();
			var that = this;
			if ("" == this.profile.get("userId")) {
				this.profile.set("userId", null);
			}
			this.profile.save({attrs : this.profile.attrs}, {
				success: function (model) {
					that.profile = new Profile();
					$('#myModal').modal('hide');
					bootbox.alert("Save or update done! ");
					$("#emailCriteria").val("");
					if (that.parent) {
						that.parent.search();
					}
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Search user failed");
                }
			});
		},
	});

	return ProfileView;

});
