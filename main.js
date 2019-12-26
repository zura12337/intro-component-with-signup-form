$("#name-error, #last-name-error, #mail-error, #password-error").hide();
function validate(){
  var name_check = document.getElementById("name").value;
  var last_name_check = document.getElementById("last-name").value;
  var email_check = document.getElementById("email").value;
  var pass_check = document.getElementById("pass").value;
  if(name_check.length<1){
    $("#name-error").show();
    $("#name").css("background", "url('images/icon-error.svg')no-repeat 97% 50%")
    $("#name").css("border","1px solid hsl(0, 100%, 74%)")
  }else{
    $("#name-error").hide();
    $("#name").css("background", "none");
    $("#name").css("border", "1px solid hsl(246, 25%, 77%)");
  }
  if(last_name_check.length<1){
    $("#last-name-error").show();
    $("#last-name").css("background", "url('images/icon-error.svg')no-repeat 97% 50%")
    $("#last-name").css("border","1px solid hsl(0, 100%, 74%)")
  }else{
    $("#last-name-error").hide();
    $("#last-name").css("background", "none");
    $("#last-name").css("border", "1px solid hsl(246, 25%, 77%)")
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_check))
  {
    $('#mail-error').hide();
    $("#email").css("background", "none");
    $("#email").css("border", "1px solid hsl(246, 25%, 77%)");
  }else{
  $('#mail-error').show();
  $("#email").css("background", "url('images/icon-error.svg')no-repeat 97% 50%");
  $("#email").css("border","1px solid hsl(0, 100%, 74%)");
  }
  if(pass_check.length<1){
    $("#password-error").show();
    $("#pass").css("background", "url('images/icon-error.svg')no-repeat 97% 50%");
    $("#pass").css("border","1px solid hsl(0, 100%, 74%)")
  }else{
    $("#password-error").hide();
    $("#pass").css('background', "none");
    $("#pass").css("border", "1px solid hsl(246, 25%, 77%)");
  }

}
$("#submit").click(function(){
  validate();
})
