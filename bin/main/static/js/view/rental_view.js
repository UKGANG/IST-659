define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'view/profile_view', 'model/rental', 'text!template/rental.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, ProfileView, Rental, RentalHTML
		) {
	var RentalView = Backbone.View.extend({
		el : null,
		template : _.template(RentalHTML),
		rental : new Rental(),
		events: {
            "click #retrieve_reservation_btn" : "retrieve",
         },

		initialize : function(root) {
			console.log('Rental status initialized');
			this.$el = root;
			
		},

		render: function() {
			this.$el.html(this.template());
			var table = $('#dataTable').DataTable({
				"paging": false,
				"searching": false,
//				"aaData": data,   //this is your JSON object, which is what is showing in your post above with console.log(data)
//				  "aoColumns": [{
//				    "mDataProp": "PatientID"
//				  }, {
//				    "mDataProp": "FirstName"
//				  }]
				"columnDefs": [ {
		            "orderable": false,
		            "className": 'select-checkbox',
		            "targets":   -1, 
		            'render': function (data, type, full, meta){
		            	console.log(data);//full
			             return '<input type="checkbox" id="123">';
			         }
		        } ],
			});
		},

		retrieve: function() {
			bootbox.alert("Mock retrieve reservation");
		},
	});

	return RentalView;

});
