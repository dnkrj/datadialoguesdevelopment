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

let map = document.getElementById("map");
function updatePerspective(p){
  map.style.perspectiveOrigin = `${window.innerWidth/2 - p.pageX}px ${window.innerHeight/2 - p.pageY}px`
}
addEventListener('mousemove', updatePerspective, false);
