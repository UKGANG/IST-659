define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'model/membership', 'text!template/membership.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
		, Membership, MembershipHTML) {
	var MembershipView = Backbone.View.extend({
		el : null,
		template : _.template(MembershipHTML),
		membership : new Membership(),
		events: {
            "submit" : "login"
         },

		initialize : function(root) {
			console.log('Membership status initialized');
			this.$el = root;
			this.render();
			
		},

		render: function() {
			this.$el.html(this.template());
			$('#dataTable').DataTable();
		},

	});

	return MembershipView;

});
