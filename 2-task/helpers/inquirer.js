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
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tarea'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
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
    console.log("    Selecione una Opcion     ".green);
    console.log("=============================\n".green);
    const {opcion} = await inquirer.prompt(menuOpts);
    return opcion;
}

const pause = async() => {
    console.log("\n")
    const {pausa} = await inquirer.prompt(pausaOpt);
    return pausa;
}

module.exports = {
    inquirerMenu,
    pause
}
