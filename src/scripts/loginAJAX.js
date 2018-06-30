$.ajax({ // post to JSON DB
    url: "http://localhost:8088/admin", // url where to submit the request
    method : "GET", // type of action POST
    data : { // object
        "username": (JSON.stringify(registerName)), // post registerName
        "email": (JSON.stringify(registerEmail)), // post email
        "password":(JSON.stringify(registerPassword))   }


}).then(userID=> sessionStorage.setItem("userID", JSON.stringify(userID.id)))



$("#clickSub").click(function() { // click on <button class="clickSub"> to init function



if ($("#userName".val())=== data.username && $("#email".val())=== data.password) {



} else {

}


})




//clear fields after submission//
$(function() {
    $("#clickSub").click(function() {
        $(".inputFields").val("");
    });
  });




