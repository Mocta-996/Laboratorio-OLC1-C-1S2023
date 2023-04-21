import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Parametros extends Expression {
    constructor(
      private tipo: Type,
      private id: string,
      line: number,
      column: number
    ) {
      super(line, column);
    }
  
    public execute(env: Environment): Return {
      // verificar el parametro
      return { value: this.id, type: this.tipo };
    }
  }