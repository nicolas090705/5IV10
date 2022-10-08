
var mensaje="Hania una vez unapatito que decia miau miau , pero no lo ejaban y el chillaba y tronhon gente fin de la historia";

var password ="qwertyuiopasdfgh";

//Ahor avamos a cifrar

var cifrado = CryptoJS.AES.encrypt(mensaje,password);

var decifrado = CryptoJS.AES.decrypt(cifrado,password);

document.getElementById("demo00").innerHTML=mensaje;
document.getElementById("demo01").innerHTML=cifrado;
document.getElementById("demo02").innerHTML=decifrado;
document.getElementById("demo03").innerHTML=decifrado.toString(CryptoJS.enc.utf8);