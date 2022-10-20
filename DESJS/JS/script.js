async function loadFile(mensaje) {
    let text = await mensaje.text();
    let password = document.getElementById('clave').value;
    document.getElementById('txt').textContent = "Texto: "+text;

    console.log("Texto sin cifrar "+text);
    console.log("pass "+password);
    //let cifrado = CryptoJS.AES.encrypt(text,password);    
    
    //var cifrado = CryptoJS.DES.encrypt(mensaje, CryptoJS.enc.Utf8.parse (password),{                
    //    mode : CryptoJS.mode.ECB , padding : CryptoJS.pad.Pkcs7        
    //}).toString();
    let cifrado = CryptoJS.DES.encrypt(text,password);
    
    document.getElementById('txtci').innerHTML=cifrado;
}

async function loadFile2(mensaje) {
    let text = await mensaje.text();
    let password = document.getElementById('clave2').value;
    document.getElementById('txtcif').textContent = text;
    console.log("texto cifrado: "+text);
    console.log("password: "+password);
    //let decifrado = CryptoJS.AES.decrypt(text,password); 
    //var decifrado = CryptoJS.AES.decrypt(text, password);   
    //document.getElementById('txtci').innerHTML=decifrado.toString(CryptoJS.enc.utf8);    
    //console.log("txtdecifrado: "+decifrado);

    let descifrado = CryptoJS.DES.decrypt(text, password);
    //console.log("Q/ "+descifrado);NO FUNCIONA ASI
    console.log("Esto es el descifrado tostring: " + descifrado.toString(CryptoJS.enc.Utf8));
    let decifradotxt=descifrado.toString(CryptoJS.enc.Utf8);
    console.log("Esto es el decifrado txt sin toS: " + decifradotxt)  
    document.getElementById('txtdec').innerHTML=decifradotxt;
}

//funcin para descargar
function download2(){
    var text = document.getElementById('txtdec').innerHTML;
    let filename = "textodecifrado.txt";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
    alert("Archivo descargado")
  }

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

    document.getElementById("Descargar2").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    //var text = document.getElementById('txtci');
    //var filename = "hello.txt";    
    download();
}, false);
