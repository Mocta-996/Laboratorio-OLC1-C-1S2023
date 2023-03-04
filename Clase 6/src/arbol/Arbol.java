
package arbol;

import java.awt.Desktop;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class Arbol {
    
    public Nodo raiz;
    
    public Arbol(Nodo raiz){
        this.raiz = raiz;
    }
    
    public void GraficarSintactico(){
        String grafica = "Digraph Arbol_Sintactico{\n\n" + GraficaNodos(this.raiz, "0") + "\n\n}";        
        GenerarDot(grafica);

    }
    
    public Nodo getRaiz(){
        return raiz;
    }
    
    private String GraficaNodos(Nodo nodo, String i){
        int k=0; 
        String r = "";
        String nodoTerm = nodo.token;
        nodoTerm = nodoTerm.replace("\"", "");
        r= "node" + i + "[label = \"" + nodoTerm + "\"];\n";
        
        for(int j =0 ; j<=nodo.hijos.size()-1; j++){
            r = r + "node" + i + " -> node" + i + k + "\n";
            r= r + GraficaNodos(nodo.hijos.get(j), ""+i+k);
            k++;
        }
        
        if( !(nodo.lexema.equals("")) ){
            String nodoToken = nodo.lexema;
            nodoToken = nodoToken.replace("\"", "");
            r += "node" + i + "c[label = \"" + nodoToken + "\"];\n";
            r += "node" + i + " -> node" + i + "c\n";
        }
        
        return r;
    }
    
    private void GenerarDot(String cadena){
        FileWriter fichero = null;
        try {
            fichero = new FileWriter("c:\\OLC1\\prueba.dot");
            PrintWriter pw = null;
            pw = new PrintWriter(fichero);
            System.out.println(cadena);
            pw.println(cadena);
            pw.close();
            try {

                ProcessBuilder proceso;
                proceso = new ProcessBuilder("dot", "-Tjpg", "-o", "prueba.jpg", "C:\\OLC1\\prueba.dot");
                proceso.start();

            } catch (Exception e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (null != fichero) {
                    fichero.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }
    
    
    
}
