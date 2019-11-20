define([ 'jquery', 'underscore', 'backbone'
	, 'bootstrap4.bundle', 'bootbox'
	, 'jquery.ui', 'jquery.skedTape'
        , 'model/reservation', 'text!template/reservation.html'
		], function($, _, Backbone
				, bootstrap4, bootbox
				, jqueryUI, jquerySkedTape
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
			var that = this;
			this.$el.html(this.template());
			$("#date").datepicker({
			    onSelect: function(dateText) {
			    	that.buildSlot(new Date(Date.parse(dateText)));
			    }
			});
			$("#date").datepicker('setDate', new Date());
			var date = $("#date").datepicker("getDate");
			this.buildSlot(date);
			
		},

		showCalendar: function() {
			$("#date").datepicker("show");
		},

		renderSlot: function() {
			console.log($("#date").value());
		},

		buildSlot: function(date) {
			var that = this;
			var $sked = $('#container').skedTape({
			    caption: 'Courts',
			    start: that.setHour(date, 9, 0),
			    end: that.setHour(date, 22, 0),
			    showEventTime: true,     // Whether to show event start-end time
			    showEventDuration: true, // Whether to show event duration
			    zoom: 0.5,
			    locations: that.buildLocation(),
			    events: that.buildEvent(),
			    formatters: {
			        date: function (date) {
			            return $.fn.skedTape.format.date(date, 'l', '.');
			        },
			        duration: function (start, end, opts) {
			            return $.fn.skedTape.format.duration(start, end, {
			                hrs: 'ч.',
			                min: 'мин.'
			            });;
			        },
			    }
			});



			$sked.on('event:click.skedtape', function(e/*, api*/) {
			    $sked.skedTape('removeEvent', e.detail.event.id);
			});

			$sked.on('timeline:click.skedtape', function(e/*, api*/) {
				var h = e.detail.date.getHours();
			    $sked.skedTape('addEvent', {
			        name: 'User Name',
			        location: e.detail.locationId,
			        start: that.setHour(date, h, 0),
			        end: that.setHour(date, h+1, 0)
			    });
			});
			
//			var events = this.buildEvent();
//			for (idx in events) {
//				$sked.skedTape('addEvent', events[idx]);
//			}
		},

		buildEvent: function() {
			var that = this;
			var date = $("#date").datepicker("getDate");
			var events = [
			    {
			        name: 'Meeting 1',
			        location: 'london',
			        start: that.setHour(date, 4, 15),
			        end: that.setHour(date, 7, 30),
			        url: null,
			        class: '', // extra class
			        disabled: false, // is disabled?
			        data: {}, // data to set with $.data() method
			        userData: {} // custom data
			    },
			    {
			        name: 'Meeting 2',
			        location: 'london',
			        start: that.setHour(date, 7, 30),
			        end: that.setHour(date, 9, 15)
			    },
			    {
			        name: 'Meeting',
			        location: '1',
			        start: that.setHour(date, 10, 0),
			        end: that.setHour(date, 11, 30)
			    },
			    // more events here
			];
			return events;
		},

		buildLocation: function() {
			var locations = [
			    {id: 1, name: 'San Francisco'},
			    {
			            id: 2,
			            name: 'Sydney',
			            order: 1, // optional sorting order
			            tzOffset: -10 * 60, // individual timezone (notice that minus sign)
			            //userData: {...} // optional some custom data to store
			        },
			    {id: 3, name: 'New York'},
			    {id: 'london', name: 'London'},
			    {id: 5, name: 'Copenhagen'},
			    {id: 6, name: 'Berlin'}
			];
			return locations;
		},

		setHour: function(date, hours, minutes) {
			var date = new Date(date);
			date.setHours(hours, minutes, 0, 0);
			return date;
		},
	});

	return ReservationView;

});
