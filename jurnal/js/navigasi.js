const menu = document.getElementById('humberger-menu');
const navigasi = document.querySelector('.nav');
const boxMenu = document.querySelector('.box-menu');

menu.addEventListener('click', function(){
	navigasi.classList.toggle('active');
	boxMenu.classList.toggle('active');

});