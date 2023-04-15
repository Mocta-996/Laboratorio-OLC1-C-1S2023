import { Type } from "./Return";
export declare class Environment {
    private anterior;
    private variables;
    constructor(anterior: Environment | null);
    guardar(id: string, valor: any, tipo: Type, linea: number, columna: number): void;
}
