define([ 'jquery', 'underscore', 'backbone', 'bootbox'
        , 'model/profile'
        , 'model/dashboard'
        , 'view/reservation_view'
        , 'view/rental_view'
        , 'view/maintenance_view'
        , 'view/membership_view'
        , 'view/page_access_view'
        , 'view/profile_view'
        , 'text!template/dashboard.html'
		], function($, _, Backbone, bootbox
				, Profile
				, Dashboard
				, ReservationView
				, RentalView
				, MaintenanceView
				, MembershipView
				, PageAccessView
				, ProfileView
				, DashboardHTML) {
	var DashboardView = Backbone.View.extend({
		el : null,
		template : _.template(DashboardHTML),
		dashboard : new Dashboard(),
		container: null,
		reservationView: null,
		rentalView: null,
		maintenanceView: null,
		membershipView: null,
		pageAccessView: null,
		profile: null,
		profileView: null,
		events: {
			"click #wrapper .nav-item" : "redirect"
		},

		initialize : function(root) {
			console.log('Dashboard initialized');
			this.$el = root;
		},

		render: function() {
			this.$el.html(this.template());
			// Toggle the side navigation
			$("#sidebarToggle").on('click', function(e) {
				e.preventDefault();
				$("body").toggleClass("sidebar-toggled");
				$(".sidebar").toggleClass("toggled");
			});

			// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
			$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
				if ($(window).width() > 768) {
					var e0 = e.originalEvent,
					delta = e0.wheelDelta || -e0.detail;
					this.scrollTop += (delta < 0 ? 1 : -1) * 30;
					e.preventDefault();
				}
			});

			// Scroll to top button appear
			$(document).on('scroll', function() {
				var scrollDistance = $(this).scrollTop();
				if (scrollDistance > 100) {
					$('.scroll-to-top').fadeIn();
				} else {
					$('.scroll-to-top').fadeOut();
				}
			});

			// Smooth scrolling using jQuery easing
			$(document).on('click', 'a.scroll-to-top', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: ($($anchor.attr('href')).offset().top)
				}, 1000, 'easeInOutExpo');
				event.preventDefault();
			});

			this.container = $(".container-fluid");

			this.reservationView = new ReservationView(this.container);
			this.rentalView = new RentalView(this.container);
			this.maintenanceView = new MaintenanceView(this.container);
			this.membershipView = new MembershipView(this.container);
			this.pageAccessView = new PageAccessView(this.container);
			this.profileView = new ProfileView();
			this.profileView.setElement(this.container);
			this.reservationView.profile = this.profile;
			this.rentalView.profile = this.profile;
			this.maintenanceView.profile = this.profile;
			this.membershipView.profile = this.profile;
			this.pageAccessView.profile = this.profile;
	        this.profileView.profile = this.profile;
			this.reservationView.render();
			_.bindAll(this, "redirect");

			this.$el.fadeIn(400);
		},

		redirect : function(e) {
			$(".nav-item").each(function(i, e) {
				$(e).removeClass("active");
			})
			$(e.currentTarget).addClass("active");
			var module = $(e.currentTarget).attr("id");
			$("#ui-datepicker-div").remove();
			switch(module) {
				case "reservation":
					this.reservationView.render();
					break;
				case "rental":
					this.rentalView.render();
					break;
				case "maintenance":
					this.maintenanceView.render();
					break;
				case "membership":
					this.membershipView.render();
					break;
				case "page_access":
					this.pageAccessView.render();
					break;
				case "profile":
					this.profileView.render();
					break;
				default:
					var errMsg = "Missing module: " + module;
					console.log(errMsg);
					throw errMsg;
			}
		},
	});

	return DashboardView;

});
