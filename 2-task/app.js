require('colors');

const { guardarDatos, leerDatos } = require('./helpers/guardar');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const { inquirerMenu, pause, leerInput, listadoTareasBorrar, confirmar, mostrarTareasCheck } = require('./helpers/inquirer');
const Tarea  = require('./modules/tarea');
const Tareas = require('./modules/tareas');

console.clear();

const main = async () =>{
    //console.log("hola mundo!")
   
    let opt = ''
    const tareas = new Tareas();

    const tareasDB = leerDatos();

    if(tareasDB){
        tareas.cargarTareasFromArray( tareasDB )
    }

    do {
        opt = await inquirerMenu();
        //console.log({opt});
        switch(opt){
            case '1':
                const decs = await leerInput('Descripcion: ');
                tareas.crearTarea(decs);
                break;
            case '2':
                tareas.listarTareas();
                break;
            case '3':
                tareas.listarPenditesCompletadas();
                break;
            case '4':
                tareas.listarPenditesCompletadas(false);
                break;
            case '5':
                const ids = await mostrarTareasCheck(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr);
                if(id !==0){
                    const confirm = await confirmar('¿Está Seguro?');
                    if(confirm){
                        tareas.borrarTareas(id)
                        console.log('Tarea Borrada')
                    }
                }
                break;
            default:
                break;
        }

        guardarDatos(tareas.listadoArr)
        if(opt !== '0')
        await pause();
    } while (opt !== '0' );
}

main();