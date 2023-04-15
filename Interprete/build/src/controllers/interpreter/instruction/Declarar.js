"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declarar = void 0;
const Instruction_1 = require("../abstract/Instruction");
class Declarar extends Instruction_1.Instruction {
    constructor(id, tipo, valor, line, column) {
        super(line, column);
        this.id = id;
        this.tipo = tipo;
        this.valor = valor; // primitivo, llamada(), operacion aritmetica
    }
    execute(env) {
        if (this.valor != null) {
            const val = this.valor.execute(env);
            env.guardar(this.id, val.value, this.tipo, this.line, this.column);
        }
        else {
            // guardar los valores por defecto segun el tipo (ver el enunciado)
            env.guardar(this.id, null, this.tipo, this.line, this.column);
        }
    }
}
exports.Declarar = Declarar;
//# sourceMappingURL=Declarar.js.map