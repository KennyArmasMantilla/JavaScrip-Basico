// alert("Hola mundo")

/*------------------ Variables ------------------- */
/* let para definir las variables
"nombre de la variable" sin espacios ni # adelante
lueego le asignamos un valor =*/
const numeros =20
const edad=60

let numero=10,
    nombre ='Luis',
    empresa='Scope',
    cargo, pais
    numero=20


console.log(numero)
console.log(numero+1)
console.log(numero*2)
console.log(numero/3)

if(10>numero){
    console.log(numero)
}

/*-----------------tipos de datos----------------*/
/*------ Primitivos ---------*/

/*numeros: son numeros nada mas*/
let number =10

/*string son textos, que se ponen en comillas "" `` ''*/
let palabra ="letras"
let name = `Tengo ${number} años`
//Podemos crear marcado html
// let div = `
//     <div class="container">
//     ${name}
//     </div>    
// `
// document.body.innerHTML=div

console.log(name)

/*Los boolean  */
/*boolean que solo retorna verdadero o falso*/
//undefined //es para especificar de que algo si existe pero no tiene un valor
//null//ese dato no existe
//symbol//Te permite crear inferencias unicas.

/*------ Compuestos ---------*/
let numbers = [1,2,3,4,5,6,7]
let data = {
    nombre:"Alexys",
    apellido: "Varas",
    edad: 54
}
