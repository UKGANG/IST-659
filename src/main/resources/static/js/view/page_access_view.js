define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.dataTables', 'bootbox'
        , 'view/page_type_view', 'model/page_access', 'text!template/page_access.html'
		], function($, _, Backbone, bootstrap4, dataTable, bootbox
				, PageTypeView, PageAccess, PageAccessHTML
		) {
	var PageAccessView = Backbone.View.extend({
		el : null,
		template : _.template(PageAccessHTML),
		userGroup : new PageAccess(),
		pageTypeView : new PageTypeView(),
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
				"columnDefs": [ {
		            "targets": 0,
		            "data": null,
		            "defaultContent": 
		            	"<a class='form-control form-control-sm bg-orange' href='#' id='remove_btn' class='btn bg-orange'>" +
		            	"<i class='fas fa-user-minus'></i> Remove" +
		            	"</a>"
		        } ]
			});
			
			$('#roleTable tbody').on( 'click', 'a', function() {
		        var data = table.row( $(this).parents('tr') ).data();
		        bootbox.alert( data[0] +"'s salary is: "+ data[ 5 ] );
		    });
		},

		refreshGrid : function() {
			var that = this;
			this.table.clear()
				.rows
				.add(this.users.models.map(function(i) {return i.attributes;}))
				.draw();
        	
			$('#roleTable tbody').off('click');
		    $('#roleTable tbody').on( 'click', 'tr', function () {
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
