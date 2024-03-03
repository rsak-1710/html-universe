let us1=document.getElementById('input-1');
let ps1=document.getElementById('input-2');
function login1(){
    if(us1.value=="admin@gmail.com" &&  ps1.value=="admin"){
        window.open("contents/contents.html");
    }
    else {
        alert("wrong username/password");
    }
}