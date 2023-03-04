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


/*  ============================ Expresiones Regulares ============================  */
ENTERO  = [0-9]+   
DECIMAL = [0-9]+("."[  |0-9]+)?
LETRA   = [a-zA-ZÑñ]+
ID      = {LETRA}({LETRA}|{ENTERO}|"_")*
CADENA  = [\"][^\"\n]+[\"]
SPACE   = [\ \r\t\f\t]
ENTER   = \r|\n|\r\n
CARACTER = [^\r\n]

COMENTARIOLINEA = "//" {CARACTER}* {ENTER}?
COMENTARIOMULTI = "<!" [^/]~ "!>"

/*

*/
//simbolos

PAR_IZQ   = "("
PAR_DER   = ")"
LLAV_IZQ  = "{"
LLAV_DER  = "}" 
PTCOMA  = ";"
PORCENTAJE = "%"
IGUAL = "="
PUNTO = "."
OR = "|"
POR = "*"

//palabras reservadas
ER = "ER"


%%

<YYINITIAL> {ER}  {   return new Symbol(sym.ER, yyline, yycolumn,yytext());  }
<YYINITIAL> {PAR_IZQ}   {   return new Symbol(sym.PAR_IZQ, yyline, yycolumn,yytext());  }
<YYINITIAL> {PAR_DER}   {   return new Symbol(sym.PAR_DER, yyline, yycolumn,yytext());  }
<YYINITIAL> {LLAV_IZQ}   {   return new Symbol(sym.LLAV_IZQ, yyline, yycolumn,yytext());  }
<YYINITIAL> {LLAV_DER}   {   return new Symbol(sym.LLAV_DER, yyline, yycolumn,yytext());  }
<YYINITIAL> {PTCOMA}    {   return new Symbol(sym.PTCOMA, yyline, yycolumn,yytext());   }
<YYINITIAL> {PORCENTAJE}    {   return new Symbol(sym.PORCENTAJE, yyline, yycolumn,yytext());   }
<YYINITIAL> {IGUAL}       {   return new Symbol(sym.IGUAL, yyline, yycolumn,yytext());  }
<YYINITIAL> {PUNTO}     {   return new Symbol(sym.PUNTO, yyline, yycolumn,yytext());    }
<YYINITIAL> {POR}       {   return new Symbol(sym.POR, yyline, yycolumn,yytext());   }
<YYINITIAL> {OR}       {   return new Symbol(sym.OR, yyline, yycolumn,yytext());   }
<YYINITIAL> {ENTERO}    {   return new Symbol(sym.ENTERO, yyline, yycolumn,yytext());   }
<YYINITIAL> {DECIMAL}   {   return new Symbol(sym.DECIMAL, yyline, yycolumn,yytext());  }
<YYINITIAL> {ID}        {   return new Symbol(sym.ID, yyline, yycolumn,yytext());   }
<YYINITIAL> {CADENA}    {   return new Symbol(sym.CADENA, yyline, yycolumn,yytext());   }
<YYINITIAL> {COMENTARIOLINEA} { /*Comentarios de linea, ignorados*/ }
<YYINITIAL> {COMENTARIOMULTI} { /*Comentarios de linea, ignorados*/ }
<YYINITIAL> {SPACE}     { /*Espacios en blanco, ignorados*/ }
<YYINITIAL> {ENTER}     { /*Saltos de linea, ignorados*/}


<YYINITIAL> . {
        String errLex = "Error léxico : '"+yytext()+"' en la línea: "+(yyline+1)+" y columna: "+(yycolumn+1);
        System.out.println(errLex);
}

