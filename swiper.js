//SWIPER 
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 6,
	loop: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
     
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
     
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
     
		}
	}
  

 
});

//SWIPER 
  
  
  