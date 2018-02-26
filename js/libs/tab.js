
(function(window){

	

	function toggleTab(tabId) {
		var previousTabs = document.querySelectorAll('.tab__title--selected');
		var previousContent = document.querySelector('.tab__content--selected');
		var activeContent = document.querySelector("[data-content-id='"+tabId+"']");
		console.log("[data-content-id='"+tabId+"']",activeContent);
		var activeTabs = document.querySelectorAll("[data-tab-id='"+tabId+"']");
		
		//Deactivate previous selected tabs
		for(var i=0; i < previousTabs.length; i++) {
			previousTabs[i].classList.remove('tab__title--selected');
		}

		//Activate the current content
		for(var i=0; i < activeTabs.length; i++) {
			activeTabs[i].classList.add('tab__title--selected');
		}

		//Toggle between previous content and 
		previousContent.classList.remove('tab__content--selected');
		activeContent.classList.add('tab__content--selected');
	}

	var init = function() {

		var tabs = document.querySelectorAll('.tab__title');

		for(var i =0 ; i < tabs.length; i++) {

			tabs[i].addEventListener('click',function(){
				console.log(this.dataset.tabId);	
				toggleTab(this.dataset.tabId);
			});
		}

		var tabsContainer = document.querySelectorAll('.tab__container > .tab__title');

		for(var i = 0; i < tabsContainer.length; i++) {
			//On mobile devices, position the window in front of the active tab.
			tabsContainer[i].addEventListener('click',function(){
				window.scrollToElement(this,1000);
			});
		}
	}

	document.addEventListener("DOMContentLoaded", init); 
 
})(window);
