define([ 'backbone'], function(Backbone) {
    var User = Backbone.Model.extend({
        idAttribute: "userId",
        url : "/fge/user",
        defaults : function() {
            return {
            	userId : '',
                email : '',
                password : '',
                repeat : '',
                firstName : '',
                middleName : '',
                lastName : '',
                gender : '',
                phoneNo : '',
                ssn : '',
                dob : '',

            };
        },
    });

    return User;
});
