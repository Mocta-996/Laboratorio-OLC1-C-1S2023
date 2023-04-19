export class TablaSimbolos {

    constructor(public id:string, public tipo1: string, public ambito:string, public linea: number, public columna: number) {  
    }
}

export let ListaTabla:Array<TablaSimbolos> =[];