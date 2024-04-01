const inquirer = require('inquirer');
require("colors");

const menuOpts = [
    {
        type:"list",
        name:"opcion",
        message:"¿Qué decea hacer?",
        choices:[
            {
                value: '1',
                name: `${'1'.green}. Crear Tarea`
            },
            {
                value: '2',
                name: `${'2'.green}. Listar Tarea`
            },
            {
                value: '3',
                name: `${'3'.green}. Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${'4'.green}. Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5'.green}. Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${'6'.green}. Borrar Tarea`
            },
            {
                value: '0',
                name: `${'0'.green}. Salir`
            }
        ]
    }
]

const pausaOpt = [
    {
        type:"input",
        name:"pausa",
        message:`Precione ${'ENTER'.green} para continuar`
    }
]

const inquirerMenu  = async () => {
    console.clear();
    console.log("=============================".green);
    console.log("    Selecione una Opcion     ".white);
    console.log("=============================\n".green);
    const {opcion} = await inquirer.prompt(menuOpts);
    return opcion;
}

const pause = async() => {
    console.log("\n")
    const {pausa} = await inquirer.prompt(pausaOpt);
    return pausa;
}

const leerInput = async(message) =>{
    const question = [
        {
            type:"input",
            name:"decs",
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const {decs} = await inquirer.prompt(question);
    return decs;
}

const listadoTareasBorrar = async( tareas = []) => {

    const choices = tareas.map((tarea, i) =>{
        const idx = `${i + 1}.`.green;
        return {
            value:tarea.id,
            name: `${ idx } ${tarea.desc}`
        }
    })

    const tareasOptions = [
        {
            type:"list",
            name:"id",
            message:"¿Qué decea hacer?",
            choices
        }
    ]

    const {id} = await inquirer.prompt(tareasOptions)
    return id;
}

const confirmar = async(message) =>{
    const question = [
        {
            type:'confirm',
            name:'ok',
            message
        }
    ] 
    const {ok} = await inquirer.prompt(question)
    return ok;
} 


const mostrarTareasCheck = async( tareas = []) => {

    const choices = tareas.map((tarea, i) =>{
        const idx = `${i + 1}.`.green;

        return {
            value:tarea.id,
            name: `${ idx } ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

    const pregunta = [
        {
            type:"checkbox",
            name:"ids",
            message:"Selecciones",
            choices
        }
    ]

    const {ids} = await inquirer.prompt(pregunta)
    return ids;
}

module.exports = {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarTareasCheck
}
