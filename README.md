Trabajo práctico 01

Descripción

Este proyecto contiene dos programas realizados con Node.js para trabajar conceptos básicos del entorno de ejecución.

El archivo index.js crea una ficha de videojuego a partir de un objeto con sus datos. La ficha se muestra en la terminal y también se guarda en un archivo de texto dentro de la carpeta salida.

El archivo orden-event-loop.js permite observar el orden de ejecución del código principal y de una tarea programada con setTimeout.

*¿Cómo ejecutar?

-> Para ejecutar el programa de la ficha de videojuego:

node index.js

-> También se puede indicar el nombre del estudiante como argumento:

node index.js Vir

-> Para ejecutar el programa que muestra el orden del event loop:

node orden-event-loop.js

*Archivo generado

El programa index.js genera el archivo:

salida/ficha-videojuego.txt

La carpeta salida se crea automáticamente si no existe.

*Conceptos

1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?

JavaScript es el lenguaje de programación que utilizamos para escribir el código.

V8 es el motor que interpreta y ejecuta JavaScript. Fue desarrollado por Google y es utilizado, entre otros entornos, por Chrome y Node.js.

Node.js es un entorno de ejecución que utiliza V8 para ejecutar JavaScript fuera del navegador y agrega herramientas y APIs propias, como las relacionadas con archivos, rutas y el sistema operativo.

En resumen, JavaScript es el lenguaje, V8 es el motor que ejecuta el código y Node.js es el entorno que permite utilizar JavaScript fuera del navegador y proporciona funcionalidades adicionales.

2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?

Aunque se indique un tiempo de 0 milisegundos, el callback no se ejecuta inmediatamente.

setTimeout programa la función para que pueda ejecutarse después de que termine el código principal que se está ejecutando. Por eso, primero se muestran los mensajes que están directamente en el programa y después se ejecuta el callback del temporizador.

Por eso el orden es:

Comienza el programa
Termina el código principal
Se ejecuta la tarea programada

3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?

Una operación de I/O bloqueante detiene la ejecución del programa mientras espera que termine una operación, por ejemplo, leer un archivo.

Una operación no bloqueante permite que el programa continúe realizando otras tareas mientras espera que termine la operación de entrada o salida.

La diferencia principal es que el código bloqueante espera antes de continuar, mientras que el no bloqueante permite continuar con otras tareas.

4. ¿Qué responsabilidades cumplen node:path y node:fs en index.js?

node:path permite trabajar con rutas de archivos y carpetas de forma segura. En este proyecto se utiliza path.join() para construir la ruta de la carpeta salida y la ruta del archivo ficha-videojuego.txt.

node:fs permite trabajar con el sistema de archivos. En este proyecto se utiliza para crear la carpeta salida mediante fs.mkdirSync() y para guardar la ficha mediante fs.writeFileSync().

En resumen, node:path se utiliza para construir las rutas y node:fs para crear carpetas y escribir el archivo.