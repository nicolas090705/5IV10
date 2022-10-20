function pass(){
if(document.getElementById("128").checked){
  document.getElementById("cambiar").innerHTML='<input type="text" placeholder="max 16 caracteres" class="form-control" id="password" minlength="16" maxlength="16">';
}
else if(document.getElementById("192").checked){
  document.getElementById("cambiar").innerHTML='<input type="text" placeholder="max 24 caracteres" class="form-control" id="password" minlength="24" maxlength="24">';
}
else if(document.getElementById("256").checked){
  document.getElementById("cambiar").innerHTML='<input type="text" placeholder="max 32 caracteres" class="form-control" id="password" minlength="1632" maxlength="32">';
}
}
async function loadFile(mensaje) {
    let text = await mensaje.text();
    let password = document.getElementById('password').value;
    document.getElementById('txt').textContent = "Texto: "+text;

    console.log(text);
    console.log(password);
    let cifrado = CryptoJS.AES.encrypt(text,password);    
    document.getElementById('txtci').innerHTML=cifrado;
}

async function loadFile2(mensaje) {
    let text = await mensaje.text();
    let password = document.getElementById('password').value;
    document.getElementById('txt').textContent = text;
    console.log("texto cifrado: "+text);
    console.log("password: "+password);
    //let decifrado = CryptoJS.AES.decrypt(text,password); 
    //var decifrado = CryptoJS.AES.decrypt(text, password);   
    //document.getElementById('txtci').innerHTML=decifrado.toString(CryptoJS.enc.utf8);    
    //console.log("txtdecifrado: "+decifrado);

    var descifrado = CryptoJS.AES.decrypt(text, password);
    console.log("Esto es el descifrado tostring: " + descifrado.toString(CryptoJS.enc.Utf8));
    var decifradotxt=descifrado.toString(CryptoJS.enc.Utf8)
    console.log("Esto es el decifrado txt sin toS: " + decifradotxt)  
    document.getElementById('txtci').innerHTML=decifradotxt;
}

//funcin para descargar
function download(){
    var text = document.getElementById('txtci').innerHTML;
    let filename = "textocifrado.txt";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
    alert("Archivo descargado")
  }

  document.getElementById("Descargar").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    //var text = document.getElementById('txtci');
    //var filename = "hello.txt";    
    download();
}, false);

function decifrar(){
     var mensajeCifrado = document.getElementById('aa').innerHTML;
     var password = document.getElementById('passwordCi').innerHTML;
    // var mensajeCifrado2 = "dfdsfdsf";
    // var password2 = "qwertyuiopasdfgh";    
     console.log(mensajeCifrado);
     console.log(password); 
     var decifrado = CryptoJS.AES.decrypt(mensajeCifrado,password);
    // var decifrado = CryptoJS.AES.decrypt(mensajeCifrado2,password2);
    // document.getElementById('txtde').innerHTML=decifrado;   
    // console.log(decifrado);
    //var mensaje="6c8e5626457d52f49d096f660da09bc0416be9f708b94dee3fa18fdc76aa34c8";
    //var password ="qwertyuiopasdfgh";
   
    //var decifrado = CryptoJS.AES.decrypt(mensaje,password);
    document.getElementById("txtde").innerHTML=decifrado.toString(CryptoJS.enc.utf8);
}

