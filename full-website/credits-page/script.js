var audio = new Audio('Rustboro-city.mp3');
var isAudioPlaying = false;

audio.volume = 0.25;

function playAudio() {
  if (!isAudioPlaying) {
    audio.play();
    isAudioPlaying = true;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("click", function() {
    playAudio();
  });
});