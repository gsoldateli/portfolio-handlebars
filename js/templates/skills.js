(function(window,Handlebars){
	var skillsHolder = document.getElementById('skills-holder');	
	
	var skillsHtml = document.getElementById('skills-template').innerHTML;
	var skillsTemplate = Handlebars.compile(skillsHtml);
	Handlebars.registerPartial('graph',document.getElementById('graph-template').innerHTML);
	Handlebars.registerPartial('bar',document.getElementById('bar-template').innerHTML);
	
	
	function loadSkills() {
		var data = {skills:dataSource.skills};

		skillsHolder.innerHTML = skillsTemplate(data);
	};
 
	loadSkills();  

})(window,Handlebars);