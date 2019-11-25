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
            "click .btn-primary" : "save",
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
			this.profile.set($(e.currentTarget).attr("id"), $(e.currentTarget).val())
		},

		showCalendar: function() {
			$("#dob").datepicker("show");
		},

		initialize : function(parent) {
			console.log('Profile status initialized');
			this.parent = parent;
		},

		render: function() {
			this.$el.modal();
			this.$el.html(this.template(this.profile.toJSON()));
			$("#dob").datepicker();
		},

		save: function() {
			var that = this;
			this.profile.save({attrs : this.profile.attrs}, {
				success: function (model) {
					that.profile = new Profile();
					$('#myModal').modal('hide');
					bootbox.alert("Save or update done! ");
					$("#emailCriteria").val("");
					that.parent.search();
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Search user failed");
                }
			});
		}
	});

	return ProfileView;

});
