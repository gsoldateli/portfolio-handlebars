(function(window){

	$ajax.request(
		'dist/templates/template.html', 
		function(response) {
			var head = document.querySelector('head');
			head.innerHTML += response;

			loadData();
		});


	function loadData(){ 
		console.log('ajax',$ajax);
		$ajax.jsonRequest(
		'datasource/portfolio.json', 
		function(response) {
			window.dataSource = response;

			window.templates.run();
			window.libraries.run();
		});
	}
	

})(window);