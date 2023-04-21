import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";

export class Statement extends Instruction {
    constructor(private body:Array<Instruction>, line:number, column:number){
        super(line, column);
    }

    public execute(env: Environment) {
        const newEnv = new Environment(env);

        for(const instrucciones of this.body){
            try{
                const ret = instrucciones.execute(newEnv);
                // si la instruccion es un return, retornar el valor
                if (ret != null && ret != undefined) {
                    return ret;
                }
            }catch(e){
                console.log("Errro al ejecutar instrucciones")
            }
        }
    }
}