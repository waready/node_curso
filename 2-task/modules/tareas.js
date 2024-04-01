const Tarea = require("./tarea");

// listado { uid , {id, des, completado}}
class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listarTareas(){
        console.log();
        this.listadoArr.forEach((tarea,i) =>{
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${idx}.-  ${desc}  ::  ${estado}`)

        })
    }

    listarPenditesCompletadas (completadas = true){
        console.log();
        let indice = 0;
        this.listadoArr.forEach((tarea) =>{

            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            
            if(completadas){
                //mostrar completados
                if(completadoEn){
                    indice += 1
                    console.log(`${indice.toString().green}.-  ${desc}  ::  ${completadoEn.green}`) 
                }
            }else{
                //mostrar pendientes
                if(!completadoEn){
                    indice += 1
                    console.log(`${indice.toString().green}.-  ${desc}  ::  ${estado}`) 
                }
            } 
        })
    }

    borrarTareas( id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    toggleCompletadas( ids = []){
        ids.forEach( id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.listadoArr.forEach( tarea  => {
            if( !ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
    } 
}

module.exports = Tareas;