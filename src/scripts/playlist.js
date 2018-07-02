$(document).ready(function() {
  let playing = false;

  $(".playlist_1").click(function() {
      $(this).toggleClass("down");

      if (playing === false) {
          document.getElementById("audio_1").play();
          playing = true;
          // $(this).text("stop sound");

      } else {
        document.getElementById("audio_1").pause();
        playing = false;
        // $(this).text("restart sound");
      }

  });
});

let audio = $("#audio_1");
  audio.volume = 0.5;


$(document).ready(function() {
  let playing_2 = false;

  $(".playlist_2").click(function() {
      $(this).toggleClass("down");

      if (playing_2 === false) {
          document.getElementById("audio_2").play();
          playing_2 = true;
          // $(this).text("stop sound");

      } else {
        document.getElementById("audio_2").pause();
        playing_2 = false;
        // $(this).text("restart sound");
      }

  });
});

let audio_2 = $("#audio_2");
  audio_2.volume = 0.5;

$(document).ready(function() {
  let playing_3 = false;

  $(".playlist_3").click(function() {
      $(this).toggleClass("down");

      if (playing_3 === false) {
          document.getElementById("audio_3").play();
          playing_3 = true;
          // $(this).text("stop sound");

      } else {
        document.getElementById("audio_3").pause();
        playing_3 = false;
        // $(this).text("restart sound");
      }

  });
});

let audio_3 = $("#audio_3");
  audio_3.volume = 0.5;

  $(document).ready(function() {
  let playing_4 = false;

  $(".playlist_4").click(function() {
      $(this).toggleClass("down");

      if (playing_4 === false) {
          document.getElementById("audio_4").play();
          playing_4 = true;
          // $(this).text("stop sound");

      } else {
        document.getElementById("audio_4").pause();
        playing_4 = false;
        // $(this).text("restart sound");
      }

  });
});

let audio_4 = $("#audio_4");
  audio_4.volume = 0.5;