var audio = new Audio('Nuvema-Town.mp3');
var isAudioPlaying = false;

audio.volume = 0.25;

function playAudio() {
  if (!isAudioPlaying) {
    audio.play();
    isAudioPlaying = true;
  }
}

$(document).ready(function() {
  $(document).on("click", function() {
    playAudio();
  });
});