/**vamos acrear una funcion recursiva que se encargue de mandar a llamar a la funcion como objeto en caso de que no se pueda ejecutar*/
var cesar = cesar || (function(){
    var proceso = function(txt,desp,action){
        var replace = (function(){
        //primero necesito una matriz del abecedario
        var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var l= abc.length;

        /*necesitamos una funcion que pueda obtener la posicion que va a venir por árte de la clave privada o desplazamiento*/
        return function(c){
            //necesitamos saber la posicion
            var i = abc.indexOf(c.toLowerCase());
            /*necesitamos saber donde estamos dentro de la matriz abc y como la vamois a a recorrer para el momento del cifrado*/
            if(i!=-1){
                //arroja -1 cuando algo no lo encuentra entonces si no es igual a -1 es porqeu si lo encontró
                //primero obtenemos la posicion para el desplazamineto
                var pos = i;
                //necesito sabe la operacion a realizaar
                if(action){
                    //cifrar hacia delante
                    pos+=desp;
                    //necesitamos definir como se va a mover
                    pos -= (pos>=1)?1:0;
                }else{
                    //descifra para atras
                    pos-=desp;
                    //movimiento
                    pos+=(pos<0)?1:0;
                }
                return abc[pos];
            }
            return c;
        };
    })();

    //tenemos que sabver que el texto este acorde a mi abecedario
    var re=(/([a-z])/ig);

    //necesitamos una funcion que se encargue de intercambio de las posiciones acorde a si coincide el texto a cifrar con la expresion regular
    return String(txt).replace(re, function(match){
        return replace(match);
    });

    };
    return{
        encode : function(txt,desp){
            return proceso(txt,desp,true);
        },
        decode : function(txt,desp){
            return proceso(txt,desp, false);
        }
    };

})();

function cifrar(){
    document.getElementById("resultadp").innerHTML=
    cesar.encode(document.getElementById("cadena").value, 3);
}
function cifrar(){
    document.getElementById("resultadp").innerHTML=
    cesar.decode(document.getElementById("cadena").value, 3);
}