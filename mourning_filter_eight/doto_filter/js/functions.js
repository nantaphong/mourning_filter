(function ($, Drupal, window) {

$(document).ready(function() {
	console.log('filter');
	
	if (getInternetExplorerVersion() >= 10){
		// $('.container img').each(function(){
		// 	var el = $(this);
		// 	el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"5","opacity":"0"}).insertBefore(el).queue(function(){
		// 		var el = $(this);
		// 		el.parent().css({"width":this.width,"height":this.height});
		// 		el.dequeue();
		// 	});
		// });
		console.log('ie+');
		$('body').addClass('grayscale');

	};
	
	if(getBrowser()=='ie'){
		$('body').addClass('ie');
	}
	
	if (getInternetExplorerVersion() >= 10){
		$('body').addClass('ie11');
	};

	function getBrowser() { 
	     if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
	      return 'ie';
	     }
    }
	
	function getInternetExplorerVersion(){
		var rv = -1;
		if (navigator.appName == 'Microsoft Internet Explorer'){
			var ua = navigator.userAgent;
			var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
			rv = parseFloat( RegExp.$1 );
		}
		else if (navigator.appName == 'Netscape'){
			var ua = navigator.userAgent;
			var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
			rv = parseFloat( RegExp.$1 );
		}
		return rv;
	};
});

})(jQuery, Drupal, window);