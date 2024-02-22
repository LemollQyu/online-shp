const menu = document.getElementById('humberger-menu');
const navigasi = document.querySelector('.nav');
const boxMenu = document.querySelector('.box-menu');

menu.addEventListener('click', function(){
	navigasi.classList.toggle('active');
	boxMenu.classList.toggle('active');

});


var nav = () => {
	let y = scrollY;
	console.log(y)
	if (y < 471) {
		navigasi.style.color = "white";
		navigasi.style.backgroundColor = "rgba(0,0,0,0)";
	} else {
		navigasi.style.color = "black";
		navigasi.style.backgroundColor = "rgba(255,255,255,.6)";
	}
} 

window.addEventListener('scroll', nav);
