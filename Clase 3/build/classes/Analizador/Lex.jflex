package analizador;
import java_cup.runtime.Symbol;

%%

%{
    //Código de usuario
%}

%class scanner  // definir como trabajara el scanner 
%cup            // trabajar con cup 
%public         // tipo publico
%line           // conteo de lineas - linea por linea
%char           // caracter por caracter
%unicode        // tipo de codigicacion para que acepte la  ñ u otro caracter
%ignorecase     // case insensitive 


//simbolos

PAR_IZQ   = "("
PAR_DER   = ")"
COR_IZQ  = "["
COR_DER  = "]" 
PTCOMA  = ";"

MAS = "+"
MENOS = "-"
POR = "*"
DIV = "/"

//palabras reservadas
REVALUAR = "Evaluar"

//expresiones
ENTERO  = [0-9]+   
DECIMAL = [0-9]+("."[  |0-9]+)?
SPACE   = [\ \r\t\f\t]
ENTER   = [\ \n]

%%

<YYINITIAL> {REVALUAR}  {   return new Symbol(sym.REVALUAR, yyline, yycolumn,yytext());  }

<YYINITIAL> {PAR_IZQ}   {   return new Symbol(sym.PAR_IZQ, yyline, yycolumn,yytext());  }

<YYINITIAL> {PAR_DER}   {   return new Symbol(sym.PAR_DER, yyline, yycolumn,yytext());  }

<YYINITIAL> {COR_IZQ}   {   return new Symbol(sym.COR_IZQ, yyline, yycolumn,yytext());  }

<YYINITIAL> {COR_DER}   {   return new Symbol(sym.COR_DER, yyline, yycolumn,yytext());  }

<YYINITIAL> {PTCOMA}    {   return new Symbol(sym.PTCOMA, yyline, yycolumn,yytext());   }

<YYINITIAL> {MAS}       {   return new Symbol(sym.MAS, yyline, yycolumn,yytext());  }

<YYINITIAL> {MENOS}     {   return new Symbol(sym.MENOS, yyline, yycolumn,yytext());    }

<YYINITIAL> {POR}       {   return new Symbol(sym.POR, yyline, yycolumn,yytext());   }

<YYINITIAL> {DIV}       {   return new Symbol(sym.DIV, yyline, yycolumn,yytext());   }

<YYINITIAL> {ENTERO}    {   return new Symbol(sym.ENTERO, yyline, yycolumn,yytext());   }

<YYINITIAL> {DECIMAL}   {   return new Symbol(sym.DECIMAL, yyline, yycolumn,yytext());  }

<YYINITIAL> {SPACE}     { /*Espacios en blanco, ignorados*/ }
<YYINITIAL> {ENTER}     { /*Saltos de linea, ignorados*/}


<YYINITIAL> . {
        String errLex = "Error léxico : '"+yytext()+"' en la línea: "+(yyline+1)+" y columna: "+(yycolumn+1);
        System.out.println(errLex);
}

