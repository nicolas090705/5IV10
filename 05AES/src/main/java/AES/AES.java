/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package AES;

/**
 *
 * @author alumno
 */
import java.security.*;
import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import sun.misc.*;

public class AES {    
    //vamoa a generar una llave
    public static final byte[] keyvalue = new byte[]{
        /*puede ser de 3 tamaños 
        128 16 caracteres 9 rondas
        192 24 caracteres 11 rondas
        256 32 caracteres 13 rondas        
        */
        'q','w','e','r','t','y','u','i',
        'q','w','e','r','t','y','u','i',
        'q','w','e','r','t','y','u','i'
    };
    //vamoa crear los metidos para cifrar
    private static  final String instancia = "AES";
    
    public static String cifrar(String Data)throws Exception{
        /*pRA PODER CIFRAR DEBEMOS CREAR LS LÑÑAVES ÉRP VAMPS A CREAR IM ,ETP
        */
        /*vAMOS a ocupar un metodo */
        Key llave = generarLlave();
        
        //inicializamos le cifrado
        
        Cipher cifrado = Cipher.getInstance(instancia);
        cifrado.init(Cipher.ENCRYPT_MODE, llave);
        //vamos a obtener el mensaje y hay que transformarlo en bytes
        byte[] encValores = cifrado.doFinal(Data.getBytes());
        
        //tenemos u nproblema el cual es el formato para poder leerlo
        //tenemos que aplcar un formato BASE64
        System.out.println("Vslores sin formato" + encValores);
        //aplicamos formato
        String valoresencriptados = new BASE64Encoder().encode(encValores);
        System.out.println("Vslores con formato" + valoresencriptados);
        return valoresencriptados;
    }
    
    public static String decifrar(String valoresencriptados)throws Exception{
        /*pRA PODER CIFRAR DEBEMOS CREAR LS LÑÑAVES ÉRP VAMPS A CREAR IM ,ETP
        */
        /*vAMOS a ocupar un metodo */
        Key llave = generarLlave();
        
        //inicializamos le cifrado
        
        Cipher cifrado = Cipher.getInstance(instancia);
        cifrado.init(Cipher.DECRYPT_MODE, llave);
        //vamos a obtener el mensaje y hay que decodificarlo en bytes
        byte[] decodificadosValores = new BASE64Decoder().decodeBuffer(valoresencriptados);
        
        
        //aqui hay que transformarlos
        byte[] decValores = cifrado.doFinal(decodificadosValores);
        //tenemos u nproblema el cual es el formato para poder leerlo
        //tenemos que aplcar un formato BASE64
        System.out.println("Vslores sin formato" + decValores);
        
        String valoresDecifrados = new String(decValores);
        //String valoresencriptados = new BASE64Encoder().encode(encValores);
        System.out.println("Vslores con formato" + valoresDecifrados);
        return valoresDecifrados;
    }

    private static Key generarLlave() throws Exception {
        //vamos a ocupar lasllaves de aes de acuerdo a la clase SecretKeySpec 
        //esta nos genera todas las lllaves de subrinda
        
        Key llave = new SecretKeySpec(keyvalue,instancia);
        return llave;
        
    }
    
    
}
