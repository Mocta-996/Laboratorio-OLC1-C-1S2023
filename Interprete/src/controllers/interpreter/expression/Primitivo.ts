import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";

export class Primitivo extends Expression {
  constructor(
    line: number,
    column: number,
    private value: any,
    private tipo: Type
  ) {
    super(line, column);
  }

  // ejecuar el objeto
  // retorna un valor primivito

  public execute(): Return {
    switch (this.tipo) {
      case Type.INT:
        return { value: parseInt(this.value), type: Type.INT };
      case Type.DOUBLE:
        return { value: parseFloat(this.value), type: Type.DOUBLE };
      case Type.BOOLEAN:
        if (this.value.toString().toLowerCase() === "true") {
          return { value: true, type: Type.BOOLEAN };
        }
        return { value: false, type: Type.BOOLEAN };
      case Type.CHAR:
        return { value: this.value, type: Type.CHAR };
      case Type.STRING:
        return { value: this.value, type: Type.STRING };
      default:
        return { value: null, type: Type.NULL };
  }

}
}

