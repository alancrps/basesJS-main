// importar todo
// import * as h from './data/db'

import {db} from './data/db'


function buscarHeroeById(id){

    const heroe = db.find(h => h.id == id)
    if(heroe){
        return heroe
    }else{
        return "Heroe no encontrado"
    }
}

export { buscarHeroeById}