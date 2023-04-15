# Variables locales
_Una variable solo está disponible dentro de la región en la cual es creada._

Son variables que son declaradas dentro de una función o un bloque de código y pueden solo pueden ser usadas dentro de la misma.

```python
def varLocal():
  x = 10
  print(x) # se reconoce la variable x
  def inner_func():
        print(x)
  inner_func()

print(x) # no se reconoce la variable x
varLocal()
```

_Es importante tener en cuenta que sucede cuando una función está dentro de una función. Como se explica arriba, la variable x no está disponible fuera de la función varLocal(), sin embargo, es importante tener presente que la variable x si estará disponible para todas las funciones que estén dentro de la función varLocal()._


# Variables globales

Una variable creada en el cuerpo principal de un programa es una variable global. Esta variable pertenece al scope o al alcance global, es decir, que están disponibles para cualquier scope o región del programa - tanto para el global como para el local.

```python
x = 10   # variable que puede ser accedida desde cualquier entorno

def func_one():
    print(x)

func_one()

print(x)
#resultado:
#10
#10
```

_Un programa puede tener el mismo nombre para una variable local y una variable global pero tomará preferencia la variable local dentro de la función_
```python
x = 10

def func_one():
    x = 20
    print(x)

func_one()

print(x)

#resultado:
#20
#10

```


```java
// variables globales
string hola = "hola";
string compiladores = "compiladores";

void saludo(){
  // variables locales
  int a = 1;
  if (a == 1) {
    print(hola +" "+ compiladores);
    // resultado: hola compiladores
  }
  else{
    string nuevoSaludo = "hola mundo";
    print(nuevo saludo);
  }

}

saludo();
```

- [python online](https://www.programiz.com/python-programming/online-compiler/)
