/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package clase.pkg7;
import analizador.parser ;
import analizador.scanner ;
import java.io.BufferedReader;
import java.io.FileReader;
/**
 *
 * @author Pilo Tuy
 */
public class Clase7 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        interpretar("entrada.txt");
    }
    
    private static void interpretar(String entrada) {
        try {
            
            scanner scanner = new scanner(new BufferedReader(new FileReader(entrada)));
            parser parser = new parser(scanner);
            parser.parse();
            System.out.println("Analisis finalizado");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
