// importar librerias
import { Request, Response } from "express";
import { printlist } from "./interpreter/Reports/PrintList";
import { Environment } from "./interpreter/abstract/Environment";
import { Funcion } from "./interpreter/instruction/Funcion";
import { Declarar } from "./interpreter/instruction/Declarar";
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
        // primera pasada del parser
        // declaraciones de variables, metodos,funciones, listas, vectores, etc

        for (const inst of ast){
          if(inst instanceof Declarar){
            //console.log("funcion encontrada");
            inst.execute(globalEnv);
          }else if(inst instanceof Funcion){
            inst.execute(globalEnv);
          }
        }
        

        // seguna pasada para el main
        /*for (const inst of ast){
          if(inst instanceof Main){
            inst.execute(globalEnv);
          }
        }*/
        
        /*for (const inst of ast){
            inst.execute(globalEnv);
        }*/

          //obtener el ast
          let drawast = `
          digraph G{
              nodoPrincipal[label="AST"];\n
          `;
          for (const inst of ast) {
            const dAst = inst.drawAst();
            drawast += `${dAst.rama}\n`;
            drawast += `nodoPrincipal -> ${dAst.nodo};`;
          }

          drawast += "\n}";


        res.json({ consola:printlist.join("\n"), errores: "ninguno", ast: drawast });

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
