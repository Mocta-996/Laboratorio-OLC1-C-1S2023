package arbol;
import java.util.ArrayList;

public class Nodo {
    public String token;
    public String lexema;
    public int id;
    public Nodo hijoIzq;
    public Nodo hijoDer;
    public int fila, column;
    public ArrayList<Nodo> hijos ;
    
    public Nodo(String token, String lexema, int fila, int column){
        this.lexema = lexema;
        this.token = token;
        this.hijos  = new ArrayList<Nodo>();
        this.fila = fila;
        this.column = column;
               
    }
    
    public void AddHijo(Nodo n){
        this.hijos.add(n);
    }
    
    
    public String getToken(){
        return token;
    }
}