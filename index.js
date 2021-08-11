if(document.referrer.indexOf(window.location.hostname)!=-1) {
  document.body.classList.add("doneenter");
  document.body.classList.add("doneexplore");
  document.querySelector("header").remove();
  document.querySelector("section").remove();
  document.querySelector("audio").play();
}

document.getElementById("buttonenter").addEventListener("click", () => {
  document.body.classList.add("doneenter");
  document.querySelector("audio").play();
  setTimeout(() => document.querySelector("header").remove(), 500);
}, false);

document.getElementById("buttonexplore").addEventListener("click", () => {
  document.body.classList.add("doneexplore");
  setTimeout(() => document.querySelector("section").remove(), 500);
}, false);

document.getElementById("buttontogglesound").addEventListener("click", () => {
  document.querySelector("audio").volume = document.querySelector("audio").volume ? 0 : 1;
}, false);

document.getElementById("buttontoggleframework").addEventListener("click", () => {
  document.body.classList.toggle("showframework");
}, false);

document.querySelectorAll('li a').forEach((e) => {
	e.addEventListener('click', (e) => {
		document.body.classList.add('transitioning');
	}, false)
});

let perspectiveOriginX = 0;
let perspectiveOriginY = 0;
let pageX = window.innerWidth/2;
let pageY = window.innerHeight/2;

let map = document.getElementById("map");
function updatePerspective(){
  perspectiveOriginX = (19*perspectiveOriginX + window.innerWidth/2 - pageX)/20;
  perspectiveOriginY = (19*perspectiveOriginY + window.innerHeight/2 - pageY)/20;
  map.style.perspectiveOrigin = `${perspectiveOriginX}px ${perspectiveOriginY}px`;
  window.requestAnimationFrame(updatePerspective);
}
window.requestAnimationFrame(updatePerspective);


function updateP(event){
  pageX = event.pageX;
  pageY = event.pageY;
}
addEventListener('mousemove', updateP, false);
