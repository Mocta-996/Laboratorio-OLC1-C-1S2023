/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Errores;

/**
 *
 * @author Pilo Tuy
 */
public class Excepcion {
    private String tipo;
    private String descripcion;
    private String linea;
    private String columna;

  

    public Excepcion(String tipo, String descripcion, String linea, String columna) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = columna;
    }
    
    public String getTipo() {
        return tipo;
    }

    public String getDescripcion(){
        return descripcion;
    }

    public String getLinea() {
        return linea;
    }

    public String getColumna() {
        return columna;
    }
    
}
