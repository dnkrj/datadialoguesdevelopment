let buttonenter = document.getElementById("buttonenter");
buttonenter.addEventListener("click", () => {
  document.body.classList.add("doneenter");
  setTimeout(() => buttonenter.remove(), 500);
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
