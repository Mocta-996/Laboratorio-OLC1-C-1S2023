import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
export declare class Primitivo extends Expression {
    private value;
    private tipo;
    constructor(line: number, column: number, value: any, tipo: Type);
    execute(): Return;
}
