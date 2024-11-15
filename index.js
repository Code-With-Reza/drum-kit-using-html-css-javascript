var noofdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < noofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        butttonanimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    makesound(event.key);
    butttonanimation(event.key);
});

function makesound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function butttonanimation(currkey) {
    var activebutton = document.querySelector("." + currkey);

    activebutton.classList.add("pressed");

    setTimeout(function() { activebutton.classList.remove("pressed") }, 100);
}
