$("#logCont").hide()



$("#clickSub").click(function() { // click on <button class="clickSub"> to init function

let adminName= $("#userName").val() // make value of id="adminName" into a variable
console.log(adminName) // console.log for varification
let adminEmail= $("#email").val() // same as above but for email
console.log(adminEmail) // console.log for varification
let adminPassword= $("#password").val()
console.log(adminPassword)

$.ajax({
    url: `http://localhost:8088/admin?username=${adminName}`,


}).then((adminID)=>{


adminID.forEach(admin => {
    sessionStorage.setItem("adminID",admin.id),
    sessionStorage.setItem("adminName",admin.username)

});
})


})


// $(function() {
//     $(".loggedIn").click(function() {
//       $(".showIt").toggle();
//     });
//   });
$(function() {
    $("#myLogbtn").click(function() {
      $("#logCont").toggle();
    });
  });


$(function () {
    if (sessionStorage.getItem("adminName".val()) === !(null)){
        $(".showIt").show();

    }
    else (sessionStorage.getItem("adminName".val()) === (null)); {
        $(".showIt").hide();}
    })


    $(function() {
        $("#clickSub").click(function() {
            $(".inputFields").val("");
        });
    });
