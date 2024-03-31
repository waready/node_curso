require('colors');

//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const Tarea  = require('./modules/tarea');
const Tareas = require('./modules/tareas');

console.clear();

const main = async () =>{
    //console.log("hola mundo!")
   
    let opt = ''
    do {
        //opt = await inquirerMenu();
        //console.log({opt});
        
        const tareas = new Tareas();
        const tarea  = new Tarea('Comprar Comida');

        tareas._listado[1] = tarea;

        console.log(tareas);    

        if( opt !== '0')
        await pause();
    } while (opt !== '0' );
}

main();