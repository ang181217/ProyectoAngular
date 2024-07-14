/***************************************************************************************************
 * BROWSER POLYFILLS
 */

// Polyfills de ES6 para compatibilidad con navegadores antiguos.
import 'core-js/es/symbol';
import 'core-js/es/object';
import 'core-js/es/function';
import 'core-js/es/parse-int';
import 'core-js/es/parse-float';
import 'core-js/es/number';
import 'core-js/es/math';
import 'core-js/es/string';
import 'core-js/es/date';
import 'core-js/es/array';
import 'core-js/es/regexp';
import 'core-js/es/map';
import 'core-js/es/set';

// Importa estos polyfills si necesitas soporte para IE11 y navegadores más antiguos.
// import 'classlist.js';  // Ejecuta `npm install --save classlist.js`.
// import 'web-animations-js';  // Ejecuta `npm install --save web-animations-js`.

 /***************************************************************************************************
 * Zone JS es requerida por Angular.
 */
import 'zone.js';  // Incluido con Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Este archivo puede ser utilizado para incluir otros polyfills necesarios para tu aplicación.
 * Por ejemplo, puedes importar bibliotecas de terceros que necesitan polyfills.
 */
