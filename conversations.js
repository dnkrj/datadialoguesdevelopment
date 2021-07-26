document.getElementById("buttontogglesound").addEventListener("click", () => {
  document.querySelector("audio").volume = document.querySelector("audio").volume ? 0 : 1;
}, false);

let showMessage = (i) => {
	let message = messages[i];
	let ol = document.getElementById("messages");
	let li = document.createElement("li");
	if (message.choice) {
		let button = document.createElement("button");
		button.type = "button";
		li.addEventListener("click", function handler() {
			this.removeEventListener('click', handler);
			document.querySelector("audio").play();
			ol.querySelectorAll('.choice').forEach((e) => {
				e.classList.add(e == li ? "hide" : "quickhide")
			});
			setTimeout(() => {
				showMessage(message.choice);
				document.querySelectorAll('.choice').forEach(e => e.remove());
			}, 1000)
		}, false);
		button.appendChild(document.createTextNode(message.text));
		li.appendChild(button);
		li.classList.add("choice");
	} else {
		li.appendChild(document.createTextNode(message.text));
	}
	li.classList.add(message.received ? "received" : "sent");
	ol.appendChild(li);
	ol.scrollIntoView({block: "end", behavior: "smooth"});

	if (!message.pause) {
		let showNext = () => showMessage(message.next || i + 1);
		if (!message.choice) {
			setTimeout(showNext, Math.max(message.text.length*15, 200));
		} else {
			showNext();
		}
	} else if(!message.choice) {
		document.body.classList.remove("inprogress");
		setTimeout(() => {
			document.querySelector("article section p:first-child").scrollIntoView({block: "end", behavior: "smooth"})
		}, 2000);
	};

	[...ol.querySelectorAll('#messages li:not(.choice')].slice(0, -2).forEach(e => e.classList.add("fade"))
}

showMessage(0)
