const persona = {
    nombre: 'Pedro',
    apellido: 'Lopez',
    edad: 23,
    activo: true,
    direccion: {
        ciudad:"New York",
        lat: 15.3232,
        lng:34.0      
    },
    habilidades:["Programar","Cocinar","Escribir"]
}



// console.log(persona.nombre + " " + persona.apellido)
// console.log(`${persona.nombre} ${persona.apellido}`)
// console.log(persona.direccion.ciudad)


// destructuracion 

const {nombre,apellido} = persona

// const nombre = persona.nombre;
// const apellido = persona.apellido;

// console.log(`${nombre} ${apellido}`)

const {direccion:{ciudad}} = persona

// console.log(ciudad)

const persona2 = {...persona,nombre:"Lucas"}

// console.log(persona2)

persona.habilidades.push("Limpiar")

// [
//     "Programar",
//     "Cocinar",
//     "Escribir",
//     "Limpiar"
// ]

// persona.habilidades.map(habilidad => {
//     console.log(habilidad)
// })

// console.log(persona.habilidades.map(e => {e}))

// persona.habilidades.forEach(element => {
//     console.log(`- ${element}`)
// });

const personas = [{
    nombre: 'Pedro',
    apellido: 'Lopez',
    edad: 11,
    activo: true,
    direccion: {
        ciudad:"New York",
        lat: 15.3232,
        lng:34.0      
    },
    habilidades:["Programar","Cocinar","Escribir"]
},{
    nombre: 'Lucas',
    apellido: 'Lopez',
    edad: 23,
    activo: true,
    direccion: {
        ciudad:"New York",
        lat: 15.3232,
        lng:34.0      
    },
    habilidades:["Programar","Cocinar","Escribir"]
},{
    nombre: 'Agustin',
    apellido: 'Lopez',
    edad: 50,
    activo: true,
    direccion: {
        ciudad:"New York",
        lat: 15.3232,
        lng:34.0      
    },
    habilidades:["Programar","Cocinar","Escribir"]
}]

const nombres = personas.map(p => {
    return {nombre: p.nombre, apellido:p.apellido}
})

const Mayores = []

personas.map(p => {
    if(p.edad >= 18){
        return Mayores.push(p.nombre)
    }
})



const MayoresFilter = personas.filter(e => e.edad >= 18)
console.log(MayoresFilter.map(e => e.nombre))