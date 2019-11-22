define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
	, 'model/gear_rental'
	, 'view/profile_view', 'model/rental', 'text!template/rental.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, GearRental
				, ProfileView, Rental, RentalHTML
		) {
	var RentalView = Backbone.View.extend({
		el : null,
		template : _.template(RentalHTML),
		rental : new Rental(),
		gearRental: new GearRental(),
		events: {
            "click #retrieve_reservation_btn" : "retrieve",
            "click #rent_btn" : "rent",
            "change #reservationCode" : "setReservationCode",
        },
        
        setReservationCode : function(e) {
        	this.rental.set("reservationCode", $(e.currentTarget).val());
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
				"columns": [
					{ data: "gearId" },
                    { data: "gearName" },
                    { data: "brand" },
                    { data: "" }
				],
				"columnDefs": [ {
					"targets":   -1, 
		            "orderable": false,
		            "className": 'select-checkbox',
		            'render': function (data, type, full, meta){
		            	console.log(data);//full
			             return '<input type="checkbox" name="gearId" value=' + full.gearId + '>';
			         }
				}, {
		               "targets": 0,
		               "visible": false,
		               "searchable": false               
				} ],
			});
		},

		retrieve: function() {
			this.rental.fetch({
				data: this.rental.toJSON(),
				type: 'GET',
                success: function (model) {
                	$('#dataTable').dataTable().fnClearTable();
                	$('#dataTable').dataTable().fnAddData(model.attributes.gears);
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Retrieve available gears failed");
                }
			});
		},

		rent: function() {
			var gearIds = $.makeArray($("input[type=checkbox]")).map(function(i) {return i.value;})
			var reservationCode = this.rental.get("reservationCode");
			this.gearRental.save({
				reservationCode: reservationCode,
				gearIds: gearIds
			}, {
				success: function (model) {
                	bootbox.alert("Rental success");
                	$('#dataTable').dataTable().fnClearTable();
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Rental failed");
                }
			})
		}
	});

	return RentalView;

});
