<%-- 
    Document   : DES
    Created on : 4/10/2022, 07:48:33 AM
    Author     : nic01
--%>


<%@page import="java.io.FileInputStream"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.io.File"%>
<%@page import="java.io.FileOutputStream"%>
<%@page import="java.io.FileReader"%>
<%@page import="java.io.FileWriter"%>
<%@page import="java.io.IOException"%>
<%@page import="java.util.Scanner"%>

<%
//    String nombre="";
//    nombre = request.getParameter("clave");
    System.out.println("Archivo "+request.getParameter("file"));
    System.out.println("CLAVE "+request.getParameter("clave"));
    String linea=" ";
    try{
        //LEER EL ARCHIVO
        //File file = new File("C:\\TEMPORALES\\TextoNuevo.txt");
        FileReader fr=new FileReader(request.getParameter("file"));
        BufferedReader br = new BufferedReader(fr);
        
//        FileWriter fw = new FileWriter("C:\\TEMPORALES\\TextoNuevo2.txt");//escibe en un archivo
                            
        while(linea!=null){            
            linea=br.readLine();
            System.out.println(linea);
            if(linea!=null){
                for(  i=0; i<linea.length(); i++){
                fw.write(linea.charAt(i));
                }                
            }       
        }
        System.out.println();
        
//        fw.close(); 
        br.close();
        fr.close();
    } catch (IOException e) {
        System.out.println("Archivo no encontrado");       
    }    
    response.sendRedirect("index.html");
%>

<!DOCTYPE html>
<html lang="en">
<head>  
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DES</title>     
</head>
<body>    
</body>
</html>

