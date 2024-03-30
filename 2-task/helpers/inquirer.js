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


const inquirerMenu  = async () => {
    console.clear();
    console.log("=============================".green);
    console.log("    Selecione una Opcion     ".green);
    console.log("=============================\n".green);
    const {opcion} = await inquirer.prompt(menuOpts);
    return opcion;
}

module.exports = {
    inquirerMenu
}
