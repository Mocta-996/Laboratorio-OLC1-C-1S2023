import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { printlist } from "../Reports/PrintList";

export class Print extends Instruction {
  constructor(
    line: number,
    column: number,
    private expression: Expression
  ) {
    super(line, column);
  }

  public execute(): void {
    const value = this.expression.execute(); // value and type
    printlist.push(value.value);
    console.log("desde consola:" ,value.value);
  }

}

