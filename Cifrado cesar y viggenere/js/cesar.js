var cesar = cesar || (function(){
    var proceso = function(txt, desp, action){
        var replace = (function(){
            //primero necesito tener la matriz del alfabeto
            //hay que recorrar que el cifrado lo hace caracter por caracter
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
                        'x', 'y', 'z'];
            var l = abc.length;

            //necesitamos obtener la posicion que va  a venir por parte 
            //de la llave privada

            return function(c){
                //vamos a saber la posicion
                var i = abc.indexOf(c.toLowerCase());
                //console.log(i);
                //necesitamos saber es donde estamos adentro de la matriz
                //como la vamos a recorrer y que pasa cuando llegue
                //al final?
                //alert(c);
                //alert(i);

                if(i != -1){
                    //primero obtenemos la posicion para el desp
                    var pos = i;
                    //que voy a hacer cifrar o descifrar
                    if(action){
                        //cifrar para adelante
                        pos += desp;
                        //como se va a mover
                        pos -= (pos >= l)?l:0;
                    }else{
                        //descifrar para atras
                        pos -= desp;
                        //movimiento
                        pos += (pos < 0)?l:0;
                    }
                    return abc[pos];

                }
                return c;
            };
        })();
        //tenemos que saber que el texto este acorde al abc
        var re = (/([a-z])/ig);
        //una funcion que se encargue del intercambio
        return String(txt).replace(re, function(match){
            return replace(match);
        });
        
    };

    return{
        encode : function(txt, desp){
            // console.log(txt);
            // console.log(desp);
            return proceso(txt, desp, true);
        },

        decode : function(txt, desp){
            console.log(txt);
            console.log(desp);
            return proceso(txt, desp, false);
        }
    };
})();

//funcion de cifrado

function cifrar(){
    var dez = parseInt(document.getElementById("desplazamiento").value);
    var texto = document.getElementById("texto").value;
    
    document.getElementById("resultado").innerHTML = cesar.encode(texto,dez);
    // cesar.encode(document.getElementById("texto").value, document.getElementById("desplazamiento"));
    
}

//funcion de descifrado
function descifrar(){
    var dez = parseInt(document.getElementById("desplazamiento").value);
    var texto = document.getElementById("texto").value;
    document.getElementById("resultado").innerHTML =cesar.decode(texto,dez);
}
