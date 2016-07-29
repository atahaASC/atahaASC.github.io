var audioNotOpen = true;

var audio = document.getElementById("audio");

function playMusic(){
    if (audioNotOpen) {
        audio.play();

        audioNotOpen = false;
    } else {
        audio.pause();

        audioNotOpen = true;
    }
}
