var audio = new Audio('Fortree-City.mp3');
var isAudioPlaying = false;

// Set the desired volume level (between 0 and 1)
audio.volume = 0.1; // Adjust this value to your preference

function playAudio() {
  if (!isAudioPlaying) {
    audio.play();
    isAudioPlaying = true;
  }
}

$(document).ready(function() {
  // Play audio when the page is clicked
  $(document).on("click", function() {
    playAudio();
  });

  function scroller() {
    $(".smooth").on("scroll", function() {
      let scrollPos = $(this).scrollTop();
      $(".parallax").css({
        top: scrollPos / 2 + "px",
        opacity: 1 - scrollPos / 200
      });
    });
  }
  scroller();
});
