(function(window,Handlebars){
	function _registerPartials() {
		//Components
		Handlebars.registerPartial('ecard',document.getElementById('card-template').innerHTML);
		Handlebars.registerPartial('accordion',document.getElementById('accordion-template').innerHTML);
		Handlebars.registerPartial('gallery',document.getElementById('gallery-template').innerHTML);
		Handlebars.registerPartial('modal-button',document.getElementById('modal-button-template').innerHTML);
		Handlebars.registerPartial('calculator',document.getElementById('calculator-template').innerHTML);
		Handlebars.registerPartial('modal-search',document.getElementById('modal-search-template').innerHTML);

		//Page
		Handlebars.registerPartial('menu-desktop',document.getElementById('menu-desktop-template').innerHTML);
		Handlebars.registerPartial('menu-mobile',document.getElementById('menu-mobile-template').innerHTML);
		
		Handlebars.registerPartial('section-header',document.getElementById('section-header-template').innerHTML);		
		Handlebars.registerPartial('tab-list',document.getElementById('tabs-tab-list-template').innerHTML);
		Handlebars.registerPartial('tab-content',document.getElementById('tabs-tab-content-template').innerHTML);		
		Handlebars.registerPartial('carousel',document.getElementById('carousel-template').innerHTML);
		Handlebars.registerPartial('projects',document.getElementById('tabs-template').innerHTML);

		Handlebars.registerPartial('graph',document.getElementById('graph-template').innerHTML);
		Handlebars.registerPartial('bar',document.getElementById('bar-template').innerHTML);
		Handlebars.registerPartial('skills',document.getElementById('skills-template').innerHTML);

	}

	function loadHome() {
		_registerPartials();		
		var homeHolder = document.getElementById('home-holder',document.getElementById('home-template').innerHTML);
		var homeHtml = document.getElementById('home-template').innerHTML;
		var homeTemplate = Handlebars.compile(homeHtml);
		var data = {portfolio:dataSource};
		homeHolder.innerHTML = homeTemplate(data);
	};
   
	//loadHome(); 
	window.templates.register(loadHome);
})(window,Handlebars);