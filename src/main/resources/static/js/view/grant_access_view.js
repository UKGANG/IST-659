define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'bootbox'
	, 'jquery.dataTables', 'jquery.autocomplete'
	, 'model/grant_access', 'text!template/grant_access.html'
		], function($, _, Backbone, bootstrap4, bootbox
				, dataTable, autocomplete
				, GrantAccess, GrantAccessHTML) {
	var GrantAccessView = Backbone.View.extend({
		el : null,
		template : _.template(GrantAccessHTML),
		grantAccess : new GrantAccess(),
		events: {
            "click .btn-primary" : "save"
         },

		initialize : function(root) {
			console.log('Grant status initialized');
			this.$el = root;
			this.render();
			
		},

		render: function() {
			this.$el.html(this.template());
			var options = {
					data: ["blue", "green", "pink", "red", "yellow"], 
					list: {
						onClickEvent: function(e) {
							alert("Click !");
						}	
					}
			};

			$("#searchDropdown").easyAutocomplete(options);
			var table = $('#roleTable').DataTable({
				"paging": false,
				"searching": false,
				data: [
					[
						"Tiger Nixon",
						"System Architect",
						"Edinburgh",
						"61",
						"2011/04/25",
						"$320,801",
					]
				],
//				"aaData": data,   //this is your JSON object, which is what is showing in your post above with console.log(data)
//				  "aoColumns": [{
//				    "mDataProp": "PatientID"
//				  }, {
//				    "mDataProp": "FirstName"
//				  }]
				"columnDefs": [ {
		            "targets": 0,
		            "data": null,
		            "defaultContent": 
		            	"<a class='form-control-sm bg-orange' href='#' id='add_btn' class='btn bg-orange'>" +
		            	"<i class='fas fa-user-minus'></i> Remove" +
		            	"</a>"
		        } ]
			});
			
			$('#roleTable tbody').on( 'click', 'a', function() {
		        var data = table.row( $(this).parents('tr') ).data();
		        bootbox.alert( data[0] +"'s salary is: "+ data[ 5 ] );
		    });
		},

		save: function() {
			bootbox.alert("Mock save");
		}
	});

	return GrantAccessView;

});
