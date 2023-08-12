var audio = new Audio('Rustboro-city.mp3');
var isAudioPlaying = false;

// Set the desired volume level (between 0 and 1)
audio.volume = 0.1; // Adjust this value to your preference

function playAudio() {
  if (!isAudioPlaying) {
    audio.play();
    isAudioPlaying = true;
  }
}

// Add this code inside your DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
  // Play audio when the page is clicked
  document.addEventListener("click", function() {
    playAudio();
  });
});