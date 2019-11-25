define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
		, 'collection/roles'
        , 'view/page_type_view', 'model/page_access', 'text!template/page_access.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, Roles
				, PageTypeView, PageAccess, PageAccessHTML
		) {
	var PageAccessView = Backbone.View.extend({
		el : null,
		template : _.template(PageAccessHTML),
		userGroup : new PageAccess(),
		pageTypeView : new PageTypeView(),
		roles: null,
		table : null,
		events: {
            "click #grant_btn" : "grant",
         },

		initialize : function(root) {
			console.log('User Group status initialized');
			this.$el = root;
			this.pageTypeView.parent = this;
			
		},

		render: function() {
			this.$el.html(this.template());
			var options = this.tmpSearchDropdown();

			$("#searchDropdown").easyAutocomplete(options);
			this.renderTable();
			
			this.pageTypeView.setElement($('#pageType'));
			this.pageTypeView.render();
		},

		renderTable: function() {
			this.table = $('#roleTable').DataTable({
				paging: false,
				searching: false,
				columns: [
					{ data: "" },
                    { data: "roleId" },
                    { data: "pageName" },
                    { data: "email" },
				],
				columnDefs: [ {
		            "targets": 0,
		            "width": "10%",
		            "data": null,
		            "defaultContent": 
		            	"<a class='form-control form-control-sm bg-orange' href='#' id='remove_btn' class='btn bg-orange'>" +
		            	"<i class='fas fa-user-minus'></i> Remove" +
		            	"</a>"
		        }, {
		               "targets": 1,
		               "visible": false,
		               "searchable": false
				} ]
			});

		},

		refreshGrid : function() {
			var that = this;
			this.table.clear()
				.rows
				.add(this.roles)
				.draw();
        	
			$('#roleTable tbody').off('click');
			$('#roleTable tbody').on('click', 'a', function() {
		        var rowData = that.table.row($(this).parents('tr')).data();
		        
		        var role = that.roles.filter(function(e) {
		        	return e.roleId == rowData.roleId;
		        })[0];

		        role.delete();
//		        bootbox.alert( data[0] +"'s salary is: "+ data[ 5 ] );
		    });

//			$('#roleTable tbody').off('click');
//		    $('#roleTable tbody').on( 'click', 'tr', function () {
//		        if ( $(this).hasClass('selected') ) {
//		            $(this).removeClass('selected');
//		        }
//		        else {
//		            that.table.$('tr.selected').removeClass('selected');
//		            $(this).addClass('selected');
//		        }
//		        var rowData = that.table.rows( { selected: true } ).data()[0];
//		        var user = that.users.filter(function(e) {
//		        	return e.get("userId") == rowData.userId;
//		        })[0];
//		        that.profileView.profile = user;
//		    } );
		},

		tmpSearchDropdown : function() {
			return {
				data: ["blue", "green", "pink", "red", "yellow"], 
				list: {
					onClickEvent: function(e) {
						alert("Click !");
					}	
				}
			};
		},
	});

	return PageAccessView;

});
