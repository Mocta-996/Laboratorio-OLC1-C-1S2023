import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Type } from "../abstract/Return";

export class If extends Instruction {
    constructor(private condicion:Expression, private statementIf:Instruction,private stamentElse :Instruction |null ,linea : number, columna: number){
        super(linea, columna);
    }

    public execute(env: Environment) {
        // obtener el  valor  de la condicion

        const condicion = this.condicion.execute(env); 
        if(condicion.type == Type.BOOLEAN){
            // si verdadero
            if(condicion.value){
                this.statementIf.execute(env);
            }else {
                if(this.stamentElse != null){
                    this.stamentElse.execute(env);
                }
            }

        }
    
    }

    public drawAst(): { rama: string; nodo: string; } {
        return {rama:"", nodo:""};
    }


}
