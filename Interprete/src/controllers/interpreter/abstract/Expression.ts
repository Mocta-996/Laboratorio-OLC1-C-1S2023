import {Return} from './Return';
export abstract class Expression {
    public line: number;
    public column: number;
    constructor(line: number, column: number) {
        this.line = line
        this.column = column
    }

    public abstract execute(): Return;

}
