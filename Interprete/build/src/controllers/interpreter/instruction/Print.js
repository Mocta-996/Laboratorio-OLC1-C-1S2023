"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const Instruction_1 = require("../abstract/Instruction");
const PrintList_1 = require("../Reports/PrintList");
class Print extends Instruction_1.Instruction {
    constructor(line, column, expression) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const value = this.expression.execute(env); // value and type
        PrintList_1.printlist.push(value.value);
        console.log("desde consola:", value.value);
    }
}
exports.Print = Print;
//# sourceMappingURL=Print.js.map