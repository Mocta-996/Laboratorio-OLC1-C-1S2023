/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,10],$V1=[1,11],$V2=[1,13],$V3=[1,14],$V4=[1,15],$V5=[1,16],$V6=[1,17],$V7=[1,18],$V8=[1,19],$V9=[1,20],$Va=[2,5,14,19,24,27,30,47,48,49,50,51],$Vb=[1,42],$Vc=[1,43],$Vd=[1,36],$Ve=[1,37],$Vf=[1,38],$Vg=[1,39],$Vh=[1,40],$Vi=[1,41],$Vj=[2,12],$Vk=[1,44],$Vl=[1,53],$Vm=[1,54],$Vn=[1,55],$Vo=[1,56],$Vp=[9,17,25,29,38,39,40],$Vq=[17,25],$Vr=[1,74],$Vs=[9,17,25,39,40];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DEFPRINT":7,"DECLARAR":8,"PTCOMA":9,"LLAMADAFUNCION":10,"GUARDARFUNCION":11,"FOR":12,"CONTROLIF":13,"RPRIN":14,"PARIZQ":15,"EXPRESION":16,"PARDER":17,"TIPO":18,"ID":19,"IGUAL":20,"STATEMENT":21,"PARAMETROS":22,"LLAVEIZQ":23,"LLAVEDER":24,"COMA":25,"PARAMETRO":26,"RFOR":27,"OPERACIONESUNARIOS":28,"MAS":29,"RIF":30,"CONTROLELSE":31,"RELSE":32,"PRIMITIVO":33,"ACCEDERVAR":34,"ARITMETICA":35,"RELACIONALES":36,"ARGUMENTOS":37,"MENOS":38,"MENORQUE":39,"MAYORQUE":40,"ENTERO":41,"DECIMAL":42,"CADENA":43,"CARACTER":44,"TRUE":45,"FALSE":46,"RENTERO":47,"RDOUBLE":48,"RSTRING":49,"RCHAR":50,"RBOOLEAN":51,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"PTCOMA",14:"RPRIN",15:"PARIZQ",17:"PARDER",19:"ID",20:"IGUAL",23:"LLAVEIZQ",24:"LLAVEDER",25:"COMA",27:"RFOR",29:"MAS",30:"RIF",32:"RELSE",38:"MENOS",39:"MENORQUE",40:"MAYORQUE",41:"ENTERO",42:"DECIMAL",43:"CADENA",44:"CARACTER",45:"TRUE",46:"FALSE",47:"RENTERO",48:"RDOUBLE",49:"RSTRING",50:"RCHAR",51:"RBOOLEAN"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,2],[6,2],[6,1],[6,1],[6,1],[6,2],[7,5],[8,2],[8,4],[11,5],[11,6],[21,3],[22,3],[22,1],[26,2],[12,9],[28,3],[13,6],[31,2],[31,2],[31,0],[16,1],[16,1],[16,1],[16,1],[10,3],[10,4],[37,3],[37,1],[35,3],[35,3],[35,2],[36,3],[36,3],[34,1],[33,1],[33,1],[33,1],[33,1],[33,1],[33,1],[18,1],[18,1],[18,1],[18,1],[18,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
 $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 3: case 18:
 this.$ = [$$[$0]]; 
break;
case 4: case 7: case 8: case 9: case 23: case 24: case 26: case 27: case 28: case 29:
 this.$ = $$[$0]; 
break;
case 5: case 6:
 this.$ = $$[$0-1]; 
break;
case 10:
   console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);
break;
case 11:
 this.$ = new Print(_$[$0-4].first_line, _$[$0-4].first_column,$$[$0-2]); 
break;
case 12:
 this.$ = new Declarar($$[$0],$$[$0-1],null,_$[$0-1].first_line, _$[$0-1].first_column ); 
break;
case 13:
 this.$ = new Declarar($$[$0-2],$$[$0-3],$$[$0],_$[$0-3].first_line, _$[$0-3].first_column ); 
break;
case 14:
 this.$ = new Funcion($$[$0-4],$$[$0-3],[],$$[$0],_$[$0-4].first_line, _$[$0-4].first_column ); 
break;
case 15:
 this.$ = new Funcion($$[$0-5],$$[$0-4],$$[$0-2],$$[$0],_$[$0-5].first_line, _$[$0-5].first_column ); 
break;
case 16:
 this.$ = new Statement($$[$0-1],_$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 17:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 19:
this.$ = new Parametros($$[$0-1],$$[$0],_$[$0-1].first_line, _$[$0-1].first_column);
break;
case 20:
 this.$ = new For($$[$0-6],$$[$0-4],$$[$0-2],$$[$0],_$[$0-8].first_line, _$[$0-8].first_column); 
break;
case 21:
 this.$ = new OperacionesUnarios($$[$0-2],TipoAritmetica.INCREMENTO,_$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 22:
 this.$ = new If($$[$0-3],$$[$0-1],$$[$0],_$[$0-5].first_line, _$[$0-5].first_column); 
break;
case 25:
 this.$ = null; 
break;
case 30:
 this.$ = new LlamadaFuncion($$[$0-2],[],_$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 31:
 this.$ = new LlamadaFuncion($$[$0-3],$$[$0-1],_$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 32:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2];
break;
case 33:
 this.$ = [$$[$0]];
break;
case 34:
 this.$ = new Aritmetica($$[$0-2],$$[$0],TipoAritmetica.SUMA,_$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 35:
 this.$ = new Aritmetica($$[$0-2],$$[$0],TipoAritmetica.RESTA,_$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 36:
 this.$ = new Aritmetica($$[$0],$$[$0],TipoAritmetica.UMENOS,_$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 37:
 this.$ = new Relacional($$[$0-2],$$[$0],TipoRelacional.MENORQUE,_$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 38:
 this.$ = new Relacional($$[$0-2],$$[$0],TipoRelacional.MAYORQUE,_$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 39:
 this.$ = new Acceso($$[$0],_$[$0].first_line, _$[$0].first_column); 
break;
case 40:
 this.$ = new Primitivo(_$[$0].first_line, _$[$0].first_column,$$[$0],Type.INT); 
break;
case 41:
 this.$ = new Primitivo(_$[$0].first_line, _$[$0].first_column,$$[$0],Type.DOUBLE); 
break;
case 42:
 this.$ = new Primitivo(_$[$0].first_line, _$[$0].first_column,$$[$0],Type.STRING);
break;
case 43:
 this.$ = new Primitivo(_$[$0].first_line, _$[$0].first_column,$$[$0],Type.CHAR); 
break;
case 44: case 45:
 this.$ = new Primitivo(_$[$0].first_line, _$[$0].first_column,$$[$0],Type.BOOLEAN); 
break;
case 46:
 this.$ = Type.INT; 
break;
case 47:
 this.$ = Type.DOUBLE; 
break;
case 48:
 this.$ = Type.STRING; 
break;
case 49:
 this.$ = Type.CHAR; 
break;
case 50:
 this.$ = Type.BOOLEAN; 
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:$V1,18:12,19:$V2,27:$V3,30:$V4,47:$V5,48:$V6,49:$V7,50:$V8,51:$V9},{1:[3]},{2:$V0,5:[1,21],6:22,7:4,8:5,10:6,11:7,12:8,13:9,14:$V1,18:12,19:$V2,27:$V3,30:$V4,47:$V5,48:$V6,49:$V7,50:$V8,51:$V9},o($Va,[2,3]),o($Va,[2,4]),{9:[1,23]},{9:[1,24]},o($Va,[2,7]),o($Va,[2,8]),o($Va,[2,9]),{9:[1,25]},{15:[1,26]},{19:[1,27]},{15:[1,28]},{15:[1,29]},{15:[1,30]},{19:[2,46]},{19:[2,47]},{19:[2,48]},{19:[2,49]},{19:[2,50]},{1:[2,1]},o($Va,[2,2]),o($Va,[2,5]),o($Va,[2,6]),o($Va,[2,10]),{16:31,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{9:$Vj,15:[1,45],20:$Vk},{16:48,17:[1,46],19:$Vb,33:32,34:33,35:34,36:35,37:47,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{8:49,18:50,47:$V5,48:$V6,49:$V7,50:$V8,51:$V9},{16:51,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{17:[1,52],29:$Vl,38:$Vm,39:$Vn,40:$Vo},o($Vp,[2,26]),o($Vp,[2,27]),o($Vp,[2,28]),o($Vp,[2,29]),o($Vp,[2,40]),o($Vp,[2,41]),o($Vp,[2,42]),o($Vp,[2,43]),o($Vp,[2,44]),o($Vp,[2,45]),o($Vp,[2,39]),{16:57,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{16:58,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{17:[1,59],18:62,22:60,26:61,47:$V5,48:$V6,49:$V7,50:$V8,51:$V9},{9:[2,30]},{17:[1,63],25:[1,64]},o($Vq,[2,33],{29:$Vl,38:$Vm,39:$Vn,40:$Vo}),{9:[1,65]},{19:[1,66]},{17:[1,67],29:$Vl,38:$Vm,39:$Vn,40:$Vo},{9:[1,68]},{16:69,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{16:70,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{16:71,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{16:72,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},o($Vp,[2,36]),{9:[2,13],29:$Vl,38:$Vm,39:$Vn,40:$Vo},{21:73,23:$Vr},{17:[1,75],25:[1,76]},o($Vq,[2,18]),{19:[1,77]},{9:[2,31]},{16:78,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{16:79,19:$Vb,33:32,34:33,35:34,36:35,38:$Vc,41:$Vd,42:$Ve,43:$Vf,44:$Vg,45:$Vh,46:$Vi},{9:$Vj,20:$Vk},{21:80,23:$Vr},o($Va,[2,11]),o($Vp,[2,34]),o($Vp,[2,35]),o($Vs,[2,37],{29:$Vl,38:$Vm}),o($Vs,[2,38],{29:$Vl,38:$Vm}),o($Va,[2,14]),{2:$V0,4:81,6:3,7:4,8:5,10:6,11:7,12:8,13:9,14:$V1,18:12,19:$V2,27:$V3,30:$V4,47:$V5,48:$V6,49:$V7,50:$V8,51:$V9},{21:82,23:$Vr},{18:62,26:83,47:$V5,48:$V6,49:$V7,50:$V8,51:$V9},o($Vq,[2,19]),o($Vq,[2,32],{29:$Vl,38:$Vm,39:$Vn,40:$Vo}),{9:[1,84],29:$Vl,38:$Vm,39:$Vn,40:$Vo},o($Va,[2,25],{31:85,32:[1,86]}),{2:$V0,6:22,7:4,8:5,10:6,11:7,12:8,13:9,14:$V1,18:12,19:$V2,24:[1,87],27:$V3,30:$V4,47:$V5,48:$V6,49:$V7,50:$V8,51:$V9},o($Va,[2,15]),o($Vq,[2,17]),{19:[1,89],28:88},o($Va,[2,22]),{13:91,21:90,23:$Vr,30:$V4},o([2,5,14,19,24,27,30,32,47,48,49,50,51],[2,16]),{17:[1,92]},{29:[1,93]},o($Va,[2,23]),o($Va,[2,24]),{21:94,23:$Vr},{29:[1,95]},o($Va,[2,20]),{17:[2,21]}],
defaultActions: {16:[2,46],17:[2,47],18:[2,48],19:[2,49],20:[2,50],21:[2,1],46:[2,30],63:[2,31],95:[2,21]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

  // importar tipos
  const {Type} = require('./abstract/Return');
  const {TipoAritmetica} = require('./utils/TipoAritmetica');
  const {TipoRelacional} = require('./utils/TipoRelacional');
  const {Primitivo} = require('./expression/Primitivo');
  const {Print} = require('./instruction/Print');
  const {Declarar} = require('./instruction/Declarar');
  const {Acceso} = require('./expression/Acceso');
  const {Aritmetica} = require('./expression/Aritmetica');
  const {Statement} = require('./instruction/Statement');
  const {Funcion} = require('./instruction/Funcion');
  const {Parametros} = require('./expression/Parametros');
  const {LlamadaFuncion} = require('./expression/LlamadaFuncion');
  const {Relacional} = require('./expression/Relacional');
  const {OperacionesUnarios} = require('./expression/OperacionesUnarios');
  const {For} = require('./instruction/For');
  const {If} = require('./instruction/If');


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 9;
break;
case 1:return 15;
break;
case 2:return 17;
break;
case 3:return 'PUNTO';
break;
case 4:return 'DOSPUNTOS';
break;
case 5:return 25;
break;
case 6:return 'CORIZR';
break;
case 7:return 'CORDER';
break;
case 8:return 23;
break;
case 9:return "LLAVEDER";
break;
case 10:return 'KLEENE';
break;
case 11:return 20;
break;
case 12:return 14;   // funcion de imprimir
break;
case 13:return 45;
break;
case 14:return 46;
break;
case 15:return 27;
break;
case 16:return 30;
break;
case 17:return 32;
break;
case 18:return 29;
break;
case 19:return 38;
break;
case 20:return 'POR';
break;
case 21:return 'DIVISION';
break;
case 22:return 'POTENCIA';
break;
case 23:return 'MODULO';
break;
case 24:return 39;
break;
case 25:return 40;
break;
case 26:return 47;
break;
case 27:return 49;
break;
case 28:return 50;
break;
case 29:return 51;
break;
case 30:return 48;
break;
case 31:
break;
case 32:
break;
case 33:
break;
case 34:
break;
case 35:return 19;
break;
case 36:return 42;
break;
case 37:return 41;
break;
case 38: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 44; 
break;
case 39:cadena="";this.begin("string");
break;
case 40:cadena+=yy_.yytext;
break;
case 41:cadena+="\"";
break;
case 42:cadena+="\n";
break;
case 43:cadena+="\t";
break;
case 44:cadena+="\\";
break;
case 45:cadena+="\'";
break;
case 46:yy_.yytext=cadena; this.popState(); return 43;
break;
case 47:return 5;
break;
case 48: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
break;
}
},
rules: [/^(?:;)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\.)/i,/^(?::)/i,/^(?:,)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\?)/i,/^(?:=)/i,/^(?:print\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:for\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\^)/i,/^(?:%)/i,/^(?:<)/i,/^(?:>)/i,/^(?:int\b)/i,/^(?:string\b)/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:double\b)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:(\/\/).*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:[a-zA-Z][a-zA-Z0-9_]*)/i,/^(?:[0-9]+(\.[0-9]+)\b)/i,/^(?:[0-9]+\b)/i,/^(?:'((\\')|[^\n\'])*')/i,/^(?:["])/i,/^(?:[^"\\]+)/i,/^(?:\\")/i,/^(?:\\n)/i,/^(?:\\t)/i,/^(?:\\\\)/i,/^(?:\\\\')/i,/^(?:["])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"string":{"rules":[40,41,42,43,44,45,46],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,47,48],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}