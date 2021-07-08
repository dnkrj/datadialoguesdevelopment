let messages = [
	{received: true, text: "Mum, how are you getting on with this new tracking system?"},
	{text: "Ooh it's brilliant! I left the house all on my own yesterday and I wasn’t worried at all."},
	{received: true, text: "I know, I got a notification. Three actually. You didn’t have any problems without the guide dog?"},
	{choice: 8, text: "No"},
	{choice: 5, pause: true, text: "Guide dog?"},
	{text: "Guide dog?! How many times? His name is Digby!"},
	{received: true, text: "Oh yes, sorry. You didn’t have any problems without digby then?"},
	{choice: 8, pause: true, text: "No"},
	{text: "No, I took my stick and I was feeling really confident."},
	{received: true, text: "Well i’m glad you're feeling good about it. But .....don’t you find it just a little weird being monitored all the time?"},
	{choice: 12, text: "Yes, actually"},
	{choice: 13, pause: true, text: "No?"},
	{next: 14, text: "Yes, of course I'd rather not be watched, but that is the price you have to pay when you sign up for these things. It helps me so much that there isn't really a good alternative!"},
	{text: "No, of course not. I'm being monitored by you. It's mostly a reassurance"},
	{received: true, text: "I guess. But do you know who they share your data with?"},
	{choice: 18, text: "I dont have a choice"},
	{choice: 19, text: "Not this again"},
	{choice: 20, pause: true, text: "Not really"},
	{next: 21, text: "I don’t know if you really get any choice about that..."},
	{next: 28, text: "Oh please don't start this again Samantha. You don’t know how hard it is to consider all those things when you can't use screens. This is the first technology that's come along that I can actually use,and you want me to stop."},
	{next: 39, text: "Well, I guess I don't know exactly. But I know they share it with the doctors and that's an enormous help! God, I used to have to tell them the same thing every 5 minutes."},
	{received: true, text: "I am happy to look into the privacy settings if you want? There must be some information somewhere."},
	{choice: 24, text: "Have a look"},
	{choice: 25, pause: true, text: "Don't bother"},
	{next: 26, text: "OK, have a look. But don’t turn it off completely! I need the doctor to be able to see everything."},
	{next: 35, text: "Oh I doubt there’s any point. I’m sure they share it with everyone. Besides, they need to do that to make money."},
	{received: true, text: "I won't"},
	{received: true, pause: true, text: "We can talk you through all the different options together now so you can make the choice."},
	{received: true, text: "I’m just offering to talk you through the settings and see if there is a way to limit data sharing..."},
	{choice: 24, text: "Have a look"},
	{choice: 31, pause: true, text: "I want to share"},
	{text: "Well maybe I want to share it! If it makes better health services then i’m quite happy to give it away!"},
	{text: "Besides, its giving me confidence again. You don't understand how important that is for me."},
	{received: true, text: "OK, I'm sorry for pushing it, you're right."},
	{received: true, pause: true, text: "If it makes you feel safe and reassured then thats the most important."},
	{received: true, text: "We pay for the service!! You shouldn’t have to sell your data as well!"},
	{choice: 37, next: 30, text: "You don't understand"},
	{text: "Oh please don't start this again Samantha. You don’t know how hard it is to consider all those things when you can't use screens. This is the first technology that's come along that I can actually use, and you want me to stop."},
	{next: 33, text: "It'll be on at me non-stop about giving permissions to every little thing. That is absolutely the last thing in need."},
	{received: true, text: "But how do you know they dont also share it with private companies...?"},
	{choice: 41, next: 30, text: "It would be nice to know"},
	{next: 21, text: " I guess It would be quite nice to at least know how my information is being used...."},
]

let showMessage = (i) => {
	let message = messages[i];
	let ol = document.getElementById("messages");
	let li = document.createElement("li");
	if (message.choice) {
		let a = document.createElement("a");
		a.href = "javascript:;";
		a.addEventListener("click", () => {
			document.querySelectorAll('.choice').forEach(e => e.remove());
			showMessage(message.choice)
		}, false);
		a.appendChild(document.createTextNode(message.text));
		li.appendChild(a);
		li.classList.add("choice");
	} else {
		li.appendChild(document.createTextNode(message.text));
	}
	li.classList.add(message.received ? "received" : "sent");
	ol.appendChild(li);
	li.scrollIntoView({behavior: "smooth"});

	if (!message.pause) {
		setTimeout(() => showMessage(message.next || i + 1), 500);
	};
}

showMessage(0)