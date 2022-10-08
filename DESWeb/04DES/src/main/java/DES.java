/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author alumno
 * VAMOS A 
 * Las tablas de ´permutacion y cajas de sustitucion se van a cargar ´por parte del provedor 
 * de servicion para poder hacer tos¿dos esto vamoa a usar librerias crypto y segurity
 */
/*
import java.security.*;
//es para generar las claver y 
import javax.crypto.spec.*;
import javax.crypto.*;

import java.io.*;
public class DES {
    public static void main(String[] args)throws Exception{
        if(args.length != 1){
            mensajeAyuda();
            System.exit(1);
            /*
            Lo primero que debemos hacer es instalar una instancia del provedor de ti´po e sifrado, opara eso esta
             la parte d las librerias
            ??
            System.out.println("1: Generar las claves DES: ");
            
            //PARA GENERAR LA             CLAV DES VAMOS A OCUÁR C+LA V+CLASE GENERT
            
            KeyGenerator generadorDES = KeyGenerator.getIntance("DES");
             
           generadorDES.init(56);
           
           //vamos a generar la claves
           SecretKey clave = generadorDES.generateKey();
           //estamos generando las 16 subyleve
           
            System.out.println("La clave es; "+clave);
            /*
            Recordemos que en la cri´ptografia solo se ochupa bits o byts,
            todo lo que vamos a hacer es en binario
            
            La llave no se a generado
            ??
            
            mostrarBytes(clave.getEncoded());
            System.out.println("");
            /*
            Vamos a cifrar, para ello devbemos de aplicar los estandares que vimos en lcase
            Vamos a ocupar el PKCS, para ello tenemos que crear
            una instance del algoritmo des
            en el modo de cifrado
            
            algoritmno des
            modo KCB(ELECTRONIC CODE BOOK)
            RELLENO PKCS5
            ??
            
            System.out.println("2 cifrar con es y el archivo : "+args[0] + ", dejar el resuñtado en : "+args[0]+".cifrado");
            //Crear la instancia
            Cipher cifrado = Cipher.getInstance("DES/ECB/PKCS5Padding");
            
            cifrado.init(Cipher.ENCRYPT_MODE, clave);
            
            //El problema es como vamos aleer los bloques del mensaje
            
            byte[] buffer = new byte[1000];
            byte[] bufferCifrado;
            
            //generomos los archivos
            
            FileInputStream in = new FileInputStream(args[0]);
            FileInputStream out = new FileInputStream(args[0]+ ".cifrado");
            
            //letura
            
            int bytesLeidos = in.read(buffer,0,1000);
            while(bytesLeidos!=-1){
                //pasar el texto claro leido al cifrador
                bufferCifrado = cifrado.update(buffer,0,bytesLeidos);
                out.write(bufferCifrado);
                bytesLeidos= in.read();
                
                bufferCifrado = cifrado.doFinal();
                out.write(bufferCifrado);
                
            }
            
            
        }
        
    }
    
}
*/