$("#clickSub_2").click(function() { // click on <button class="clickSub"> to init function

let registerName= $("#registerName").val() // make value of id="registerName" into a variable
console.log(registerName) // console.log for varification
let registerEmail= $("#registerEmail").val() // same as above but for email
console.log(registerEmail) // console.log for varification
let registerPassword= $("#registerPassword").val()
console.log(registerPassword)

sessionStorage.setItem("adminName", registerName)
$.ajax({ // post to JSON DB
    url: "http://localhost:8088/admin", // url where to submit the request
    method : "POST", // type of action POST
    data : { // object
        "username": ((registerName)), // post registerName
        "email": ((registerEmail)), // post email
        "password":((registerPassword))
   }


}).then(adminID=> sessionStorage.setItem("adminID", JSON.stringify(adminID.id)))


})
//clear fields after submission//
$(function() {
    $("#clickSub_2").click(function() {
        $(".inputFields").val("");
    });
  });




