// importar librerias
import { Request, Response } from "express";
import { printlist } from "./interpreter/Reports/PrintList";
import { Environment } from "./interpreter/abstract/Environment";
// creando una clase controlador

class InterpreteController {

  // metodo ping
  public pong(req: Request, res: Response) {
    res.send("Pong interpreter controller OLC1");
  }

  // metodo para interpretar el codigo fuente
  public interpretar(req: Request, res: Response) {
    // variable parser
    var parser = require("./interpreter/grammar");

    // variable codigo fuente
    const text = req.body.code;
    console.log("Codigo de entrada:  " + text);

    try {
      // parsear el codigo fuente
      const ast = parser.parse(text); //ast es el arbol de sintaxis abstracta
      try {
        printlist.splice(0, printlist.length);
        
        const globalEnv = new Environment(null);

        for (const inst of ast){
            inst.execute(globalEnv);
        }
        res.json({ consola:printlist.join("\n"), errores: "ninguno" });

      } catch (error) {
        console.log(error);
        res.json({
          consola: error,
          errores: error,
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        consola: err,
        errores: err,
      });
    }
  }
}

export const interpreteController = new InterpreteController();
