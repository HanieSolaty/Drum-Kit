musicButtons = document.querySelectorAll("button.drum");

function checkcharacter(ch) {
  switch (ch) {
    case "w":
        var aduio = new Audio('sounds/tom-1.mp3');
        aduio.play();
      break;
    case "a":
        var aduio = new Audio('sounds/tom-2.mp3');
        aduio.play();
      break;
    case "s":
        var aduio = new Audio('sounds/tom-3.mp3');
        aduio.play();
      break;
    case "d":
        var aduio = new Audio('sounds/tom-4.mp3');
        aduio.play();
      break;
    case "j":
        var aduio = new Audio('sounds/snare.mp3');
        aduio.play();
      break;
    case "k":
        var aduio = new Audio('sounds/crash.mp3');
        aduio.play();
      break;
    case "l":
        var aduio = new Audio('sounds/kick-bass.mp3');
        aduio.play();
      break;
    default:
  }
}

function addAnimation(ch1) {
  var pressed = document.querySelector("." + ch1);
  pressed.classList.add("pressed");
  setTimeout(function () {
    pressed.classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < musicButtons.length; i++) {
  musicButtons[i].addEventListener('click', function() {
    checkcharacter(this.textContent);
    addAnimation(this.textContent);
  });
}

document.addEventListener('keypress', function (event) {
  checkcharacter(event.key);
  addAnimation(event.key);
});
