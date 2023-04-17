
console.log('FUNCIONES!!!')

function saludar(nombre){
    return `Hola, ${nombre}`
}

console.log(saludar('Jose'))

// Funcion flecha

const saludar2 = (nombre) => `Hola, ${nombre}`


console.log(saludar2('Pedro'))

const saludar3 = (nombre) => {
    const n = nombre
    const apellido = "Perez"
    return `Hola, ${nombre} ${apellido}`
}
console.log(saludar3('Veronica'))
console.log('---------FIN FUNCIONES-----------')