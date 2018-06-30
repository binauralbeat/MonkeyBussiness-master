$("#clickSub").click(function() { // click on <button class="clickSub"> to init function

let userName= $("#userName").val() // make value of id="userName" into a variable
console.log(userName) // console.log for varification
let userEmail= $("#email").val() // same as above but for email
console.log(userEmail) // console.log for varification
let userMessage= $("#message").val()
console.log(userMessage)

// sessionStorage.setItem("username", userName)
$.ajax({ // post to JSON DB
    url: "http://localhost:8088/users", // url where to submit the request
    method : "POST", // type of action POST
    data : { // object
        "username": (userName), // post userName
        "email": (userEmail), // post email
        "message":(userMessage)
   }


})


})
//clear fields after submission//
$(function() {
    $("#clickSub").click(function() {
        $(".inputFields").val("");
    });
  });




