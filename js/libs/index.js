(function(window){
	var libraries = [];

	window.libraries = {
		register: function(initFunction) {
			libraries.push(initFunction);	
		},
		run: function() {
			for(var i=0; i<libraries.length; i++) {
				libraries[i]();
			}
		} 
	}; 
	
})(window);