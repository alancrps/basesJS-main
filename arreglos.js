const arreglo1 = [5,3,1,4,5];
console.log(arreglo1)

arreglo1.push(6)
console.log(arreglo1)

arreglo1.pop()
console.log(arreglo1)


const arreglo2 = arreglo1
arreglo1.push(100)
console.log(arreglo2)

const arreglo3 = [...arreglo1]
arreglo1.push(9999)
console.log(arreglo3)
console.log(arreglo1)

const frutas = ["Anana", "Manzanas", "Bananas"]
console.log(frutas.sort())


const heroes = [
	{
		id: 1,
		name: 'Batman',
		owner: 'DC',
	},

	{
		id: 2,
		name: 'Spiderman',
		owner: 'Marvel',
	},
	{
		id: 3,
		name: 'Superman',
		owner: 'DC',
	},
	{
		id: 4,
		name: 'Flash',
		owner: 'DC',
	},
	{
		id: 5,
		name: 'Wolverine',
		owner: 'Marvel',
	},{
        id:20,name:"Batman",owner:"DC"
    }
];

// for (let index = 0; index < heroes.length; index++) {
//     console.log(heroes[index])   
// }
var contadorDC = 0;
var contardorMarvel = 0;
// heroes.map(h => console.log(h))
heroes.map(h => {
    if(h.owner == "DC"){
        contadorDC++
    }else{
        contardorMarvel++
    }   
})

console.log("Heroes DC: " + contadorDC)
console.log("Heroes Marvel: " + contardorMarvel)

const heroesDC = heroes.filter(h => h.owner == "DC")
console.log(heroesDC)

const batman = heroes.find(h => h.name == "Batman");
console.log(batman)

const obtenerHeroeById = (id) => heroes.find(h => h.id == id)
console.log(obtenerHeroeById(3))


// Migrar a funcion flecha
function obtenerHeroeByName(name)  {
    return heroes.find(h => h.name == name)
}
console.log(obtenerHeroeByName("Batman"))



