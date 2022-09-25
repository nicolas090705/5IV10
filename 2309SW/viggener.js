//parte del cesar

let key="";

///Biwnevenidso a interpretar codigos
var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',"ñ",'o','p','q','r','s','t','u','v','w','x','y','z'];
        
$(document).ready(function(){
//Funcion para poder cifrar con vinegger

$("#ci").click(function(){
    //para cifrar vamos a utilizar uns funcion de moduulo la cual es
    //y=(x+z)mod27

    //vamoa a traer los datos de la llava
    key=document.getElementById("llave").value;
    //Tenemos que verificar al llave
    key= key.replace(/ /g, "");

    //vamoa a traer los datos de la llava
    let mess=document.getElementById("mess").value;
    //Tenemos que verificar al llave
    mess= mess.replace(/ /g, "");

    let newMess="";
    let keyCompleta="";

    //Para aplicar el olgaritmo debemos crear un afunciona que se encarge
    //Las condiciones del mismo

    if(revision(mess,key)){
        //vamos primero por aplicar y obtenre la posicion 
        //de la longitud del mensaje y enmparejarlo contra la llave
        

        // Emparejar conforma a la posicion de czracter
        //obtenido el numero 
        for(var i=0; i < mess.lenght; i++){
            keyCompleta += key.charAt((i%Number(key.length)));
        }
        alert(keyCompleta);

        //tengo que recorrer el mensaje para obtener caracteres
        //
        //obteniendo la posicion 
        for(var i=0; i < mess.lenght; i++){
            //
            let charr = mess.charAt(i);

            //crear una funcion para obntener el valor de esa caracter

            let posm = getPosicion(charr);

            //Tambien aplicarlo a la llave
            charr=keyCompleta.charAt(i);
            //ahora si obtengo la posicion
            let posk = getPosicion(charr);

            //Tenemos que jejecutar ekl cifrado
            let newValores = cifrado(posm,posk);

            //nuevo mensaje
            newMess += abc[newValores];
        }

        //imprimir el resultado
        document.getElementById("rs").value = newMess;
        //fin de la revision
    }else{
        alert("No sirve ")
    }

});

$("#de").click(function(){
    //para cifrar vamos a utilizar uns funcion de moduulo la cual es
    //y=(x+z)mod27

    //vamoa a traer los datos de la llava
    key=document.getElementById("llave").value;
    //Tenemos que verificar al llave
    key= key.replace(/ /g, "");

    //vamoa a traer los datos de la llava
    let mess=document.getElementById("mess").value;
    //Tenemos que verificar al llave
    mess= mess.replace(/ /g, "");

    let newMess="";
    let keyCompleta="";

    //Para aplicar el olgaritmo debemos crear un afunciona que se encarge
    //Las condiciones del mismo

    if(revision(mess,key)){
        //vamos primero por aplicar y obtenre la posicion 
        //de la longitud del mensaje y enmparejarlo contra la llave
        

        // Emparejar conforma a la posicion de czracter
        //obtenido el numero 
        for(var i=0; i < mess.lenght; i++){
            keyCompleta += key.charAt((i%Number(key.length)));
        }
        alert(keyCompleta);

        //tengo que recorrer el mensaje para obtener caracteres
        //
        //obteniendo la posicion 
        for(var i=0; i < mess.lenght; i++){
            //
            let charr = mess.charAt(i);

            //crear una funcion para obntener el valor de esa caracter

            let posm = getPosicion(charr);

            //Tambien aplicarlo a la llave
            charr=keyCompleta.charAt(i);
            //ahora si obtengo la posicion
            let posk = getPosicion(charr);

            //Tenemos que jejecutar ekl cifrado
            let newValores = desifrar(posm,posk);

            //nuevo mensaje
            newMess += abc[newValores];
        }

        //imprimir el resultado
        document.getElementById("rs").value = newMess;
        //fin de la revision
    }else{
        alert("No sirve ")
    }

});
});


//Funcion de cambio o de cifrado
function cifrado(posm,posk){
    //aplicar la formula
    let y =(posm+posk)%27;
    
    return y;

}

//funcion de decifrado
function decifrar(posm,posk){
    //
    let val =0;
    if((posm-posk)>=0){
        val = (posm+posk)%27;
    }else{
        val = (posm-posk+27)%27
    }
    return val;
}

//la funcion de la posicion
function getPosicion(letra){
    let posicion = abc.indexOf(letra);
    return posicion;
}

//La funcion de la revision(se va encargar de rrevisr que los parametr)

function revision(mess,desp){
    //primero hay ve validar la entrada de los datos a partir de una exprecion regular
    var exprecion = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/;
    var aceptado = true;
    //empiezo a evaluar la exprecion
    if(!exprecion.test(mess)){
        alert("El texto que ingreso no ha sido aceptado,increse solo minusculas y evite numeros y simbolos");
        aceptado=false;
    }
    if(!exprecion.test(desp)){
        alert("La clave ingresada es incorrecta, no cumple con las normas de solo simular y no de usar numero y/o simbolos");
        aceptado=false;
    }
    if(desp.lenght> mess.lenght){
        alert("La clave no puede ser mayor que el mensaje")
        aceptado=false;
    }
    return aceptado;      
}