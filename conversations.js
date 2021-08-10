zenscroll.setup(0, 150)

document.getElementById("buttontogglesound").addEventListener("click", () => {
  document.querySelectorAll("audio").forEach(a => a.volume = a.volume ? 0 : 1);
  document.getElementById("buttontogglesound").classList.toggle('muted');
}, false);

let firstChoice = true;

function fadeOutAudio(audio){
	if (audio.volume <= 0.01) {
		audio.volume = 0;
		return;
	}

	audio.volume = audio.volume - 0.01;
	setTimeout(() => fadeOutAudio(audio), 30);
}

let showMessage = (i) => {
	let message = messages[i];
	let ol = document.getElementById("messages");
	let li = document.createElement("li");
	if (message.choice) {
		let button = document.createElement("button");
		button.type = "button";
		li.addEventListener("click", function handler() {
			this.removeEventListener('click', handler);
			if (firstChoice) {
				document.querySelector(`audio#loop`).play();
				document.querySelector(`audio#intro`)?.play();
				firstChoice = false;
			}
			ol.querySelectorAll('.choice').forEach((e) => {
				e.classList.add(e == li ? "hide" : "quickhide")
			});
			setTimeout(() => {
				showMessage(message.choice);
				document.querySelectorAll('.choice').forEach(e => e.remove());
			}, message.delay || 1000)
		}, false);
		button.appendChild(document.createTextNode(message.text));
		li.appendChild(button);
		li.classList.add("choice");
	} else {
		li.appendChild(document.createTextNode(message.text));
	}
	li.classList.add(message.type || "sent");
	ol.appendChild(li);

	zenscroll.intoView(li, 1000);

	if (message.audio) {
		audio = document.querySelector(`audio#${message.audio}`);
		audio.currentTime = 0;
		audio.play();
	}

	if (!message.pause) {
		let nextIndex = message.next || i + 1;
		let showNext = () => showMessage(nextIndex);
		if (!message.choice) {
			let minPause = message.type == messages[nextIndex].type ? 1200 : 2000;
			setTimeout(showNext, Math.max(message.text.length*20, minPause));
		} else {
			showNext();
		}
	} else if(!message.choice) {
		document.body.classList.remove("inprogress");
		setTimeout(() => {
			zenscroll.intoView(document.querySelector("article section p:first-child"), 2000);
			document.querySelectorAll("audio").forEach(fadeOutAudio);
			let buttontogglesound = document.getElementById("buttontogglesound");
			buttontogglesound.classList.add("hide");
			setTimeout(buttontogglesound.remove, 300);
		}, 3000);
	};

	[...ol.querySelectorAll('#messages li:not(.choice')].slice(0, -3).forEach(e => e.classList.add("fade"))
}

showMessage(0)
