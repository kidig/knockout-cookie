(function(ko, jQuery) {
	
	if (typeof (jQuery) === "undefined") { return; }
	if (typeof (jQuery.cookie) === "undefined") { return; }
	
	ko.extenders.cookie = function(target, key) {
		var initialValue = target();
		
		if (key && jQuery.cookie(key) !== null) {
			try {
				initialValue = JSON.parse(jQuery.cookie(key));
			} catch(e) {
			}
		}
		
		target(initialValue);
		
		target.subscribe(function(newValue) {
			jQuery.cookie(key, ko.toJSON(newValue));
		});
		
		return target;
	};
})(ko, jQuery);