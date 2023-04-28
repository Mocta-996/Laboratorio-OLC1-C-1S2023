import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TipoAritmetica } from "../utils/TipoAritmetica";

export class OperacionesUnarios extends Expression {
  constructor(
    private id: string,
    private tipoOperacion: TipoAritmetica,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment): Return {
    // verificar el tipo de operacion
    if (this.tipoOperacion == TipoAritmetica.INCREMENTO) {
      // obtener los valor de la variable
      const valor = env.getVar(this.id);
      // verificar si la variable existe
      if (valor) {
        // verificar si es de tipo entero
        if (valor.type == Type.INT) {
          // incrementar el valor
          valor.valor = valor.valor + 1;
          // actualizar el valor de la variable
          env.modificar(this.id, valor.valor);
          // retornar el valor
          return { value: valor.valor, type: Type.INT };
        }
      }

    }

    return { value: null, type: Type.NULL };
  }


  public drawAst(): {rama:string, nodo:string} {
    return {rama:"", nodo: ""};
  }
}
