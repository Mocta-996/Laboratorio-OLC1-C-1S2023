/**
 * clase 3
 * OLC1 C 1S2023
 * @author Pilo Tuy
 */

package clase.pkg3;
import analizador.parser;
import analizador.scanner;
import arbol.Arbol;
import arbol.Nodo;

public class Clase3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        String entrada = "{\n" +
            "            // este es un comentario de una sola linea \n" +
            "            ER=digito* ;  \n" +
            "            ER=a|b|c ;  \n" +
            "<! -- este es un comentario de varias lineas \n" +
            "    compiladores 1 C 1s2023!> \n" +
            "}";
        interpretar(entrada);
    }

    // metodo de ejecucion 

    private static void interpretar(String entrada) {
        try {
            Nodo raiz = null;
            scanner scanner = new scanner(new java.io.StringReader(entrada));
            parser parser = new parser(scanner);
            parser.parse();
            System.out.println("Analisis finalizado");
            // generando el arbol
            raiz = parser.getRaiz();
            if(raiz == null){
                System.out.println("No fue posible generar el arbol de analisis sintactico");
            }else{
                Arbol arbol = new Arbol(raiz);
                arbol.GraficarSintactico();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    
}
