import {Return} from './Return';
import { Environment } from "./Environment";

export abstract class Expression {
    public line: number;
    public column: number;
    constructor(line: number, column: number) {
        this.line = line
        this.column = column
    }

    public abstract execute(env:Environment): Return;

}
