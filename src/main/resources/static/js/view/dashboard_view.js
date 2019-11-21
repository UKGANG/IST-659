define([ 'jquery', 'underscore', 'backbone', 'bootbox'
        , 'model/dashboard'
        , 'view/reservation_view'
        , 'view/rental_view'
        , 'view/maintenance_view'
        , 'view/membership_view'
        , 'view/page_access_view'
        , 'text!template/dashboard.html'
		], function($, _, Backbone, bootbox
		, Dashboard
		, ReservationView
		, RentalView
		, MaintenanceView
		, MembershipView
		, PageAccessView
		, DashboardHTML) {
	var DashboardView = Backbone.View.extend({
		el : null,
		template : _.template(DashboardHTML),
		dashboard : new Dashboard(),
		container: null,
		events: {
			"click #wrapper .nav-item" : "redirect"
		},

		initialize : function(root) {
			console.log('Dashboard initialized');
			this.$el = root;
			this.render();
			_.bindAll(this, "redirect");
			
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
			new ReservationView(this.container)
			
			
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
					new ReservationView(this.container);
					break;
				case "rental":
					new RentalView(this.container);
					break;
				case "maintenance":
					new MaintenanceView(this.container);
					break;
				case "membership":
					new MembershipView(this.container);
					break;
				case "page_access":
					new PageAccessView(this.container);
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
