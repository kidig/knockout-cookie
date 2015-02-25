(function(ko) {
	
	if (typeof (jQuery) === "undefined") { return; }
	if (typeof (jQuery.cookie) === "undefined") { return; }
	
	ko.extenders.cookie = function(target, key) {
		var initialValue = target();
		
		if (key && $.cookie(key) !== null) {
			try {
				initialValue = JSON.parse($.cookie(key));
			} catch(e) {
			}
		}
		
		target(initialValue);
		
		target.subscribe(function(newValue) {
			$.cookie(key, ko.toJSON(newValue));
		});
		
		return target;
	}
})(ko);