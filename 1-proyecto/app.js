
const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

//const base = 7;
//console.log(process.argv);
//console.log(argv);

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');


crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow))
.catch(err => console.log(err));