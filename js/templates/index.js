(function(window){
	var templates = [];

	window.templates = {
		register: function(templateFunction) {
			templates.push(templateFunction);	
		},
		run: function() {
			for(var i=0; i<templates.length; i++) {
				templates[i]();
			}
		} 
	}; 
	
})(window);