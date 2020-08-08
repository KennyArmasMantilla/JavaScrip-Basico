// alert("Hola mundo")

/*------------------ Variables ------------------- */
/* let para definir las variables
"nombre de la variable" sin espacios ni # adelante
lueego le asignamos un valor =*/
const numeros =20
//const edad=60

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
// let numbers = [1,2,3,4,5,6,7]
// let data = {
//     nombre:"Alexys",
//     apellido: "Varas",
//     edad: 54
// }

/*------ Ternario -----------*/
// let miEdad = prompt('Dime tu edad')

// let isAdult = miEdad >=18 ? 'Es mayor de edad' : 'Eres menor' 

// alert(isAdult)


/*---------Strings----------*/
// let profesor = 'Kenny Armas Mantilla'
// console.log(profesor.indexOf('mas'))
// console.log(profesor.indexOf('n',4))
// console.log(profesor.indexOf('n',profesor.indexOf('n')+1))
// console.log(profesor.includes('mas'))
// console.log(profesor.startsWith('Ken'))
// console.log(profesor.endsWith('illa'))

/*--------Condicionales----------*/
// let age =parseInt(prompt('Escriba su edad'),10)
// console.log(age)
// if(age !== NaN)
// {
//     if (age>=18)
//     {
//         alert('Eres mayor')
//     }
//     else
//     {
//         alert('Eres menor de edad')
//     }
// }
// else{
//     alert('Edad no valida')
// }

/*---Switch----*/
// switch (age) {
//     case 1:
//         alert('eres timido')
//         break;
//     case 2:
//         alert('Eres extrovertido')
//         break;

//     default: alert('Eres normal')
//         break;
// }

/*--------------Ciclos------------*/
/*-----for------*/
// for (let i = 1; i <= 10; i++) {
//     if(i%2 ===0) continue //saltar el valor
//     console.log(i)
// }

// let n =0
// for (let i = 1; i <= 10; i++) {
//     if(i%2 ===0){
//         console.log(i)
//         n++
//     }
//     if(n>2) break // rompe el ciclo
// }

/*-----while-----*/
// let i=0
// while (i<10){
//     console.log(i)
//     i++
// }

/*----do while----*/
// let password='123456'
// let pass
// do{
//      pass=prompt('Ingrese la contraseña')
// }while(password !==pass)


/*----------------------------Funciones----------------------*/
// function saludar(persona, sexo){
//     return sexo==='m'? `Bienvenido, ${persona}` :`Bienvenida, ${persona}`
// }

// console.log(saludar('Kenny','m'))
// console.log(saludar('Jorge','m'))
// console.log(saludar('Maria','f'))

/*------Forma de expresion o funcion, de flecha-------*/
// const saludar = (persona, sexo)=>{
//     return sexo==='m'? `Bienvenido, ${persona}` :`Bienvenida, ${persona}`
// }

// console.log(saludar('Kenny','m'))
// console.log(saludar('Jorge','m'))
// console.log(saludar('Maria','f'))

// const sumar = (a,b) => a + b 

// console.log(sumar(5,7))

/*--valores por defecto-- */
// const saludar = (persona, sexo='m') => {
//     let saludo = sexo === 'm' 
//     	? 'Bienvenido' : 'Bienvenida'
//   	return `${saludo} a mi pagina, ${persona}`
// }
// console.log(saludar('Kenny'))
// console.log(saludar('Jorge'))
// console.log(saludar('Maria','f'))

/*----parametros rest */
// const sumarTodos =(...numeros) => {
//     console.log(numeros)
// }
// sumarTodos(1,2,3,4,5,6,7,8,9)

// const sumarTodos =(...numeros) => {
//     let resultado = 0
//     for (let i = 0; i < numeros.length; i++) {
//         resultado += numeros[i]
        
//     }
//     return resultado
// }

// console.log(sumarTodos(1,2,3,4,5,6,7,8,9))


/*-----En una variable-----*/
// const c = console.log
// const multiplicar = (a,b) => a*b
// c(multiplicar(3,4))

/*------Callbacks-------*/
// const c = console.log
// const multiplicar = (a,b) => a*b

// let edad = multiplicar(5,4)
// c(edad)

// let edad2 = multiplicar(edad,2)
// c(edad2)

/*-----Retornadas por otra funcion */

// const c = console.log

// function sumar(x) {
//     return function(y)
//     {
//        return x + y
//     }
// }
//En flecha
// const c = console.log
// const sumar = x=> y => x + y

// c(sumar(5))
// c(sumar(5)(2))



/*--Funciones retornadas---*/

// const c = console.log

// const doSomething = x => y => x*y

// const a = doSomething(2)(2)
// const b = doSomething(3)

// c(doSomething(a)(b(3)))


/*---Funciones puras------*/
// const c = console.log
// let a = 'Hola'
// const saludar = (saludo,persona) =>`${saludo} ${persona}`

// c(saludar(a,'Luis'))
// c(a)
/*----Funciones auto invocadas---- */

// const c = console.log
// let a = 'Hola'
// const saludar = ((saludo,persona) =>`${saludo} ${persona}`)(a,'Luis')

// c(saludar)

/*----Funcion anonima-----*/
// setTimeout(()=>{
// 	alert('Hola Kenny')
// }, 3000)

/*--------scope--------*/
// const c = console.log

// {
//     let profesor = 'Yo'
//     {
//         c(profesor)
//     }
// }

/*---closures--- */
// const c = console.log

// function aumentar () {
//     let numero = 0
//     return function() {
//         numero++
//         c(numero)
//     }
// }

// aumentar()()

// const incrementar = aumentar()

// incrementar()
// incrementar()
// incrementar()
// incrementar()

/*---this----*/
//Esto es un objeto
// const c = console.log
// let user = {
//     nombre: 'Alexys', 
//     edad: 54,
//     getEdad(){
//         c(this.edad)
//     }
// }

// user.getEdad()


/*--------------------------------Arrays--------------------------------*/
// let array= ['hola',2,true,undefined, [1,2,3,4], {}]
// console.log(array)
// console.log(array[array.length - 2])

/*--------Desestructuracion------*/
// let array5 = ['Hola', 'bienvendido', 'Javascript']
/*Creamos 4 variables en una sola linea para igualar*/
// let [s1,s2,s3]= array5

// console.log(s1)
// console.log(s2)
// console.log(s3)

/*---------Agregar o quitar valores----------*/
/*----Al final------*/
// let array1 = [1,2,3,4]
// console.log(array1)
// array1.push(5)
// console.log(array1)
// array1.pop()
// console.log(array1)

/*------Al inicio------*/
// let array1 = [1,2,3,4]
// array1.unshift('Hola')
// console.log(array1)
// array1.shift()
// console.log(array1)

/*-----Personalizado------*/
// let array =['Lima','Trujillo','Loreto','Cajamarca']
// console.log(array)
// array.splice(1,0,'hola','string','salio') //(Donde inicia, cantidad a borrar del array, valores a ingresar)
// console.log(array)
// console.log(array.slice(0,1))
// console.log(array)

/*------------Ordenar valores------------------*/
/*------Reverse-------*/
// let array=[1,2,3,4,5]
// console.log(array.reverse())

// let mensaje ="Hola mundo"
// console.log(mensaje.split('').reverse()) //.join('') //Esto une
/*--------Sort------*/
// let array1=['A','F','Z','W','B']
// console.log(array1.sort())

// let array2=[20,41,100,3000]
// console.log(array2.sort((a,b)=> a- b))

/*----------Concatenar y transformar----------- */
// let array = [1,2,3,4,5]
// let array2 = [1,2,3,4,2,'s',5]
// console.log(array.join(' '))
// console.log(array.concat(array2))
// console.log(array.concat(12,21,43,123,21))


/*---------Encontrar elementos----------------- */

// let array = [1,2,3,4,5,21,342,"s","k",433,6,8,9]
// console.log(array)
// console.log(array.indexOf(21))
// console.log(array.indexOf("s"))

// console.log(array.find(number => number > 6))
// console.log(array.findIndex(number => number > 6))

/*--------------------------Spread Operator------------------- */

/*-------El objeto Math con arrays------- */
// let array = [10,20,30,5,3,9,4]
// console.log(Math.min(10,20,30,1))
// console.log(Math.max(10,20,30,1))

// console.log(Math.min(... array))
// console.log(Math.max(... array))

/*-----Eliminar elementos duplicados de un array)-------- */
// let array = [1,2,3,4,5,21,342,"s","k",433,1,2,3,"k",6,8,9]

// console.log(new Set(array))
// console.log([... new Set(array)])

// const removeDuplicates = arr => [... new Set(arr)]


//  let array2 = removeDuplicates(array)
// let array3 = [... new Set(['a','b','a','c'])]
// console.log(removeDuplicates(array))
// console.log(removeDuplicates(['a','b','a','c']))
// console.log(array2)
// console.log(array3)


/*---------------------------Recorrer un array---------------- */

let array = [10,20,30,40,50]
let array3 = ['a','b','d','h','i']

// for (let i=0; i < array.length;i++ ) {
//     console.log(array[i])
// }
// for (let i=0; i < array3.length;i++ ) {
//     console.log(array3[i])
// }

/*For of */
// for (let a of array) {
//     console.log(a)
// }


/*forEach() */
// array3.forEach((el,i) => {
//     console.log(el)
//     console.log(i)
// })


/*-------------------.some() .every()--------------- */
// console.log(array3.some(el => el ==="d"))
// console.log(array3.some(el => el ==="d"))


/*--------------.map() .filter() .reduce()-----------*/
 

// console.log(array.map(el => el*el))

// let newArray = array.map(el =>el+el)
// console.log(newArray)

// let otherArray = array.filter(el=> el >20)
// console.log(otherArray)

// let sum = array.reduce((a,b)=> a+b)
// console.log(sum)

/*---------------------------Objetos-------------------- */
// let perro = {
//     nombre: "Jerry",
//     edad: 10,
//     color: "mostaza",
//     sexo: "macho",
//     vacunas: true,

//     correr(){
//         console.log(`${this.nombre} corre`)
//     }
// }

// console.log(perro.nombre)
// console.log(perro.edad)
// console.log(perro.color, perro.sexo)
// console.log(perro.correr())

// let a = "Hola" , b = "mundo"

// let saludo = {
//     [a+b]: "Mi primer hola mundo"
// }

// let myObject = {
//     a:a,
//     b:b
// }

/*--------Delete---------*/
// let perro = {
//     nombre: "Jerry",
//     edad: 10,
//     color: "mostaza",
//     sexo: "macho",
//     vacunas: true,

//     correr(){
//         console.log(`${this.nombre} corre`)
//     }
// }
// console.log(perro)
// delete perro.edad
// console.log(perro)
// // para agregar solo se pone el objeto y lo agregar
// perro.edad = 20
// perro["feliz"]=true
// console.log(perro) 
// // Propiedad in
// console.log('sexo' in perro)




/*-------------Prototipos y cadena de prototipos--------------- */
// let amigo = 'carlos'

// console.log(Object.getPrototypeOf(amigo))
// //A esto se le llama un objeto constructor de los cuales no es muy
// //recomendale hacerlo.
// let amigo2= new String ('Kenny')

/*------------------------Mutabilidad----------------------------- */
let perro = {
    nombre: "Jerry",
    edad: 10,
    color: "mostaza",
    sexo: "macho",
    vacunas: true,

    correr(){
        console.log(`${this.nombre} corre`)
    }
}

// let otroPerro = perro
// //el objeto perro tambien toma el atributo de patas
// otroPerro.patas=4 

// console.log(perro)
// //Apartir de perro cree una copia vacia
// let perro2= Object.assign({},perro)
// console.log(perro2)

// perro2.orejas = "largas"

// console.log(perro)
// console.log(perro2)





/*----------------- recorrer un objeto------------------------- */
// Object.prototype.patas=4

// for (let property in perro){
//     console.log(property)
// }
// console.log(perro.patas)

// for (let property in perro){
//     if(perro.hasOwnProperty(property))
//         console.log(property)
// }

console.log(Object.entries(perro))
console.log(Object.keys(perro))
console.log(Object.values(perro))



