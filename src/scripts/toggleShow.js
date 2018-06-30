$(function() {
    $("#clickSub").click(function() {
        $(".inputFields").val("");
    });
  });

$(document).ready(function () {
    if ($("#")) {
            $(".loggedIn").show();
        }
   else (sessionStorage.getItem("adminName") === (null)); {
            $(".loggedIn").hide();}
})