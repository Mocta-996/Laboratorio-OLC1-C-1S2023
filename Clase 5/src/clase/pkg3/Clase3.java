/**
 * clase 3
 * OLC1 C 1S2023
 * @author Pilo Tuy
 */

package clase.pkg3;
import analizador.parser ;
import analizador.scanner ;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter;


public class Clase3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        //interpretar("Evaluar[5+5]  \n Evaluar[(5+5)*2]; \n Evaluar[10+10+(20/2)];\n Evaluar[10+10+(20)]; ");
        //graficar();
    }

    // metodo de ejecucion 

    private static void interpretar(String entrada) {
        try {
            
            scanner scanner = new scanner(new java.io.StringReader(entrada));
            parser parser = new parser(scanner);
            parser.parse();
            System.out.println("Analisis finalizado");

            // generar reporte de errores lexicos
            if (scanner.erroresLexicos.isEmpty()) {
                System.out.println("No se encontraron errores lexicos");
            } else {
                scanner.erroresLexicos.forEach((error) -> {
                    System.out.println(error.getTipo() + "| " + error.getDescripcion() + "| " + error.getLinea() + "| " + error.getColumna());
                });
            }
            
            // generar reporte de errores sintacticos
            if (parser.erroresSintacticos.isEmpty()) {
                System.out.println("No se encontraron errores sintacticos");
            } else {
                parser.erroresSintacticos.forEach((error) -> {
                    System.out.println(error.getTipo() + "| " + error.getDescripcion() + "| " + error.getLinea() + "| " + error.getColumna());
                });
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void graficar() {
        FileWriter fichero = null;
        try {
            fichero = new FileWriter("C:\\OLC1\\prueba.dot");
            PrintWriter pw = null;
            pw = new PrintWriter(fichero);
            String texto2 = "digraph G \n "+
            "{ "+
            "    node1; "+
            "    node2; "+
            "    node3; "+
            "    node1 -> node2 [label=\"linea1\"]; "+
            "    node1 -> node3 [label=\"linea2\"]; "+
            "    node2 -> node3 [label=\"linea3\"]; "+
            "}";
            pw.println(texto2);
            pw.close();
            try {
                ProcessBuilder proceso;
                proceso = new ProcessBuilder("dot", "-Tpng", "-o", "ssprueba.jpg", "C:\\OLC1\\prueba.dot");
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
