# Servidor con Typescript 

#### _Maynor Octavio Piló Tuy_
#### _Ingeniería en Ciencias y Sistemas_


## Inicializar de un proyecto

```js
npm init -y
```

## Inicializar repositorio

```sh
git init
```

### Cración de archivos 
- .gitignore

### Configuración del archivo gitignore
Configurar de manera rapida el archivo .gitignore

- [Git igonre.io](https://www.toptal.com/developers/gitignore)

## Instalación de typescript
Flags
- -D : dependencias de desarrollo

```sh
npm install typescript -D
```

## Creación de tareas en el archivo package.json

Agregar la tarea de typescript
- tsc: transforma los ficheros de typescript a javascript

```json
"scripts": {
    "tsc": "tsc"
  },
```
## Inicializar typescript
flags
- -- -- init para referencial al comando tsc

```sh
npm run tsc -- --init
```


### Instalar Express
Dependencia para crear API's

```sh
npm install express -E
```


## Crear la carpeta source y el archivo index.ts
Esto para ordenar el codigo e inicializar el servidor

```sh
src/index.ts
```

### Instalar definiciones de tipos para Express 

```sh
npm install --save @types/express  -D
```

### Compilar el servidor
```sh
npm run tsc
```

### Levantar el servidor 
Agregar una tarea para levantar el servidor

```json
"scripts": {
    "start": "node build/index.js"
  },
```
con el comando 

```sh
npm start
```
### instalación de la herramienta  ts-node-dev
Dependencia que permite trabajar en modo desarrollo con typescript, escuchando los cambios que se realicen en el servidor
```sh
npm install ts-node-dev -D
```
### Reiniciar servidor
Agregar una tarea que permite ver los cambios realizados en el servidor sin necesidad de levantar nuevamente el servidor
```json
"scripts": {
    "dev": "ts-node-dev  src/index.ts"
  },
```
con el comando 

```sh
npm run dev
```

---
Una vez realizado esto, se instala Jison

Usando npm 
```sh
npm install jison 
```
Documentación oficial
- [Jison](https://gerhobbelt.github.io/jison/docs/)


