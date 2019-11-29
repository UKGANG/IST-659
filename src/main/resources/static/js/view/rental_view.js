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
		isRental: null,
		events: {
            "click #retrieve_reservation_btn" : "retrieve",
            "click #rent_btn" : "rent",
            "change #reservationCode" : "setReservationCode",
			"click .dropdown-menu li" : "switchDropdown",
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
			$("#rentalModal").modal();
			_.bindAll(this, "switchDropdown");
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
                    { data: "gearType.gearTypeName" },
                    { data: "brand" },
                    { data: "useFrequencyCount" },
                    { data: "status" },
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
			var that = this;
			this.rental.fetch({
				data: {
					reservationCode:this.rental.get("reservationCode"),
					isRental: that.isRental == 1,
				},
				type: 'GET',
                success: function (model) {
                	$('#dataTable').dataTable().fnClearTable();
                	if (model.attributes.gears.length) {
                		$('#dataTable').dataTable().fnAddData(model.attributes.gears);
                	}
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Retrieve available gears failed");
                }
			});
		},

		rent: function() {
			var that = this;
			var gearIds = $.makeArray($("input:checked")).map(function(i) {return i.value;})
			var reservationCode = this.rental.get("reservationCode");
			this.gearRental.save({
				reservationCode: reservationCode,
				gearIds: gearIds,
				isRental: that.isRental == 1,
				rental: that.isRental == 1,
			}, {
				success: function (model) {
					var msg = "";
					if (that.isRental == 1) {
						msg = "Rental";
					} else {
						msg = "Return";
					}
					msg  = msg + " success";
                	bootbox.alert(msg);
                	$('#dataTable').dataTable().fnClearTable();
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Rental failed");
                }
			})
		}, 

		switchDropdown: function(e) {
			var that = this;
			var pageTypeId = "";
			if (e) {
				that.isRental = parseInt($(e.currentTarget).attr("data"));
				if (that.isRental) {
					$("#rentLabel").html("Rent");
				} else {
					$("#rentLabel").html("Return");
				}
				$("#rentalModal").modal("hide");
			}
		},

	});

	return RentalView;

});
