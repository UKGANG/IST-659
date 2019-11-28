define([ 'jquery', 'underscore', 'backbone', 'bootbox', 'cspinner'
        , 'model/loginInfo', 'model/profile', 'model/dashboard'
        , 'view/dashboard_view', 'view/profile_view'
        , 'text!template/login.html', 'text!template/dashboard.html'
		], function($, _, Backbone, bootbox, CSpinner
		, LoginInfo, Profile, Dashboard
		, DashboardView, ProfileView
		, LoginHTML, DashboardHTML) {
	var IndexView = Backbone.View.extend({
		header : $(".header"),
		el : $(".content"),
		footer : $(".footer"),
		template : _.template(LoginHTML),
		loginInfo : new LoginInfo(),
		profile: new Profile(),
		events: {
			"submit" : "login",
			"change #email": "setEmail",
			"change #password": "setPassword"
		},

		setEmail: function(e) {
			this.loginInfo.set('email', $(e.currentTarget).val());
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
                success: (function (model) {
                    that.success(that.loginInfo.get("participantId"));
                }),
                error: (function (error) {
                    console.log(error);
                    alert("Login failed");
                })
            });
		}, 

		success: function(participantId) {
			var that = this;
			this.header.animate({ marginLeft: '-100%' }, {"duration":400, "queue": false}, function() {
                $(this).hide();
            });
			this.$el.fadeOut(400);
			this.footer.animate({ marginLeft: '100%' }, {"duration":400, "queue": false}, function() {
                $(this).hide();
            });
			var body = $("body");
			setTimeout(function () {
				that.profile.set("participantId", participantId);
				that.profile.fetch();
				var dashboard = new DashboardView(body);
				dashboard.profile = that.profile;
				dashboard.render();
			}, 1000);
		}
	});

	return IndexView;

});
