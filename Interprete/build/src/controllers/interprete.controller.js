"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpreteController = void 0;
const PrintList_1 = require("./interpreter/Reports/PrintList");
const Environment_1 = require("./interpreter/abstract/Environment");
// creando una clase controlador
class InterpreteController {
    // metodo ping
    pong(req, res) {
        res.send("Pong interpreter controller OLC1");
    }
    // metodo para interpretar el codigo fuente
    interpretar(req, res) {
        // variable parser
        var parser = require("./interpreter/grammar");
        // variable codigo fuente
        const text = req.body.code;
        console.log("Codigo de entrada:  " + text);
        try {
            // parsear el codigo fuente
            const ast = parser.parse(text); //ast es el arbol de sintaxis abstracta
            try {
                PrintList_1.printlist.splice(0, PrintList_1.printlist.length);
                const globalEnv = new Environment_1.Environment(null);
                for (const inst of ast) {
                    inst.execute(globalEnv);
                }
                res.json({ consola: PrintList_1.printlist.join("\n"), errores: "ninguno" });
            }
            catch (error) {
                console.log(error);
                res.json({
                    consola: error,
                    errores: error,
                });
            }
        }
        catch (err) {
            console.log(err);
            res.json({
                consola: err,
                errores: err,
            });
        }
    }
}
exports.interpreteController = new InterpreteController();
//# sourceMappingURL=interprete.controller.js.map