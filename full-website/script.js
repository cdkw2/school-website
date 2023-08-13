var audio = new Audio('Fortree-City.mp3');
var isAudioPlaying = false;

audio.volume = 0.1;

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
