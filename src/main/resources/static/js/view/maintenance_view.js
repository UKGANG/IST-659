define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'model/maintenance', 'text!template/maintenance.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
		, Maintenance, MaintenanceHTML) {
	var MaintenanceView = Backbone.View.extend({
		el : null,
		template : _.template(MaintenanceHTML),
		maintenance : new Maintenance(),
		events: {
            "submit" : "login"
         },

		initialize : function(root) {
			console.log('Maintenance status initialized');
			this.$el = root;
			this.render();
			
		},

		render: function() {
			this.$el.html(this.template());
			$('#dataTable').DataTable();
		},

	});

	return MaintenanceView;

});
