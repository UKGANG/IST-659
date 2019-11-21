define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'view/profile_view', 'model/membership', 'text!template/membership.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, ProfileView, Membership, MembershipHTML
		) {
	var MembershipView = Backbone.View.extend({
		el : null,
		template : _.template(MembershipHTML),
		membership : new Membership(),
		events: {
            "click #search_btn" : "search",
            "click #add_btn" : "add",
            "click #modify_btn" : "modify",
         },

		initialize : function(root) {
			console.log('Membership status initialized');
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

		search: function() {
			bootbox.alert("Mock search");
		},
		add: function() {
			$('#myModal').modal();
			new ProfileView($('.modal-body'));
		},
		modify: function() {
			$('#myModal').modal();
			new ProfileView($('.modal-body'));
		},
	});

	return MembershipView;

});
