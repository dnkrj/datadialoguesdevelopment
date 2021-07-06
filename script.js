document.getElementById("buttonenter").addEventListener("click", () => {
  document.body.classList.add("doneenter");
}, false);

document.getElementById("buttonnext").addEventListener("click", () => {
  document.body.classList.add("donenext");
}, false);

document.getElementById("bubble1").addEventListener("click", () => {
  document.body.classList.add("done1");
}, false);

console.clear();

var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
