// El siguente ejercicio tiene un error lo que impide
// imprimer por consola el listado, encontrar el error
// y solucionarlo
const array = ["Java", "Python", "C", "C++"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

// salida esperada ->
// Java
// Python
// C
// C++

let nombre = "Pedro"
if (true) {
    nombre = "Lucas"
    console.log(nombre)
}

// salida esperada Lucas

// -----------------------------------------------------------------------------------------------------

// Conventir las siguentes funcion en "funciones flecha"

// function esNumeroPrimo(numero) {
// 	if (numero <= 1) {
// 		return false;
// 	}


const esNumeroPrimo = (numero) => numero <= 1 ? true : false;
console.log(esNumeroPrimo(2))

// 	// Comprobar si el número es divisible por algún número menor que él mismo
// 	for (let i = 2; i < numero; i++) {
// 		if (numero % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }


const esDivisiblePorNumMenor = (numero) => {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return true;
        }
    }
    return false;
}

console.log(esDivisiblePorNumMenor(6))

// function esPar(numero) {
// 	if (numero % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

const numEsPar = (num) => {
    if (num % 2 == 0) {
        return `El número ${num} es par`;
    } else {
        return `El número ${num} no es par`;
    }
}
console.log(numEsPar(3));

// function saludar() {
// 	return 'Hola mundo!!';
// }

const saludar = () => "Hola mundo";
console.log(saludar());


// -----------------------------------------------------------------------------------------------------

// imprimir cada valor del siguiente array multiplicado
// x2 utilizando map

const numeros1 = [10, 500, 1500, 2000];

// salida -> [ 20, 1000, 3000, 4000 ]

const numeros1Dobles = numeros1.map(numero => numero * 2);
console.log(`Array original ${numeros1}`)
console.log(`Array Multiplicada x2 ${numeros1Dobles}`)


// 1- crear array solo con los clientes que tengan el status en true, usar filter
// 2 - crear funcion flecha que permite buscar un cliente por el nombre, usar find
// 3 - agregar un cliente utilizado push
const clientes = [
	{ id: 12, nombre: 'Pedro', status: false },
	{ id: 13, nombre: 'Sofia', status: true },
	{ id: 14, nombre: 'Almendra', status: false },
	{ id: 15, nombre: 'Carlos', status: true },
];

//1
const clientStatusTrue = clientes.filter(s => s.status == true);
console.log(clientStatusTrue);

//2
const findClientByName = (nombre) => clientes.find(c => c.nombre == nombre);
console.log(findClientByName("Sofia"))
console.log(findClientByName("Carlos"))

//3
clientes.push({
    id:16,
    nombre:'Alan',
    status:false
})
console.log(clientes)


// DENTRO DE LA CARPETA DATA tiene un js que contiene un listado de usuario y un ejercicio,
// importarlo y utilizar la funcion creada

import { usuarios, findUserByEmail } from "./data/db2";

console.log(findUserByEmail("juan@example.com"))