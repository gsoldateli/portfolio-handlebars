(function(window,Handlebars){
	var menuDesktopHtml = document.getElementById('menu-desktop-template').innerHTML;
	var menuDesktopTemplate = Handlebars.compile(menuDesktopHtml);
	
	var menuMobileHtml = document.getElementById('menu-mobile-template').innerHTML;	
	var menuMobileHolder = document.querySelector('.lateral-menu');
	var menuMobileTemplate = Handlebars.compile(menuMobileHtml);
	Handlebars.registerPartial('menu-mobile-list',document.getElementById('menu-mobile-list').innerHTML);

	function loadMenu() {
		var data = {menu:dataSource.menu};
		var holderDesktop = document.getElementById('menu-desktop-holder');
		holderDesktop.innerHTML = menuDesktopTemplate(data);
		menuMobileHolder.innerHTML = menuMobileTemplate(data);
	};

	loadMenu(); 

})(window,Handlebars);