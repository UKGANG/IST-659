define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'view/grant_access_view', 'model/page_access', 'text!template/page_access.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, GrantAccessView, PageAccess, PageAccessHTML
		) {
	var PageAccessView = Backbone.View.extend({
		el : null,
		template : _.template(PageAccessHTML),
		userGroup : new PageAccess(),
		events: {
            "click #grant_btn" : "grant",
         },

		initialize : function(root) {
			console.log('User Group status initialized');
			this.$el = root;
			this.render();
			
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
			});
		    $('#dataTable tbody').on( 'click', 'tr', function () {
		        if ( $(this).hasClass('selected') ) {
		            $(this).removeClass('selected');
		        }
		        else {
		            table.$('tr.selected').removeClass('selected');
		            $(this).addClass('selected');
		        }
		        var rowData = table.rows( { selected: true } ).data()[0];
		    } );
		},

		grant: function() {
			$('#myModal').modal();
			new GrantAccessView($('.modal-body'));
		},
	});

	return PageAccessView;

});
