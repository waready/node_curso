
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar=false, hasta=10) => {

    return new Promise((resolve, reject) =>{
        try {
            let salida ='';
            let consola = '';
                      
        
            for (let i=1; i<=hasta; i++){
                salida  +=`${ base } x ${ i } = ${ base * i }\n`;
                consola +=`${ base } ${'x'.blue} ${ i } ${'='.red} ${ base * i }\n`
            }
        
            if(listar){
                console.log('======================='.green);
                console.log(`     TABLA DEL: ${colors.blue(base)} `.gray);
                console.log('======================='.green);
                
                console.log(consola);
            } 
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
            resolve(`tabla-${base} creado`);
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    crearArchivo : crearArchivo
}