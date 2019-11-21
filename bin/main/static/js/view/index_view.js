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
			"submit" : "login",
			"change #userName": "setUserName",
			"change #password": "setPassword"
		},

		setUserName: function(e) {
			this.loginInfo.set('userName', $(e.currentTarget).val());
		},

		setPassword: function(e) {
			this.loginInfo.set('password', $(e.currentTarget).val());
		},
		
		
		initialize : function() {
			console.log('Index page initialized');
			this.$el.html(this.template({"loginInfo": this.loginInfo}));
		},

		login : function() {
			var that = this;
			this.loginInfo.fetch({
                data: this.loginInfo.toJSON(),
                type: 'GET',
                success: (function (model) {
                    that.success();
                }),
                error: (function (error) {
                    console.log(error);
                    bootbox.alert("Login failed");
                })
            });
		}, 

		success: function() {
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
			}, 1000);
		}
	});

	return IndexView;

});
