/**
 * clase 3
 * OLC1 C 1S2023
 * @author Pilo Tuy
 */

package clase.pkg3;
import analizador.parser;
import analizador.scanner;


public class Clase3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        interpretar("Evaluar[2*7+3];");
    }

    // metodo de ejecucion 

    private static void interpretar(String entrada) {
        try {
            scanner scanner = new scanner(new java.io.StringReader(entrada));
            parser parser = new parser(scanner);
            parser.parse();
            System.out.println("Analisis finalizado");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    
}
