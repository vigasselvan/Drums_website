var lengthOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < lengthOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}

function clicked() {
    var audio1 = new Audio("sounds/crash.mp3");
    var audio2 = new Audio("sounds/kick-bass.mp3");
    var audio3 = new Audio("sounds/snare.mp3");
    var audio4 = new Audio("sounds/tom-1.mp3");
    var audio5 = new Audio("sounds/tom-2.mp3");
    var audio6 = new Audio("sounds/tom-3.mp3");
    var audio7 = new Audio("sounds/tom-4.mp3");
    if(this.getAttribute("class") == "w drum") {
        audio1.play();
    } else if(this.getAttribute("class") == "a drum") {
        audio2.play();
    } else if(this.getAttribute("class") == "s drum") {
        audio3.play();
    } else if(this.getAttribute("class") == "d drum") {
        audio4.play();
    } else if(this.getAttribute("class") == "j drum") {
        audio5.play();
    } else if(this.getAttribute("class") == "k drum") {
        audio6.play();
    } else if(this.getAttribute("class") == "l drum") {
        audio7.play();
    }
}

// doubt: while(this.getAttribute("class") == "drum")
//var audio = new Audio("sounds/crash.mp3");
//audio.play();