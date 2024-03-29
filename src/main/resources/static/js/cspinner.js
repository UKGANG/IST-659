define(['jquery', 'spin', 'jquery.blockUI'], 
		function($, Spinner) {
			var CSpinner = {
					start: function() {
						var opts = {
								  lines: 11, // The number of lines to draw
								  length: 9, // The length of each line
								  width: 6, // The line thickness
								  radius: 12, // The radius of the inner circle
								  corners: 1, // Corner roundness (0..1)
								  rotate: 0, // The rotation offset
								  direction: 1, // 1: clockwise, -1: counterclockwise
								  color: '#FFFFFF', // #rgb or #rrggbb or array of colors
								  speed: 0.5, // Rounds per second
								  trail: 97, // Afterglow percentage
								  shadow: false, // Whether to render a shadow
								  hwaccel: false, // Whether to use hardware acceleration
								  className: 'spinner', // The CSS class to assign to the spinner
								  zIndex: 2e9, // The z-index (defaults to 2000000000)
								  top: 'auto', // Top position relative to parent in px
								  left: 'auto' // Left position relative to parent in px
								};
						if (this.spinner) {
							this.spinner.stop();
						}
						this.spinner = new Spinner(opts).spin(document.getElementById('content'));
						$.blockUI({ 
							message: null,
							baseZ: 4000,
						});
					},
					stop: function() {
						if (this.spinner) {
							this.spinner.stop();
						}
						$.unblockUI();
					}
			};
			
			return CSpinner;
		}
);