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
		profileView : new ProfileView(),
		table : null,
		events: {
            "click #search_btn" : "search",
            "click #add_btn" : "add",
            "click #modify_btn" : "modify",
         },

         initialize : function(root) {
			console.log('Membership status initialized');
			this.$el = root;
			this.profileView.parent = this;
		},

		render: function() {
			var that = this;
			this.$el.html(this.template());
			this.renderTable();
			this.search();
			this.profileView.setElement($('#myModal'));
		},

		renderTable: function() {
			this.table = $('#userTable').DataTable({
				paging: false,
				searching: false,
				columns: [
					{ data: "userId" },
                    { data: "firstName" },
                    { data: "middleName" },
                    { data: "lastName" },
                    { data: "email" },
                    { data: "phoneNo" },
                    { data: "gender" },
                    { data: "dob" }
				],
				columnDefs: [ {
		               "targets": 0,
		               "visible": false,
		               "searchable": false
				} ],
			});

		},

		refreshGrid: function() {
			var that = this;
			this.table.clear()
				.rows
				.add(this.users.models.map(function(i) {return i.attributes;}))
				.draw();
        	
			$('#userTable tbody').off('click');
		    $('#userTable tbody').on( 'click', 'tr', function () {
		        if ( $(this).hasClass('selected') ) {
		            $(this).removeClass('selected');
		        }
		        else {
		            that.table.$('tr.selected').removeClass('selected');
		            $(this).addClass('selected');
		        }
		        var rowData = that.table.rows( { selected: true } ).data()[0];
		        var user = that.users.filter(function(e) {
		        	return e.get("userId") == rowData.userId;
		        })[0];
		        that.profileView.profile = user;
		    } );
		},

		search: function() {
			var that = this;
			var email = $("#emailCriteria").val();
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
			this.profileView.render();
		},
		modify: function() {
			this.profileView.render();
		},
	});

	return MembershipView;

});
