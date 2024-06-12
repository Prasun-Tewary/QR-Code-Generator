var inp=document.querySelector(".input");
var btn=document.querySelector(".btn");
var api='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
var qr=document.querySelector(".qr");
btn.addEventListener("click", function(){
  if(inp.value==""){
    alert("Please enter something");
  }
  else{
    //api='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+inp.value;
    qr.style.display="initial";
    qr.style.opacity="1";
    document.querySelector("img").src=api+inp.value;
    inp.value="";
  }
});