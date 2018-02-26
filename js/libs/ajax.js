(function(window){
	var xmlhttp = new XMLHttpRequest();
	
	var _executeRequest = function(url, cbFunc) {
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			    var response = this.responseText;
			    
			    if(cbFunc) {
			    	cbFunc(response, this);	
			    }
			    
		    }
		};
		//Synchronous ajax? Hmmm doesn't look good.
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	};

	var _executeJsonRequest = function(url, cbFunc) {
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			    var response = JSON.parse(this.responseText);
			    
			    if(cbFunc) {
			    	cbFunc(response, this);	
			    }
			    
		    }
		};
		//Synchronous ajax? Hmmm doesn't look good.
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	};

	window.$ajax = {
		jsonRequest: function(url,cb) {
			_executeJsonRequest(url,cb);
		},
		request: function(url,cb) {
			_executeRequest(url,cb);
		}
		
	};

})(window);