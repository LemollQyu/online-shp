// slides
const slideS = document.querySelectorAll('.slides');


// toggle btn slide

const btnS = document.querySelectorAll('.btn');

var btnSlide = function(m){
	btnS.forEach( (btn) => {
		btn.classList.remove('focus');
	} );

	slideS.forEach((slide) => {
		slide.classList.remove('focus');
	})

	btnS[m].classList.add('focus');

	slideS[m].classList.add('focus');

};



btnS.forEach( (btn, i) => {
	btn.addEventListener("click", () => {
		btnSlide(i);
	});
})


// toggle slide 


// automatic slider

var repeat = function(activeClass){
	let focus = document.getElementsByClassName('focus');
	let i = 1;

	var repeater = () => {
		setTimeout(function(){

			[...focus].forEach((activeSlide) => {
				activeSlide.classList.remove('focus');
			});

			slideS[i].classList.add('focus');
			btnS[i].classList.add('focus');
			i++;

			if(slideS.length == i){
				i = 0;
			}

			if(i >= slideS.length){
				return;
			}
			repeater();
		}, 7000);
	}
	repeater();
}
repeat();

// akhir slide