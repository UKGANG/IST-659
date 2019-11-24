define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
    , 'view/gear_type_view'    
    , 'collection/gears'    
	, 'model/maintenance', 'text!template/maintenance.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, GearTypeView
				, Gears
				, Maintenance, MaintenanceHTML) {
	var MaintenanceView = Backbone.View.extend({
		el : null,
		template : _.template(MaintenanceHTML),
		maintenance : new Maintenance(),
		gearType: null,
		gearTypeView: null,
		table: null,
		gears: null,
		events: {
            "click #refurbish_btn" : "refurbish",
         },

		initialize : function(root) {
			console.log('Maintenance status initialized');
			this.$el = root;
			
		},

		render: function() {
			this.$el.html(this.template());
			this.table = $('#refurbishTable').DataTable({
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
                    { data: "useFrequencyCount" },
                    { data: "" }
				],
				"columnDefs": [ {
		            "orderable": false,
		            "className": 'select-checkbox',
		            "targets":   -1, 
		            'render': function (data, type, full, meta){
		            	console.log(data);
		            	return '<input type="checkbox" name="gearId" value=' + full.gearId + '>';
			         }
				}, {
		               "targets": 0,
		               "visible": false,
		               "searchable": false
				} ],
			});

			this.gearTypeView = new GearTypeView($(".gearTypeDropdown"));
			this.gearTypeView.parent = this;
		},

		refreshGrid: function() {
			$('#refurbishTable').dataTable().fnClearTable();
        	$('#refurbishTable').dataTable().fnAddData(this.gears);
		},

		refurbish: function() {
			var gearIds = $.makeArray($("input[type=checkbox]")).map(function(i) {return i.value;})
			new Gears().save({
				attrs: {
					gearIds: gearIds
				},
				success: function (model) {
                	bootbox.alert("Refurbish success");
                	$('#refurbishTable').dataTable().fnClearTable();
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Refurbish failed");
                }
			})
		}
	});

	return MaintenanceView;

});
