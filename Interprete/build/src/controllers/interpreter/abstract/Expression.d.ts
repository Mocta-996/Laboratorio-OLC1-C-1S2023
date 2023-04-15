import { Return } from './Return';
import { Environment } from "./Environment";
export declare abstract class Expression {
    line: number;
    column: number;
    constructor(line: number, column: number);
    abstract execute(env: Environment): Return;
}
