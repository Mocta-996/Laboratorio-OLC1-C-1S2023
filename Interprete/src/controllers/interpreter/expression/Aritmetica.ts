import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { TablaSuma, TablaResta } from "../utils/TablaDominante";
import { TipoAritmetica } from "../utils/TipoAritmetica";

export class Aritmetica extends Expression {
  constructor(
    private izquierdo: Expression,
    private derecho: Expression,
    private tipoOperacion: TipoAritmetica,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment): Return {
    // verificar el tipo de operacion
    if (this.tipoOperacion == TipoAritmetica.SUMA) {
      // obtener los valores de  los operandos
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      // obtener el tipo de dato de los operandos
      const tipoDominante = TablaSuma[op1.type][op2.type];
      // verificar el tipo de dato
      switch (tipoDominante) {
        case Type.INT:
          // verificar si algun operando es de tipo boleano
          if (op1.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op1.value = op1.value ? 1 : 0;
          }
          if (op2.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op2.value = op2.value ? 1 : 0;
          }

          // verificar si algun operando es de tipo caracter
          if (op1.type == Type.CHAR) {
            // convertir el valor a entero
            op1.value = op1.value.charCodeAt(0);
          }
          if (op2.type == Type.CHAR) {
            // convertir el valor a entero
            op2.value = op2.value.charCodeAt(0);
          }
          return { value: op1.value + op2.value, type: Type.INT };
        // verifcar demas tipos de datos
      }
    } //  RESTA
    else if(this.tipoOperacion == TipoAritmetica.RESTA){
      // obtener los valores de  los operandos
      const op1 = this.izquierdo.execute(env);
      const op2 = this.derecho.execute(env);
      // obtener el tipo de dato de los operandos
      const tipoDominante = TablaResta[op1.type][op2.type];
      // verificar el tipo de dato
      switch (tipoDominante) {
        case Type.INT:
          // verificar si algun operando es de tipo boleano
          if (op1.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op1.value = op1.value ? 1 : 0;
          }
          if (op2.type == Type.BOOLEAN) {
            // convertir el valor a entero
            op2.value = op2.value ? 1 : 0;
          }
          // verificar si algun operando es de tipo caracter
          if (op1.type == Type.CHAR) {
            // convertir el valor a entero
            op1.value = op1.value.charCodeAt(0);
          }
          if (op2.type == Type.CHAR) {
            // convertir el valor a entero
            op2.value = op2.value.charCodeAt(0);
          }
          return { value: op1.value - op2.value, type: Type.INT };
        // verifcar demas tipos de datos
      }
    }//  UNARIO
    else if(this.tipoOperacion == TipoAritmetica.MENOSUNARIO){
      // obtener los valores de  los operandos
      const op2 = this.izquierdo.execute(env);
      // entero
      if(op2.type == Type.INT){
        return { value: -op2.value, type: Type.INT };
      }
      // doble
      else if(op2.type == Type.DOUBLE){
        return { value: -op2.value, type: Type.DOUBLE };
      }

    }
    return { value: null, type: Type.NULL };
  }
}
