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
LETRA   = [a-zA-ZÑñ]
ID      = {LETRA}({LETRA}|{ENTERO}|"_")*
CADENA  = [\"][^\"\n]+[\"]
SPACE   = [\ \r\t\f\t]
ENTER   = \r|\n|\r\n
CARACTER = [^\r\n]
COMENTARIOLINEA = "//" {CARACTER}* {ENTER}?
COMENTARIOMULTI = "<!" [^/]~ "!>"
SALTO_LINEA = \\n
COMILLA_SIMPLE = \\'
COMILLA_DOBLE = \\\"
ASCII =[!-+] 

//simbolos

PAR_IZQ     = "("
PAR_DER     = ")"
LLAV_IZQ    = "{"
LLAV_DER    = "}" 
GUION       = "-"
MAYOR_QUE   = ">"
PTCOMA      = ";"
COMA        = ","
DOSPUNTOS   = ":"
DPORCENTAJE = "%%"
VIRGULILLA  = "~"
IGUAL       = "="
CONCATENACION = "."
OR          = "|"
KLEENE      = "*"
POSITIVA    = "+"
OPCIONAL    = "?"


//palabras reservadas
RW_CONJ = "CONJ"


%%

<YYINITIAL> {RW_CONJ}       {   return new Symbol(sym.RW_CONJ, yyline, yycolumn,yytext());  }
<YYINITIAL> {PAR_IZQ}       {   return new Symbol(sym.PAR_IZQ, yyline, yycolumn,yytext());  }
<YYINITIAL> {PAR_DER}       {   return new Symbol(sym.PAR_DER, yyline, yycolumn,yytext());  }
<YYINITIAL> {LLAV_IZQ}      {   return new Symbol(sym.LLAV_IZQ, yyline, yycolumn,yytext());  }
<YYINITIAL> {LLAV_DER}      {   return new Symbol(sym.LLAV_DER, yyline, yycolumn,yytext());  }
<YYINITIAL> {GUION}         {   return new Symbol(sym.GUION, yyline, yycolumn,yytext());  }
<YYINITIAL> {MAYOR_QUE}     {   return new Symbol(sym.MAYOR_QUE, yyline, yycolumn,yytext());  }
<YYINITIAL> {PTCOMA}        {   return new Symbol(sym.PTCOMA, yyline, yycolumn,yytext());   }
<YYINITIAL> {COMA}          {   return new Symbol(sym.COMA, yyline, yycolumn,yytext());   }
<YYINITIAL> {DOSPUNTOS}     {   return new Symbol(sym.DOSPUNTOS, yyline, yycolumn,yytext());   }
<YYINITIAL> {DPORCENTAJE}   {   return new Symbol(sym.DPORCENTAJE, yyline, yycolumn,yytext());}
<YYINITIAL> {VIRGULILLA}    {   return new Symbol(sym.VIRGULILLA, yyline, yycolumn,yytext());   }
<YYINITIAL> {IGUAL}         {   return new Symbol(sym.IGUAL, yyline, yycolumn,yytext());  }
<YYINITIAL> {CONCATENACION} {   return new Symbol(sym.CONCATENACION, yyline, yycolumn,yytext());}
<YYINITIAL> {OR}            {   return new Symbol(sym.OR, yyline, yycolumn,yytext());   }
<YYINITIAL> {KLEENE}        {   return new Symbol(sym.KLEENE, yyline, yycolumn,yytext());   }
<YYINITIAL> {POSITIVA}      {   return new Symbol(sym.POSITIVA, yyline, yycolumn,yytext());   }
<YYINITIAL> {OPCIONAL}  {   return new Symbol(sym.OPCIONAL, yyline, yycolumn,yytext());   }
<YYINITIAL> {SALTO_LINEA}   {   return new Symbol(sym.SALTO_LINEA, yyline, yycolumn,yytext());   }
<YYINITIAL> {COMILLA_SIMPLE} {   return new Symbol(sym.COMILLA_SIMPLE, yyline, yycolumn,yytext());   }
<YYINITIAL> {COMILLA_DOBLE} {   return new Symbol(sym.COMILLA_DOBLE, yyline, yycolumn,yytext());   }
<YYINITIAL> {ASCII}         {   return new Symbol(sym.ASCII, yyline, yycolumn,yytext());   }
<YYINITIAL> {ENTERO}        {   return new Symbol(sym.ENTERO, yyline, yycolumn,yytext());   }
<YYINITIAL> {DECIMAL}       {   return new Symbol(sym.DECIMAL, yyline, yycolumn,yytext());  }
<YYINITIAL> {LETRA}         {   return new Symbol(sym.LETRA, yyline, yycolumn,yytext());   }
<YYINITIAL> {ID}            {   return new Symbol(sym.ID, yyline, yycolumn,yytext());   }
<YYINITIAL> {CADENA}        {   return new Symbol(sym.CADENA, yyline, yycolumn,yytext());   }
<YYINITIAL> {COMENTARIOLINEA}   { /*Comentarios de linea, ignorados*/ }
<YYINITIAL> {COMENTARIOMULTI}   { /*Comentarios de linea, ignorados*/ }
<YYINITIAL> {SPACE}             { /*Espacios en blanco, ignorados*/ }
<YYINITIAL> {ENTER}             { /*Saltos de linea, ignorados*/}


<YYINITIAL> . {
        String errLex = "Error léxico : '"+yytext()+"' en la línea: "+(yyline+1)+" y columna: "+(yycolumn+1);
        System.out.println(errLex);
}