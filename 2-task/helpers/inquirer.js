const inquirer = require('inquirer');
require("colors");

const menuOpts = [
    {type:"list",
    name:"opcion",
    message:"¿Qué decea hacer?",
    choices:['opt']
    }
]


const inquirerMenu  = async () => {
    console.clear();
    console.log("=============================".green);
    console.log("    Selecione una Opcion     ".green);
    console.log("=============================\n".green);
}
