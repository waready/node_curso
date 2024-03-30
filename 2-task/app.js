require('colors');

const {mostrarMenu, pausa} = require('./helpers/mensajes');
const { inquirerMenu } = require('./helpers/inquirer');

console.clear();

const main = async () =>{
    //console.log("hola mundo!")
   
    let opt = ''
    do {
        opt = await inquirerMenu();
        if( opt !== '0')
        await pausa();
    } while (opt !== '0' );
}


main();