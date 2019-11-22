define([ 'jquery', 'underscore', 'backbone'
	, 'bootstrap4.bundle', 'bootbox', 'moment'
	, 'jquery.ui', 'jquery.skedTape'
	, 'collection/courts', 'model/reservation_batch'
	, 'model/reservation', 'collection/reservations'
	, 'text!template/reservation.html'
		], function($, _, Backbone
				, bootstrap4, bootbox, moment
				, jqueryUI, jquerySkedTape
				, Courts, ReservationBatch
				, Reservation, Reservations
				, ReservationHTML) {
	var ReservationView = Backbone.View.extend({
		el : null,
		template : _.template(ReservationHTML),
		reservationDate: new Date(),
		reservations : new Reservations(),
		courts : new Courts(),
		reservation : new Reservation(),
		events: {
			"click #reserve_btn" : "reserve",
			"click #check_in_btn" : "checkIn",
            "click #date_append" : "showCalendar",
            "change #reservationCode": "setReservationCode",
            "change #date": "setEmail",
			"change #password": "setPassword"
        },

        setReservationCode: function(e) {
        	this.reservation.set("reservationCode", $(e.currentTarget).val());
        },

        setDate: function(e) {
			this.reservationDate = $(e.currentTarget).val();
		},

		initialize : function(root) {
			console.log('Reservation status initialized');
			var that = this;
			this.$el = root;
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
			$("#date").datepicker('setDate', this.reservationDate);
			var date = $("#date").datepicker("getDate");
			var buildSlotFunc = function() {
				that.buildSlot(date);
			}
			var retrieveDailyReservationFunc = function() {
				that.retrieveDailyReservation(buildSlotFunc);
			}
			this.retrieveCourts(retrieveDailyReservationFunc);
			
		},

		retrieveCourts : function(successFunc) {
			this.courts.fetch({
                type: 'GET',
                success: (function (model) {
                	successFunc();
                }),
                error: (function (error) {
                    console.log(error);
                    bootbox.alert("Retrieve courts failed");
                })
            });
		},

		retrieveDailyReservation : function(successFunc) {
			var that = this;
			this.reservations.fetch({
				data: {
					date: moment(that.reservationDate).format("YYYY-MM-DD")
				},
                type: 'GET',
                success: (function (model) {
                	that.reservations.each(function(e) {
                		e.set("cid", e.cid);
                	})
                	successFunc();
                }),
                error: (function (error) {
                    console.log(error);
                    bootbox.alert("Retrieve reservation failed");
                })
            })
		},

		showCalendar: function() {
			$("#date").datepicker("show");
		},

		renderSlot: function() {
			console.log($("#date").value());
		},

		buildSlot: function(date) {
			var that = this;
			var events = that.reservations.toJSON();
			events.forEach(function (e) {
				e.userData = {cid: e.cid};
			})
			var $sked = $('#container').skedTape({
			    caption: 'Courts',
			    start: that.setHour(date, 9, 0),
			    end: that.setHour(date, 22, 0),
			    showEventTime: true,     // Whether to show event start-end time
			    showEventDuration: true, // Whether to show event duration
			    zoom: 0.5,
			    locations: that.courts.toJSON(),
			    //events: that.buildEvent(),
			    events: events,
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
				that.reservations.remove(e.detail.event.userData.cid);
			    $sked.skedTape('removeEvent', e.detail.event.id);
			});

			$sked.on('timeline:click.skedtape', function(e/*, api*/) {
				var h = e.detail.date.getHours();
				var reservation = new Reservation();
				//reservation.set("cid")
				reservation.set("name", "Random name");
				reservation.set("location", e.detail.locationId);
				reservation.set("start", that.setHour(date, h, 0));
				reservation.set("end", that.setHour(date, h+1, 0));
				
				that.reservations.push(reservation);
			    $sked.skedTape('addEvent', {
			        name: reservation.get("name"),
			        location: reservation.get("location"),
			        userData: {cid: reservation.cid},
			        start: reservation.get("start"),
			        end: reservation.get("end")
			    });
			});
			
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

		reserve: function() {
			var reservationBatch = new ReservationBatch();
			reservationBatch.set("events", this.reservations);
			reservationBatch.save(reservationBatch.toJSON(), {
                success: function (model, response) {
                	bootbox.alert("Reservation done");
                },
                error: function (error, response) {
                    console.log(error);
                    bootbox.alert("Reservation failed");
                }
            })
		},
		
		checkIn: function() {
			this.reservation.save(this.reservation.toJSON(), {
				type: 'PUT',
                success: function (model) {
                	bootbox.alert("Check in success");
                },
                error: function (model, response) {
                    console.log(response);
                    bootbox.alert("Check in  failed");
                }
			});
		}
	});

	return ReservationView;

});
