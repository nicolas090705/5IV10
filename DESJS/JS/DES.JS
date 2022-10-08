
const Cifrar = () => {    
    var mensaje = document.getElementById('visor').innerHTML;
    //llave
    var clave = document.getElementById('clave').value;    
    console.log(mensaje)
    if(clave!=null){
        //encriptado
        //alert("if(clave!=null)")
        var cifrado = CryptoJS.DES.encrypt(mensaje, CryptoJS.enc.Utf8.parse (clave),{                
            mode : CryptoJS.mode.ECB , padding : CryptoJS.pad.Pkcs7        
        }).toString();        
        document.getElementById('visor').innerHTML =
        //'<embed src="'+cifrado+'" width="500" height="100">;
        '<ul><li><p lang="en" class="auto">El codigo Cifrado es: '+cifrado+'</p></li></ul>';
        //'<p>Codigocifrado : '+cifrado+'</p>';
    }
    document.getElementById('file').value='';
    document.getElementById('clave').value='';
    return false;
    
}
//Validar el archivo y mostrarlo en pantalla
var viss ='';
const archivo = () =>{
    //archivoElegido
    var archivoInput = document.getElementById('file');
    var clave = document.getElementById('clave');
    
    //contenidoArchivoElegido
    var valor = archivoInput.value;
    //Expresion regular
    var expReg = /(.txt)$/i;

    if(!expReg.exec(valor) && clave!=null){
        alert('Ingrese un archivo de tipo txt');
        archivoInput.value = '';
        return false;
    }
    else{
        if(archivoInput.files && archivoInput.files[0]){
            //lector
            var ver = new FileReader();
            ver.onload = function(e){
                leerArchivo(archivoInput.files[0]);
                //document.getElementById("visor").innerHTML = '<embed src="'+e.target.result+'" width="500" height="100">';
                viss = e.target.result;
                console.log(viss);
            }
            ver.readAsDataURL(archivoInput.files[0]);
        }
    }
    Cifrar();
}

//cargarArchivoCifrar
/* */
var texto ="";
async function leerArchivo(file){
    texto = await file.text();
    document.getElementById('visor2').textContent = texto;
    console.log("texto de leerArchivo: "+texto);    
    document.getElementById('obtenerArchivo').textContent = texto;
}


function Decifrar(textoo){
    var textooo=textoo;
    var mensajeEncriptado = document.getElementById('visor2').innerHTML;
    var obtenerArchivo = document.getElementById('obtenerArchivo').innerHTML;    
    var llave = document.getElementById('clave2').value;
    
    console.log(mensajeEncriptado);
    console.log("obtenerArchivo"+obtenerArchivo);
    console.log(llave);
    console.log("La buena: "+textooo);

    if(llave == ''){

        alert('INGRESA UNA CLAVE ANTES DE ENCRIPTAR O DECENCRIPTAR');

    }
    else{
        
        var desencriptado = CryptoJS.DES.decrypt(textooo,CryptoJS.enc.Utf8.parse(llave), {            
            mode : CryptoJS.mode.ECB , padding: CryptoJS.pad.Pkcs7        
        }).toString(CryptoJS.enc.Utf8);
          alert("adentro del esle")
        document.getElementById('visor2').innerHTML ="texto: "+mensajeEncriptado;
        //"<h1>" +desencriptado+ "</h1>";
        // '<label>EL MENSAJE DECENCRIPTADO ES EL SIGUIENTE : </label>'+
         
        console.log("desencriptado: "+desencriptado);

    }
    document.getElementById('file2').value='';
    document.getElementById('clave2').value='';
    return false;

}

// LEER EL ARCHIVO A CIFRAR
async function cargarArchivoDecifrar(file){
    
    var texto = await file.text();
    document.getElementById('visor2').textContent = texto;
    console.log("texto de cargarArchivoDecifrar: "+texto);

    return texto;

}

// VALIDAR EL TIPO DE ARHCIVO A CIFRAR
const archivo2 = () =>{

    var archivoElegido = document.getElementById('file2');
    var contenidoArchivoElegido = archivoElegido.value;
    var extencion = /(.txt)$/i;

    if(!extencion.exec(contenidoArchivoElegido)){
        alert('SOLAMENTE INGRESA ARCHIVOS DE TIPO TXT');
        archivoElegido.value = '';
        return false;
    }
    else{
        /*if(archivoElegido.files && archivoElegido.files[0]){
            var lector = new FileReader();
            lector.onload = function(e){
                // cargarArchivoDecifrar(archivoElegido.files[0]);
                document.getElementById("visor2").innerHTML =
                '<embed src="'+e.target.result+'" width="500" height="100">';

                document.getElementById("obtenerArchivo").innerHTML =
                '<embed src="'+e.target.result+'" width="500" height="100">';
                console.log("Archivo2: "+document.getElementById("obtenerArchivo").innerHTML)
                 
            }
            lector.readAsDataURL(archivoElegido.files[0]);

        }
         */
        var texx="";
        if(archivoElegido.files && archivoElegido.files[0]){
            //lector
            var ver = new FileReader();
            ver.onload = function(e){
                var texx=(cargarArchivoDecifrar(archivoElegido.files[0]));
                //document.getElementById("visor").innerHTML = '<embed src="'+e.target.result+'" width="500" height="100">';        
                Decifrar(texx);
            }
            ver.readAsDataURL(archivoElegido.files[0]);
        }
       
    }
    

}