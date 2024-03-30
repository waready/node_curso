require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=============================".green);
    console.log("    Selecione una Opcion     ".green);
    console.log("=============================\n".green);

    // tareas
    console.log(`${"1.-".green} Crear Tarea`);
    console.log(`${"2.-".green} Listar Tareas`);
    console.log(`${"3.-".green} Listar Tareas Complementada`);
    console.log(`${"4.-".green} Listar Tarea Pendientes`);
    console.log(`${"5.-".green} Completar Tarea(s)`);
    console.log(`${"6.-".green} Borrar Tarea`);
    console.log(`${"0.-".green} Salir\n`);

    //cliente
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una Opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  //cliente
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPrecione ${'ENTER'.green} para continuar\n`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa
};
