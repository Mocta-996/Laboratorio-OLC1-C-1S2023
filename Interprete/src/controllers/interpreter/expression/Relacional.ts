import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TipoRelacional} from "../utils/TipoRelacional";

export class Relacional extends Expression {
  constructor(
    private izquierdo: Expression,
    private derecho: Expression,
    private tipoOperacion: TipoRelacional,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment): Return {
    // obtener los valores de los operandos
    const op1 = this.izquierdo.execute(env);
    const op2 = this.derecho.execute(env);

    switch (this.tipoOperacion) {
        case TipoRelacional.MAYORQUE:
            return { value: op1.value > op2.value, type: Type.BOOLEAN };
        case TipoRelacional.MENORQUE:
            return { value: op1.value < op2.value, type: Type.BOOLEAN };
        default:
            return { value: null, type: Type.NULL };
    }
}
   
   
  public drawAst(): { rama: string; nodo: string; } {
    return {rama:"", nodo:""};
  }
}
