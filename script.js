document.getElementById("buttonenter").addEventListener("click", () => {
  document.body.classList.add("doneenter");
}, false);

document.getElementById("buttonnext").addEventListener("click", () => {
  document.body.classList.add("donenext");
}, false);

document.querySelectorAll('li a').forEach((e) => {
	e.addEventListener('click', (e) => {
		document.body.classList.add('transitioning');
	}, false)
});