define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
    , 'view/gear_type_view'    
	, 'model/maintenance', 'text!template/maintenance.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, GearTypeView
				, Maintenance, MaintenanceHTML) {
	var MaintenanceView = Backbone.View.extend({
		el : null,
		template : _.template(MaintenanceHTML),
		maintenance : new Maintenance(),
		gearType: null,
		gearTypeView: null,
		table: null,
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
				
				"columnDefs": [ {
		            "orderable": false,
		            "className": 'select-checkbox',
		            "targets":   -1, 
		            'render': function (data, type, full, meta){
		            	console.log(data);
			             return '<input type="checkbox" id="123">';
			         }
		        } ],
		        select: {
		            style:    'os',
		            selector: 'td:first-child'
		        },
		        order: [[ 1, 'asc' ]]
			});

			this.gearTypeView = new GearTypeView($(".gearTypeDropdown"));
			this.gearTypeView.parent = this;
		},

		refreshGrid: function() {
			
		},

		refurbish: function() {
			var selected = $("input[type=checkbox]:checked");
			var tmpData;
			  $.each(selected, function(i, val) {
			    tmpData = selected[i];
			    alert(tmpData.id);
			  }); 
		}
		
	});

	return MaintenanceView;

});
