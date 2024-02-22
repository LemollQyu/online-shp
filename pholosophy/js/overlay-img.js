const imgSatu = document.querySelectorAll('.satu');
const imgDua = document.querySelectorAll('.dua');


var imageSatu = () => {
		imgSatu[0].classList.add('opacity');
		imgDua[0].classList.remove('opacity');
}

var imageDua = () => {
		imgDua[0].classList.add('opacity');
		imgSatu[0].classList.remove('opacity');
}

var satu = () => {
		imgSatu[1].classList.add('opacity');
		imgDua[1].classList.remove('opacity');
}

var dua = () => {
		imgDua[1].classList.add('opacity');
		imgSatu[1].classList.remove('opacity');
}

var photoSatu = () => {
		imgSatu[2].classList.add('opacity');
		imgDua[2].classList.remove('opacity');
}

var photoDua = () => {
		imgDua[2].classList.add('opacity');
		imgSatu[2].classList.remove('opacity');
}

imgSatu[0].addEventListener('click', imageSatu);
imgDua[0].addEventListener('click', imageDua);

imgSatu[1].addEventListener('click', satu);
imgDua[1].addEventListener('click', dua);

imgSatu[2].addEventListener('click', photoSatu);
imgDua[2].addEventListener('click', photoDua);


const wadah = document.querySelectorAll('.wadah');
const nameimg = document.querySelectorAll('.name');


// toggle btn slide

const btnS = document.querySelectorAll('.btn');

var btnSlide = function(m){
	btnS.forEach( (btn) => {
		btn.classList.remove('on');
	} );

	wadah.forEach((slide) => {
		slide.classList.remove('on');
	})

	nameimg.forEach((name) => {
		name.classList.remove('on');
	})

	nameimg[m].classList.add('on');

	btnS[m].classList.add('on');

	wadah[m].classList.add('on');

};



btnS.forEach( (btn, i) => {
	btn.addEventListener("click", () => {
		btnSlide(i);
	});
})