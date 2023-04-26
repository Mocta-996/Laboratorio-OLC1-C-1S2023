import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { printlist } from "../Reports/PrintList";
import { Environment } from "../abstract/Environment";

export class Print extends Instruction {
  constructor(
    line: number,
    column: number,
    private expression: Expression
  ) {
    super(line, column);
  }

  public execute(env:Environment): void {
    const value = this.expression.execute(env); // value and type
    printlist.push(value.value);
    console.log("desde consola:" ,value.value);
  }

  public drawAst(): { rama: string; nodo: string; } {
    // generar un id
    const id = Math.floor(Math.random() * (100-0)+0);
    // generar el nombre del nodo
    const nodoPrincipal = `nodoPrint${id.toString()}`;
    let ramaPrint = `${nodoPrincipal}[label="Print"];\n`
    const codigoRama:{rama:string, nodo:string} = this.expression.drawAst();
    ramaPrint += codigoRama.rama;
    ramaPrint += `${nodoPrincipal} -> ${codigoRama.nodo};\n`
    return {rama:ramaPrint, nodo:nodoPrincipal};
  }

}

