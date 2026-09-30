//console.log(process.argv);
/* const estudiante = process.argv[2] || "Estudiante";

console.log(estudiante);
console.log(process.version);
console.log(process.platform); */

/------------------------------------------------------------/

const os = require('node:os');
const path = require('node:path');
const fs = require('node:fs');

// Datos del videojuego
const videojuego = {
    titulo: 'Minecraft',
    estudio: 'Mojang Studios',
    anio: 2011,
    plataformas: ['PC', 'PlayStation', 'Xbox'],
    multijugador: true
};

// Convertir plataformas en texto
const plataformasTexto = videojuego.plataformas.join(', ');

// Convertir multijugador en "Sí" o "No"
const multijugadorTexto = videojuego.multijugador ? 'Sí' : 'No';

// Información del sistema
const estudiante = process.argv[2] || 'Desconocido';
const versionNode = process.version;
const plataformaSistema = os.platform();

// Crear la ficha
const ficha = `
FICHA DE VIDEOJUEGO
===================
Estudiante: ${estudiante}
Node.js: ${versionNode}
Plataforma del sistema: ${plataformaSistema}
Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${multijugadorTexto}
`;

// Mostrar la ficha en la terminal
console.log(ficha);

// Crear la carpeta salida
const carpetaSalida = path.join(__dirname, 'salida');
fs.mkdirSync(carpetaSalida, { recursive: true });

// Construir la ruta del archivo
const rutaArchivo = path.join(carpetaSalida, 'ficha-videojuego.txt');

// Guardar la ficha
fs.writeFileSync(rutaArchivo, ficha, 'utf8');

// Informar la ruta generada
console.log(`Archivo generado en: ${rutaArchivo}`);