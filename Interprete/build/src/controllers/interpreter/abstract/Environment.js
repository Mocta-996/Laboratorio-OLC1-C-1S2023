"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const Symbol_1 = require("./Symbol");
const PrintList_1 = require("../Reports/PrintList");
class Environment {
    // constructor
    constructor(anterior) {
        this.anterior = anterior;
        this.variables = new Map(); //  mapa de variables
        this.variables = new Map();
    }
    // guardar una nueva variable
    guardar(id, valor, tipo, linea, columna) {
        // verificar el ambito
        let env = this;
        // verificar si la variable ya existe
        if (!env.variables.has(id.toLowerCase())) {
            // guardar la variable
            // guardar la variable en una tabla de simbolos para el reporte
            env.variables.set(id.toLowerCase(), new Symbol_1.Simbolo(valor, id, tipo));
        }
        else {
            PrintList_1.printlist.push("Error, La variable " + id + " ya existe en el entorno, linea " + linea + " y columna " + columna);
        }
    }
}
exports.Environment = Environment;
//# sourceMappingURL=Environment.js.map