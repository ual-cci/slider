const delay = 2.5; // seconds
const numSlides = 2;

// Do not edit below here
/////////////////////////

var image;
var button;
var currentSlide = 1;
var timer;

window.onload = function() {
	image = document.getElementById('image');
	button = document.getElementById('pause');
	button.onclick = toggleTimer;
	startTimer();
}

function toggleTimer() {
	console.log(timer)
	if (!timer) {startTimer();}
	else if (timer) {stopTimer();}
}

function startTimer() {
	timer = setInterval(displayNextSlide, delay * 1000);
	button.innerText = 'Pause';
}

function stopTimer() {
	clearInterval(timer);
	timer = undefined
	button.innerText = 'Play';
}



function displayNextSlide() {
	currentSlide++;
	if (currentSlide > numSlides) currentSlide = 1;
	image.src = `./slides/${slideNumber(currentSlide)}.png`
}

function slideNumber(i) {
	return (i < 10 ? `0${i}` : `${i}`)
}
