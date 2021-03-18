import hamburgerMenu from './modules/hamburgerMenu.js';
import observerAnimation from './modules/observerAnimation.js';
import observerCounter from './modules/observerCounter.js';
import stickyHeader from './modules/stickyHeader.js';
import mobileScreen from './modules/mobileScreen.js';
import carousel from './modules/carousel.js';
import validationForm from './modules/validationForm.js';
import resize from './modules/resizeScreen.js';
import zoomPhoto from './modules/zoomPhoto.js';

function init() {
	carousel();	
	stickyHeader();
	observerCounter();
	resize();
	zoomPhoto();
}
validationForm();
observerAnimation();
hamburgerMenu();
mobileScreen();

window.addEventListener('load', init);