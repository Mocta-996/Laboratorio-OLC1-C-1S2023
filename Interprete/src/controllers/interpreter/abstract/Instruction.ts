import { Environment } from "./Environment";

export abstract class Instruction{
  public line: number;
  public column: number;
  constructor(line: number, column: number) {
      this.line = line
      this.column = column
  }
  public abstract execute(env:Environment):any;

}
