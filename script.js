document.getElementById("buttonenter").addEventListener("click", () => {
  document.body.classList.add("doneenter");
  setTimeout(() => document.querySelector("header").remove(), 500);
}, false);

document.getElementById("buttonexplore").addEventListener("click", () => {
  document.body.classList.add("doneexplore");
  setTimeout(() => document.querySelector("section").remove(), 500);
}, false);

document.getElementById("buttontoggleframework").addEventListener("click", () => {
  document.body.classList.toggle("showframework");
}, false);

document.getElementById("buttonfilter").addEventListener("click", () => {
  document.body.classList.toggle("filter");
}, false);

document.querySelectorAll('li a').forEach((e) => {
	e.addEventListener('click', (e) => {
		document.body.classList.add('transitioning');
	}, false)
});
