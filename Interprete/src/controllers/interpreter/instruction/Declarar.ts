import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import {Expression} from '../abstract/Expression';
import { Type } from "../abstract/Return";


export class Declarar extends Instruction {
  private id: string;
  private tipo: Type;
  private valor: Expression | null;

  constructor(id: string, tipo: Type, valor: Expression | null, line:number, column:number) {
    super(line, column);
    this.id = id;
    this.tipo = tipo;
    this.valor = valor; // primitivo, llamada(), operacion aritmetica
    
  }

  public execute(env: Environment): any {
    if (this.valor != null) {
      const val = this.valor.execute(env);
      env.guardar(this.id, val.value, this.tipo, this.line, this.column);
    } else {
      // guardar los valores por defecto segun el tipo (ver el enunciado)
      env.guardar(this.id, null, this.tipo, this.line, this.column);
    }
  }


}