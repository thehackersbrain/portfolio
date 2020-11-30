// Author: Gaurav Raj [HackersBrain]
// Author URL: https://thehackersbrain.pythonanywhere.com/

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show');
		});
	}
};
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	/*Active link*/
	navLink.forEach((n) => n.classList.remove('active'));
	this.classList.add('active');

	/*Remove menu mobile*/
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });

// ===== DARK MODE =====
function darkTheme() {
	const header = document.getElementsByClassName('l-header');
	const nav = document.getElementsByClassName('nav__link');
	const homeTitle = document.getElementsByClassName('home__title-color');
	const contactForm = document.getElementsByClassName('contact__form');
	const footer = document.getElementsByClassName('footer');
	const themeBtn = document.getElementsByClassName('theme__btn');
	const socialIcons = document.getElementsByClassName('home__social-icon');
	const mobnav = document.getElementsByClassName('nav__toggle');
	// function to toggle the dark mode
	document.body.classList.toggle('dark__theme');
	header[0].classList.toggle('dark__nav');
	nav[0].classList.toggle('dark__nav__link');
	homeTitle[0].classList.toggle('dark__home__title-color');
	contactForm[0].classList.toggle('dark__contact__form');
	footer[0].classList.toggle('dark__footer');
	themeBtn[0].classList.toggle('dark__theme__btn');
	socialIcons[0].classList.toggle('dark__home__social-icon');
	socialIcons[1].classList.toggle('dark__home__social-icon');
	socialIcons[2].classList.toggle('dark__home__social-icon');
	socialIcons[3].classList.toggle('dark__home__social-icon');
	socialIcons[4].classList.toggle('dark__home__social-icon');
	socialIcons[5].classList.toggle('dark__home__social-icon');
	socialIcons[6].classList.toggle('dark__home__social-icon');
	socialIcons[7].classList.toggle('dark__home__social-icon');
	socialIcons[8].classList.toggle('dark__home__social-icon');
	socialIcons[9].classList.toggle('dark__home__social-icon');
	mobnav[0].classList.toggle('dark__nav_toggle');
	const theme = document.getElementById('theme').value;
	if (theme == 'Dark') {
		document.getElementById('theme').value = 'Light';
	} else {
		document.getElementById('theme').value = 'Dark';
	}
}
