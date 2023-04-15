import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
export declare class Print extends Instruction {
    private expression;
    constructor(line: number, column: number, expression: Expression);
    execute(env: Environment): void;
}
