# TermUAB

Este proyecto ha sido creado por un alumno de enginieria informática de la UAB com trabajo de final de grado.
El objetivo de este proyecto es el de crear una página web para la gestión terminológica, y permitir a los alumnos
de la facultad de Traduccion e Interpretación de la UAB realizar sus proyectos de manera sencilla. También permitirá
a cualquier usuario externo a la UAB utilizar la aplicación para consultar o introducir nuevas terminologias.
A continuación se detallan diferentes aspectos importantes para la realización del proyecto.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Que cosas necesitas para instalar el software y como instalarlas:

* NODE JS: Lo primero que vamos a hacer es descargar NodeJs des de su página oficial [Descargar NodeJs](https://nodejs.org/es/).
  Actualmente la version utilizada es la 10.14.2, asi  que se recomienda descargar esa misma o una superior.
  Una vez instalado a través de su herramienta de instalación, vamos a comprobar que Node se ha instalado correctamente ejecutando el siguiente comando por consola:
  
  ```
  node -v
  ```
  
  La consola nos debería responder indicando la version de node instalada, en nuestro caso:
  
  ```
  v10.14.2
  ```
  
  Lo siguiente que vamos hacer es verificar la versión del gestor de paquetes NPM instalada, para esto usando la consola abierta ejecutamos el comando:
  
  ```
  npm -v
  ```
   
* MongoDB: La base de datos que utiliza el sistema es MongoDB, y se puede descargar en el siguiente enlace: [Descarga MonogDB](https://www.mongodb.com/download-center/community).
  Iniciar el instalador y seguir los pasos indicados. Y a continuación iniciar el servidor de MongoDB: mongod.
    
  ```
  D:\mongodb\bin\mongod.exe
  ```
  
  Para finalizar solo nos falta crear la base de datos con el siguiente comando de MongoDB:
  
  ```
  use termUAB-DB-Dev
  ```

### Instalación 🔧

A continuación se muestra paso a paso los comandos que debes ejecutar para tener un entorno de desarrollo ejecutandose.

Abrimos una consola y nos situamos en la raiz del proyecto descargado. Seguidamente procedemos a instalar todas las dependencias necesarias para el proyecto.

Para hacer eso es necesario utilizar npm o yarn, utilizando su comando de instalación

Para npm:
  ```
  npm install
  ```
  
Para yarn:
  ```
  yarn install
  ```
 
Si todo ha ido correctamente, el sistema estará listo para ser utilitzado.

## Deployment 📦

Para poner en marcha el proyecto y poderlo ver en local, es necesario utilizar dos consolas: Una para el servidor de
NodeJs y la otra para compilar los ficheros de ReactJS.

Para arrancar el servidor y que esté escuchando por el puerto 8080 por defecto, se tiene que ejecutar el siguiente comando:
  ```
  npm start
  ```
  
Para compilar los archivos JavaScript sin minificar para poder desarrollar comodamente, es necesario ejecutar el siguiente comando:
  ```
  npm run dev
  ```  
Si lo que queremos es minificar estos archivos para publicarlos en un entorno productivo, es necesario ejecutar el siguiente comando:
  ```
  npm run pro
  ```
  
Para los dos últimos comandos, npm nos generará 3 ficheros de salida que seran los que utilizará el navegador para ejecutar l'aplicación.
Estos archivos se encuentran en la raiz del proyecto en una carpeta llamada "\public".

## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas realizadas, se tiene que ejecutar el siguiente comando:
  ```
  npm run test
  ```

Si queremos ver el coverage de nuestras pruebas, solo tenemos que ejecutar el siguiente comando:
  ```
  npm run test:coverage
  ```
Esto nos generará una carpeta en la raiz del proyecto "\coverage", donde dentro se encuentra un fichero index.html que
muestra de manera clara los resultados de esta prueba.

## Construido con 🛠️

Herramientas utilizadas en el proyecto:

* [ReactJS](https://es.reactjs.org/docs/getting-started.html) - Una biblioteca de JavaScript para construir interfaces de usuario
* [NodeJS](https://nodejs.org/es/docs/) -  entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
* [Express](https://expressjs.com/es/starter/installing.html) - Infraestructura web rápida, minimalista y flexible para Node.js
* [MongoDB](https://www.mongodb.com/) - Usado para generar RSS

## Autores ✒️

* **Roger Gomà Roca** - *Trabajo de final de grado - Ingenieria Informática - UAB* - [rogergoma96](https://github.com/rogergoma96)
