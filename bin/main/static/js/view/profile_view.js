define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'model/profile', 'text!template/profile.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
		, Profile, ProfileHTML) {
	var ProfileView = Backbone.View.extend({
		el : null,
		template : _.template(ProfileHTML),
		profile : new Profile(),
		events: {
            "submit" : "login"
         },

		initialize : function(root) {
			console.log('Profile status initialized');
			this.$el = root;
			this.render();
			
		},

		render: function() {
			this.$el.html(this.template());
			$('#dataTable').DataTable();
		},

	});

	return ProfileView;

});
