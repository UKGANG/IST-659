define([ 'jquery', 'underscore', 'backbone', 'bootbox', 'cspinner'
        , 'model/loginInfo', 'model/dashboard'
        , 'view/dashboard_view'
        , 'text!template/login.html', 'text!template/dashboard.html'
		], function($, _, Backbone, bootbox, CSpinner
		, LoginInfo, Dashboard
		, DashboardView
		, LoginHTML, DashboardHTML) {
	var IndexView = Backbone.View.extend({
		header : $(".header"),
		el : $(".content"),
		footer : $(".footer"),
		template : _.template(LoginHTML),
		loginInfo : new LoginInfo(),
		events: {
			"submit" : "login"
		},

		initialize : function() {
			console.log('Index page initialized');
			this.$el.html(this.template());
		},

		login : function() {
			/** Access rest,
			 * 	if false, boost jquery validation
			 * 	else, login
			 */
			// CSpinner.start();
			//bootbox.alert("This is a test")
			this.header.animate({ marginLeft: '-100%' }, {"duration":400, "queue": false}, function() {
                $(this).hide();
            });
			this.$el.fadeOut(400);
			this.footer.animate({ marginLeft: '100%' }, {"duration":400, "queue": false}, function() {
                $(this).hide();
            });
			var that = $("body");
			setTimeout(function () {
				new DashboardView(that);
				// CSpinner.stop();
			}, 1000);
		}
	});

	return IndexView;

});
