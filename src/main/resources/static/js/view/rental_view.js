define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'model/rental', 'text!template/rental.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
		, Rental, RentalHTML) {
	var RentalView = Backbone.View.extend({
		el : null,
		template : _.template(RentalHTML),
		rental : new Rental(),
		events: {
            "submit" : "login"
         },

		initialize : function(root) {
			console.log('Rental status initialized');
			this.$el = root;
			this.render();
			
		},

		render: function() {
			this.$el.html(this.template());
			$('#dataTable').DataTable();
		},

	});

	return RentalView;

});
