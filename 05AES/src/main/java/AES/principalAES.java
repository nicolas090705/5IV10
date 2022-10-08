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
public class principalAES {
    public static void main(String[] args)throws Exception {
        String mensaje = "Habia uhna vez hun m¿patiito que decia mia miau  y tenia mucho sueño "
                + "y queria mimit,  pero era viernes y le iban a ejar tarea,"
                + "asi bien fea fea feota, de esas que descelas para"
                + "en modo reserca";
        
        String mensajeCifrado =  AES.cifrar(mensaje);
        String mensajeDecifrado =  AES.decifrar(mensajeCifrado);
        
        System.out.println("El mensaje a cifrar es: " + mensaje);
        System.out.println("El mensaje a cifrado es: " + mensajeCifrado);
        System.out.println("El mensaje a decifrado es: " + mensajeDecifrado);
        
        
    }
    
}
