console.log("LET VAR CONST")

// En este ejemplo, la variable x se declara usando var. 
// Dentro del bloque if, x se redefine como 20. Sin embargo, cuando se imprime x fuera del bloque if, el valor es 20. 
// Esto se debe a que la variable x es funcionalmente hoisted (izada) 
// al principio del ámbito de la función, 
// lo que significa que la definición de x dentro del bloque if reemplaza la definición 
// previa en todo el ámbito de la función

function ejemploVar() {
    var x = 10;
    if (true) {
      var x = 20; // redefine x
      console.log("VAR: " + x); // 20
    }
  
    console.log("VAR: " +x); // 20
  } 
  ejemploVar();


  // En este ejemplo, la variable x se declara usando let. 
// Dentro del bloque if, se define una nueva variable x que solo existe dentro del bloque.
// Cuando se imprime x fuera del bloque if, el valor es el original de 10.
// La variable x definida dentro del bloque if solo tiene alcance dentro del bloque y no afecta la variable x definida fuera del bloque.

function ejemploLet() {
    let x = 10;
    if (true) {
      let x = 20; // define una nueva x local
      console.log("LET: " + x); // 20
    }
    console.log("LET: " + x); // 10
  }
  
  ejemploLet();

// En este ejemplo, la variable x se declara usando const. 
// Dentro del bloque if, se intenta definir una nueva variable x, 
// lo que resulta en un error ya que una variable definida como const no puede ser redefinida.
// Cuando se imprime x fuera del bloque if, el valor es el original de 10. 
// La variable x definida con const es inmutable y su valor no puede ser modificado después de su definición.

function ejemploConst() {
    // ambito General  
    const x = 10;

    // ambito 1
    if (true) {
      const x = 30.2
      console.log(x);
    }

    // ambito 2
    if(true){
      const x = "Hola";
      console.log(x)
    }


    console.log(x); // 10
  }
  
  ejemploConst();

// En resumen, la diferencia entre var, let.
// y const es principalmente en cómo se comportan en cuanto a su alcance y su capacidad de ser redefinidos o mutados. 
// var tiene alcance funcional y puede ser redefinido, let tiene alcance de bloque y puede ser redefinido, 
// mientras que const también tiene alcance de bloque pero no puede ser redefinido después de su declaración inicial.

  const nombre = [1,3,4,5,6];

  if(true){
    const nombre = "Pedro";
  }

  nombre.push(90)
  console.log(nombre)




