import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";


export class LlamadaFuncion extends Expression {
    constructor(private id:string, private argumentos:Array<Expression>, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment):any {
        // ejecutar la funcion
        const funcion = env.getFuncion(this.id);
        if (funcion != null) {
            // crear un nuevo entorno
            const envFun = new Environment(env.getGlobal());
            //  guardar los parametros
            // verificar la cantidad de parametros
            if (funcion.parametros.length == this.argumentos.length) {
              // recorrer los parametros
              for (let i = 0; i < funcion.parametros.length; i++) {
                // guardar el parametro
                const valor = this.argumentos[i].execute(env);
                const param = funcion.parametros[i].execute(env); // se tiene el nombre y el tipo del parametro guardado
                // verificar el tipo
                if (valor.type == param.type) {
                  // guardar el parametro
                  envFun.guardar(param.value, valor.value, valor.type, this.line, this.column);
                } else {
                  console.log("Error, El parametro " + param.value + " no es del tipo " + param.type + ", linea " + this.line + " y columna " + this.column);
                }
              }
              // ejecutar el cuerpo de la funcion
              funcion.statement.execute(envFun);
            } else {
              console.log("Error, La funcion " + this.id + " no tiene la cantidad de parametros correcta, linea " + this.line + " y columna " + this.column);
            }
      
          } else {
            console.log("Error, La funcion " + this.id + " no existe, linea " + this.line + " y columna " + this.column);
          }
    }
}