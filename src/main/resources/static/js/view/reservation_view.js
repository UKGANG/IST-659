define([ 'jquery', 'underscore', 'backbone', 'bootstrap4.bundle', 'jquery.ui', 'bootbox'
        , 'model/reservation', 'text!template/reservation.html'
		], function($, _, Backbone, bootstrap4, jqueryUI, bootbox
		, Reservation, ReservationHTML) {
	var ReservationView = Backbone.View.extend({
		el : null,
		template : _.template(ReservationHTML),
		reservation : new Reservation(),
		events: {
            "click #date_append" : "showCalendar"
         },

		initialize : function(root) {
			console.log('Reservation status initialized');
			this.$el = root;
			this.render();
			_.bindAll(this, "showCalendar");

		},

		render: function() {
			this.$el.html(this.template());
			$("#date").datepicker(); 
			
		},

		showCalendar: function() {
			$("#date").datepicker("show");
		},

	});

	return ReservationView;

});
