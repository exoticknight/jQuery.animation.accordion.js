if(jQuery)(function($) {
	$.fn.accordion_animation = function(options) {
		$(this).each(function() {
			var settings = $.extend({
				select : null,
				direction : 'top',
				speed : 100,
				tab : 1
			}, options);
			var self = $(this);
			//check the parameters
			if(!self.find(settings.select)) {
				return false;
			}sadasdasdadsshitshitshitshitshitshitshithsti
			var total_space, tab_space, animation_space;
			var tabs = self.find(settings.select);
			if(settings.direction === 'top' || settings.direction === 'bottom') {
				total_space = self.outerHeight();
				tab_space = tabs.outerHeight();
			}else if(settings.direction === 'left' || settings.direction === 'right') {
				total_space = self.outerWidth();
				tab_space = self.outerWidth();
			}else{
				console.log('the value of direction must be top/bottom/left/right.');
				return false;
			}
			animation_space = (total_space - tab_space) / (tabs.length - 1);
			self.css({'position':'relative', 'overflow':'hidden'});
			tabs.each(function(t) {
				$(this).data('index', t);
				var o = {};
				o[settings.direction] = animation_space*t+'px';
				o['position'] = 'absolute';
				$(this).css(o, settings.speed);
				$(this).hover(
					function() {
						//code here for mousein event
						cIndex = $(this).data('index');
						tabs.each(function(i) {
							move_space = (i > cIndex) ? tab_space+animation_space*(i-1) : animation_space*i;
							var to = {};
							to[settings.direction] = move_space+'px';
							$(this).stop().animate(to, settings.speed);
						});
					}, function() {});
			});
		});
	}
})(jQuery);