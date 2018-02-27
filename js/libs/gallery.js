function Gallery() {

	var items = document.querySelectorAll('article.gallery-item');
	var bg = document.querySelector('.backimage');

	var init = function() {
		for(var x = 0; x < items.length; x++) {
			items[x].addEventListener('click',function(){
				changeImage(this);
			});			
		}

		changeImage(items[0]);
	};

	var changeImage = function(item) {

		var src = item.querySelector('img').src;

		for(var x = 0; x < items.length; x++) {
			items[x].classList.remove('active');
		}

		//set the selected item as active
		item.classList.add('active');


		bg.classList.remove('fadeout','fadein');
		bg.classList.add('fadeout');

		setTimeout(function(){
			bg.classList.remove('fadeout');
			bg.classList.add('fadein');
			bg.style.backgroundImage = "url('"+src+"')";
		},500);
		

	};

	init();
}

window.libraries.register(Gallery);
