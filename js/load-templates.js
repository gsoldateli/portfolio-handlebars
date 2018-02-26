(function(window){
	
	var xmlhttp = new XMLHttpRequest();
	
	var _executeRequest = function(url, cbFunc) {
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			    var response = JSON.parse(this.responseText);
			    
			    if(cbFunc) {
			    	cbFunc(response, this);	
			    }
			    
		    }
		};
		//Synchronous ajax? Hmmm doesn't look good.
		xmlhttp.open("GET", url, false);
		xmlhttp.send();
	};

	window.$ajax = {
		request: function(url,cb) {
			_executeRequest(url,cb);
		}
	};

})(window);

(function(window){
	$ajax.request(
		'datasource/portfolio.json', 
		function(response) {
			window.dataSource = response;
		});

})(window);