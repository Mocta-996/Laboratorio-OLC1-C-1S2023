import { Simbolo } from "./Symbol";
import { Type } from "./Return";
import { printlist } from "../Reports/PrintList";
import { ListaTabla,TablaSimbolos } from "../Reports/TablaSimbolos";

export class Environment {
    private variables = new Map<string, Simbolo>();   //  mapa de variables
   

   
  
    // constructor
    constructor(private anterior: Environment | null) {
      this.variables = new Map<string, Simbolo>();
      
    }
  
    // guardar una nueva variable
    public guardar(id: string, valor: any , tipo: Type,linea:number,columna:number)  {
      // verificar el ambito
      let env: Environment | null = this;
  
      // verificar si la variable ya existe
      if (!env.variables.has(id.toLowerCase())) {
        // guardar la variable
        // guardar la variable en una tabla de simbolos para el reporte
        env.variables.set(id.toLowerCase(), new Simbolo(valor, id, tipo));
      }else {
        printlist.push("Error, La variable "+id+" ya existe en el entorno, linea "+linea+" y columna "+columna);
      }
  
    }

    // obtener una variable
    public getVar(id: string): Simbolo | null { 
      // verificar el ambito
      let env: Environment | null = this;

      // buscar la variable en el entorno actual
      while (env != null) {
        // verificar si la variable existe
       if(env.variables.has(id.toLowerCase())){
        return env.variables.get(id.toLowerCase())!;
       }
        // buscar en el entorno anterior
        env = env.anterior;
      }  
      return null;  
    }
    
  

  }
  
