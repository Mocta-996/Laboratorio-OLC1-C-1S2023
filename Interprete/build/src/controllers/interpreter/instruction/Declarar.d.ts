import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from '../abstract/Expression';
import { Type } from "../abstract/Return";
export declare class Declarar extends Instruction {
    private id;
    private tipo;
    private valor;
    constructor(id: string, tipo: Type, valor: Expression | null, line: number, column: number);
    execute(env: Environment): any;
}
