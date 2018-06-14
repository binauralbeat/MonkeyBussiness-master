$.ajax({
    type: "GET",
    url: "http://localhost:8088/admin",
    data: {username: "", password: ""},
    contentType: "application/json; charset=utf-8",
    dataType: "xml",
    success: OnSuccessCall,
    error: OnErrorCall
});



$("#clickSub").click(function() { // click on <button class="clickSub"> to init function



if ($("#userName".val())=== data.username && $("#password".val())=== data.password) {



} else {

}


})






.then(userID=> sessionStorage.setItem("userID", JSON.stringify(userID.id)))



//clear fields after submission//
$(function() {
    $("#clickSub").click(function() {
        $(".inputFields").val('');
    });
  });




