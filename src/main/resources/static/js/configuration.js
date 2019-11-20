require.config({
	paths : {
		'moment'				: 'lib/moment/moment.min',
		'text'					: 'lib/requirejs/text',
		'underscore'			: 'lib/underscore/underscore-min',
		'jquery'				: 'lib/jquery/jquery.min',
		'jquery.ui'				: 'lib/jquery.ui/1.12.1/jquery-ui.min',
		'backbone'				: 'lib/backbone/backbone-min',
		'bootstrap'				: 'lib/bootstrap/bootstrap.min',
		'bootbox'				: 'lib/bootstrap/bootbox.min',

		'bootstrap4.bundle'		: 'lib/bootstrap4/js/bootstrap.bundle.min',
		'jquery.easing'			: 'lib/jquery-easing/jquery.easing.min',
		'jquery.blockUI'		: 'lib/jquery/jquery.blockUI',
		'jquery.dataTables'		: 'lib/datatables/jquery.dataTables',
		'jquery.skedTape'		: 'lib/jquery-sked-tape-master/jquery.skedTape',
		'spin'					: 'lib/spin/spin.min',
		'dataTables.bootstrap4'	: 'lib/datatables/dataTables.bootstrap4',
	},
	shim : {
		'moment': {
            exports: 'moment'
        }, 'underscore' : {
			exports : '_'
		}, 'jquery' : {
			exports : '$'
		}, 'jquery.ui' : {
			deps : [ 'jquery' ]
		}, 'backbone' : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		}, 'bootstrap' : {
			deps : [ 'jquery' ]
		}, 'bootbox' : {
			deps : [ 'jquery' ]
		}, 'bootstrap4.bundle' : {
			deps : [ 'jquery' ],
			exports : 'bootstrap4'
		}, 'jquery.easing' : {
			deps : [ 'jquery']
		}, 'jquery.dataTables' : {
			deps : [ 'jquery' ]
		}, 'jquery.skedTape' : {
			deps : [ 'jquery' ]
		}, 'dataTables.bootstrap4' : {
			deps : [ 'jquery', 'jquery.dataTables', 'bootstrap4.bundle' ]
		}, 'spin' : {
			exports: 'spin'
		},
	}
});

require([ 'jquery', 'bootstrap', 'router/router'], function($, bootstrap, Router) {
    $(document).bind("contextmenu",function(e){
        return false;
    });
	var Router = new Router();
	Backbone.history.start();
});
