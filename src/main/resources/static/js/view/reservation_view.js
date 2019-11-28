define([ 'jquery', 'underscore', 'backbone'
	, 'bootstrap4.bundle', 'bootbox', 'moment'
	, 'jquery.ui', 'jquery.skedTape'
	, 'collection/courts', 'model/reservation_batch'
	, 'model/reservation', 'collection/reservations'
	, 'view/activity_type_view'
	, 'text!template/reservation.html'
		], function($, _, Backbone
				, bootstrap4, bootbox, moment
				, jqueryUI, jquerySkedTape
				, Courts, ReservationBatch
				, Reservation, Reservations
				, ActivityTypeView
				, ReservationHTML) {
	var ReservationView = Backbone.View.extend({
		el : null,
		template : _.template(ReservationHTML),
		reservationDate: new Date(),
		reservations : new Reservations(),
		activityType: null,
		activityTypeView : new ActivityTypeView(),
		courts : new Courts(),
		courtIdCount: new Map(),
		reservation : new Reservation(),
		events: {
			"click #reserve_btn" : "preReserve",
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
			this.activityTypeView.setElement($("#activityTypeModal>.modal-dialog>.modal-content"));
			this.activityTypeView.parent = this;
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
			var events = that.reservations;
			if (events.length) {
				events = events.map(function(i) {
					i.set("data", {
						timeslotId : i.get("timeslotId"),
						participantId : i.get("participantId")
					})
					return i;
				});
			}
			events = events.toJSON();
			events.forEach(function (e) {
				e.userData = {cid: e.cid};
			});
			var $sked = $('#container').skedTape({
			    caption: 'Courts',
			    start: that.setHour(date, 9, 0),
			    end: that.setHour(date, 22, 0),
			    showEventTime: true,     // Whether to show event start-end time
			    showEventDuration: true, // Whether to show event duration
			    zoom: 0.5,
			    locations: that.courts.toJSON(),
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
				var cnt = that.courtIdCount.get(e.detail.locationId);
				cnt = cnt ? cnt - 1 : 0;
				that.courtIdCount.set(e.detail.locationId, cnt);
				that.reservations.remove(e.detail.event.userData.cid);
			    $sked.skedTape('removeEvent', e.detail.event.id);
			});

			$sked.on('timeline:click.skedtape', function(e/*, api*/) {
				var h = e.detail.date.getHours();
				var reservation = new Reservation();
//				reservation.set("timeslotId", );
//				reservation.set("participantId", e.detail.participantId);
//				reservation.set("activityType", e.detail.activityTypeId);
				reservation.set("name", e.detail);
				reservation.set("location", e.detail.locationId);
				reservation.set("start", that.setHour(date, h, 0));
				reservation.set("end", that.setHour(date, h+1, 0));
				
				that.reservations.push(reservation);
				var cnt = that.courtIdCount.get(e.detail.locationId);
				cnt = cnt ? cnt + 1 : 1;
				that.courtIdCount.set(e.detail.locationId, cnt);
			    $sked.skedTape('addEvent', {
			        name: reservation.get("name"),
			        location: reservation.get("location"),
			        userData: {cid: reservation.cid},
			        start: reservation.get("start"),
			        end: reservation.get("end"),
			        data: {
			        	timeslotId: reservation.get("timeslotId"),
			        	participantId: reservation.get("reservationId"),
			        	activityTypeId: reservation.get("activityTypeId")
			        }
			    });
			});
			
		},

		setHour: function(date, hours, minutes) {
			var date = new Date(date);
			date.setHours(hours, minutes, 0, 0);
			return date;
		},

		preReserve: function() {
			this.activityTypeView.render();
		},

		reserve: function() {
			var reservationBatch = new ReservationBatch();
			reservationBatch.set("activityType", this.activityType);
			reservationBatch.set("date", this.reservationDate);
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
