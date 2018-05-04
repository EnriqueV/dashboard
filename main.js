function login(){
    debugger;
  var username = document.getElementById('user').value;
  var password = document.getElementById('pass').value;

  if(username=='arsal_admin'){
      location.replace("dashboard.html")

  }else{

    alert("Usuario Incorrecto");
  }


}