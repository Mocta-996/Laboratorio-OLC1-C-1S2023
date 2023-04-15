import { Return, Type } from './Return';

export class Simbolo {
    public valor: any;
    public id: string;
    public type: Type;

    constructor(valor: any, id: string, type: Type) {
        this.valor = valor;
        this.id = id.toLowerCase();
        this.type = type;
    }
}