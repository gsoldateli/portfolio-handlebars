(function(window,Handlebars){
	var projectsHolder = document.getElementById('projects-holder');	
	
	var tabsHtml = document.getElementById('tabs-template').innerHTML;
	var tabsTemplate = Handlebars.compile(tabsHtml);
	Handlebars.registerPartial('tab-list',document.getElementById('tabs-tab-list-template').innerHTML);
	Handlebars.registerPartial('tab-content',document.getElementById('tabs-tab-content-template').innerHTML);
	Handlebars.registerPartial('carousel',document.getElementById('carousel-template').innerHTML);
  
	function loadProjects() {
		var data = {project:dataSource.projects};
		projectsHolder.innerHTML = tabsTemplate(data);
	};
 
	loadProjects();  

})(window,Handlebars);