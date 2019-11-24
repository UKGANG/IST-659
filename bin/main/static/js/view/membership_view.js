define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'view/profile_view'
        , 'model/user', 'collection/users'
        , 'text!template/membership.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, ProfileView
				, User, Users
				, MembershipHTML
		) {
	var MembershipView = Backbone.View.extend({
		el : null,
		template : _.template(MembershipHTML),
		user : new User(),
		users : new Users(),
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
			var that = this;
			this.$el.html(this.template());
			this.renderTable();
			this.search();
		},

		renderTable: function() {
			var table = $('#userTable').dataTable({
				"paging": false,
				"searching": false,
				"columns": [
					{ data: "userId" },
                    { data: "firstName" },
                    { data: "middleName" },
                    { data: "lastName" },
                    { data: "email" },
                    { data: "phoneNo" },
                    { data: "gender" },
                    { data: "dob" }
				],
				"columnDefs": [ {
		               "targets": 0,
		               "visible": false,
		               "searchable": false
				} ],
			});

		},

		refreshGrid: function() {
			var table = $('#userTable').dataTable();
			table.fnClearTable();
        	table.fnAddData(this.users.models.map(function(i) {return i.attributes;}));
		    $('#userTable tbody').on( 'click', 'tr', function () {
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
			var that = this;
			var email = $("#email").val();
			var param = null;
			if ("" != email) {
				param = {email : email};
			}
			this.users.fetch({
				data: param,
				success: function (model) {
					that.refreshGrid();
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Search user failed");
                }
			});
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
