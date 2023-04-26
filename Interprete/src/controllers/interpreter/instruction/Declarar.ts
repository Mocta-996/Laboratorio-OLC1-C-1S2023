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

  public drawAst(): { rama: string; nodo: string; } {
    // generar un id unico
    const id = Math.floor(Math.random() * (100 - 0) + 0);
    // generar el nodo
    const nodoPrincipal = `nodoDeclarar${id.toString()}`;
    const nodoIdPrincipal = `nodoId${id.toString()}`;
    // generar codigo ast de la expresion
    if (this.valor != null) {
      const codigoAST:{rama:string, nodo:string} = this.valor.drawAst();
      let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n `;
      // agregar el nodo del id
      ramaDeclarar += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
      // agregar la rama de la expresion
      ramaDeclarar += codigoAST.rama+ "\n";
      // conectar el nodo del id con el nodo principal
      ramaDeclarar += `${nodoPrincipal} -> ${nodoIdPrincipal};\n`;
      // Declarar -> var -> valor
      // conectar el nodo id con  el nodo de la expresion
      ramaDeclarar += `${nodoIdPrincipal} -> ${codigoAST.nodo};\n`;
      return { rama: ramaDeclarar, nodo: nodoPrincipal };

    }else {
      let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n `;
      // agregar el nodo del id
      ramaDeclarar += `${nodoIdPrincipal}[label="${this.id.toString()}"];\n`;
      // conectar el nodo del id con el nodo principal
      // Declarar -> var
      ramaDeclarar += `${nodoPrincipal} -> ${nodoIdPrincipal};\n`;
      return { rama: ramaDeclarar, nodo: nodoPrincipal };
    }
  }


}