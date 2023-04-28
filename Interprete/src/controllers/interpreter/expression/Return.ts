import { Expression } from "../abstract/Expression";
import { Return, Type } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

// return 5;
export class ReturnExpression extends Expression {
    constructor(private value:Expression, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment):Return {
        if(this.value != null && this.value != undefined){
            const value = this.value.execute(env);
            return {value:value.value, type: Type.RETURN};
        }
        return {value:null, type: Type.RETURN};

    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo: ""};
    }

}