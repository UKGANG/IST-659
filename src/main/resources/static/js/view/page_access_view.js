define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
		, 'model/role', 'collection/roles'
        , 'view/page_type_view', 'model/page_access', 'text!template/page_access.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, Role, Roles
				, PageTypeView, PageAccess, PageAccessHTML
		) {
	var PageAccessView = Backbone.View.extend({
		el : null,
		template : _.template(PageAccessHTML),
		userGroup : new PageAccess(),
		pageTypeView : new PageTypeView(),
		role: new Role(),
		roles: null,
		table : null,
		events: {
            "click #grant_access_btn" : "grantAccess",
         },

		initialize : function(root) {
			console.log('User Group status initialized');
			this.$el = root;
			this.pageTypeView.parent = this;
			
		},

		render: function() {
			var that = this;
			this.$el.html(this.template());
//			var options = this.tmpSearchDropdown();
			var options = {
					url: function(phrase) {
						return "user";
					},
				    list: {
				    	onClickEvent: function(e) {
				            var participantId = $("#searchDropdown").getSelectedItemData().participantId;
				            that.role.get("user").set("participantId", participantId); 
				        },
				    },
					getValue: function(element) {
						return element.firstName + ", " 
							+ (element.middleName ? element.middleName + ", " : "")
							+ element.lastName + " | "
							+ element.email;
					},
					ajaxSettings: {
					    dataType: "json",
					    method: "GET",
					},
					preparePostData: function(data) {
					    return {
					    	email: $("#searchDropdown").val()
					    };
					},
					requestDelay: 400
					
			};

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
				.add(this.roles.models.map(function(e) {
					return {
						roleId: e.get("roleId"),
						email: e.get("user").email,
						pageName: e.get("pageType").pageName,
					};
				}))
				.draw();
        	
			$('#roleTable tbody').off('click');
			$('#roleTable tbody').on('click', 'a', function() {
		        var rowData = that.table.row($(this).parents('tr')).data();
		        
		        var role = that.roles.filter(function(e) {
		        	return e.get("roleId") == rowData.roleId;
		        })[0];

		        role.destroy({
					success: function (model) {
						that.refreshGrid();
	                }, error: function (model, response) {
						bootbox.alert("Remove failed! ");
	                },
		        });
		    });

		},

		grantAccess : function() {
			var that = this;
			this.role.set("roleId", null);
			this.role.save(null, {
				success: function (model) {
					bootbox.alert("Add success! ");
					that.role.attributes = that.role.defaults();
					that.role.set("roleId", null)
                }, error: function (model, response) {
					bootbox.alert("Add failed! ");
                },
			});
		},
	});

	return PageAccessView;

});
