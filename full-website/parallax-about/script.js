var audio = new Audio('Nuvema-Town.mp3');
var isAudioPlaying = false;

// Set the desired volume level (between 0 and 1)
audio.volume = 0.1; // Adjust this value to your preference

function playAudio() {
  if (!isAudioPlaying) {
    audio.play();
    isAudioPlaying = true;
  }
}

// Add this code inside your $(document).ready() function
$(document).ready(function() {
  // Play audio when the page is clicked
  $(document).on("click", function() {
    playAudio();
  });

  $(window).scroll(function() {
    const 
      a = $(this).scrollTop(),
      b = 800;
    $("h1").css({
      backgroundPosition: "center " + a / 2 + "px" 
    });
    $(".parallax").css({ 
      top: a / 1.6 + "px", 
      opacity: 1 - a / b 
    });
  });
  
  document.addEventListener("scroll", () => {
    const 
      top = window.pageYOffset,
      one = document.querySelector(".one"),
      two = document.querySelector(".two"),
      three = document.querySelector(".three"),
      four = document.querySelector(".four"),
      five = document.querySelector(".five");
  
    one.style.bottom = -(top * 0.1) + "px";
    two.style.bottom = -(top * 0.2) + "px";
    three.style.bottom = -(top * 0.3) + "px";
    four.style.bottom = -(top * 0.4) + "px";
    five.style.bottom = -(top * 0.5) + "px";
  });
});