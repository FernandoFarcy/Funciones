/** @format */

// *parametros res ************************************

function checkOut(...prices) {
    const total = prices.reduce(function (acc, curr) {
        return acc + curr;
    });
    console.log("Bruno");
    console.log(total);
}

checkOut(10, 33, 66, 77, 88);
checkOut(10, 33, 88);
checkOut(10, 33, 88, 1, 432, 76, 123);

// *parametros res ************************************

// function checkOut(...prices) {
//     const total = prices.reduce((acc, curr) => acc + curr)
//     console.log(total)
//     }

//     checkOut(10, 33, 66, 77, 88)
//     checkOut(10, 33, 88)
//     checkOut(10, 33, 88, 1, 432, 76, 123)

// *  parametro res************************************
// function checkOut(...prices) {

// console.log(prices)
// }

// checkOut(10, 33, 66, 77, 88)

// *************************************
// function checkOut(pr1, pr2, pr3, pr4, pr5) {
// const total = pr1 + pr2 + pr3 + pr4 + pr5
// console.log(total)
// }

// checkOut(10, 33, 66, 77, 88)

// *************************************

// const saludar = (nombre, apellido )=> {
//     console.log("soy " + nombre +" "+ apellido)
//     }

// saludar("Juancito", "nuñez")
// saludar("ferfer")
// saludar("san justo")

// *************************************
// const mayuscula = (nombre)=> nombre.toUpperCase()

// let nombre = mayuscula("annnnnndressssss")

// console.log(nombre)

// *************************************

// const saludar = (nombre)=> {
//     console.log("hola me llamo " + nombre)
//     }

// saludar("Juancito")

// *************************************

// const saludar = ()=> {
// console.log("hola me llamo fernando")
// }
// saludar()

// *************************************

// const saludar = function() {
//     console.log("hola me llamo juan")
// }
// saludar()

// *************************************

// function saludar() {
//     console.log("Hola me llamo Juan")
// }

// saludar()
// saludar()
// saludar()
// saludar()
