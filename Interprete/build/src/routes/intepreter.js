"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const interprete_controller_1 = require("../controllers/interprete.controller");
const router = express_1.default.Router();
//  controlador
router.get('/ping', interprete_controller_1.interpreteController.pong);
// interpretar codigo fuente
router.post('/interpretar', interprete_controller_1.interpreteController.interpretar);
exports.default = router;
//# sourceMappingURL=intepreter.js.map