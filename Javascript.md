# JavaScript

Es un lenguaje de programación que no sigue paradigmas básicos de programación.

Todos los navegadores tienen un motor de JavaScript.

JavaScript es un lenguaje tipado e interpretado, es leído en tiempo real.

**Consola del navegador:**

La consola permite leer datos, es una manera sencilla de interpretar JavaScript, también permite leer datos que están en archivos.

**Variable:** es un contenedor para un dato, ya que permiten tener un dato almacenado en memoria. 

JavaScript es Case Sensitive, diferencia las mayúsculas de las minúsculas.

* typeof te devuelve el tipo de dato como string.

## 1. Datos

### Tipos de datos

* **Primitivos**
  * *null
  * undefined
  * number
  * string
  * boolean
  * symbol

* **Object**
  * object
  * null(js bug)
  * function
  * array

## 2. Operadores

* **Asignación**
  * =
  * +=
  * -=
  * /=
  * *=
* **Comparación**
  * == : Compara valores
  * ===: Evalúa la igualdad
  * !=
  * !==: Evalúa la diferencian
  * < o >
  * <= o >=

*Evitar usar la doble igualdad para comparaciones, es mejor usar la triple igualdad*

- **Unarios: ** Son operadores que no requieren 2 datos

  - typeof
  - !

- **Binarios: **

  - Comparación

  - Aritméticos

    - +

    - -

    - *

    - /

    - %

    - ++: Post incremento o pre incremento, se va a ejecutar la segunda vez que se llame:

    - --: Post decremento o pre decremento, se va a ejecutar la segunda vez que se llame 

      ```js
      >number=9			>number=9
      >number--			>++number
      <9					<10
      >number
      <8
      ```

- **Ternario: **Es aquel que requiere 3 valores

  - expresión ? si es verdadero : si es falso

- **Corto circuito**

  - ||
  - &&

## 3. Números

* **toFixed()**: Especifica el número de decimales. 

  ```js
  let number1=5, number2=25.3687
  number1.toFixed(2)
  "5.00"
  number2.toFixed(3)
  "25.369"
  ```

* **Convertir texto a Numero:**

  * **parseInt(string,10):** string, el texto a cambiar a numero, y el 10 es para el sistema decimal con el que trabajamos.
  * **parseFloat(string):** convierte los valores con sus decimales.

* **NaN:** es un valor que se devuelve cuando intentamos hacer una operación pero no devolvemos un numero.

  ```js
  5 * 'Mama'
  NaN
  ```

  

* **Math**

  * **.floor():** Redondea un numero hacia el menor
  * **.ceil():** Lo redondea hacia arriba
  * **.round():** Lo redondea de acuerdo a su valor medio
  * **.random():** Devuelve un numero aleatorio entre 0 y 1 

## 4. Strings

### Propiedad

Es una característica que tiene ese dato

**.length:** Nos devuelve cuantos caracteres tiene el texto

```js
'kenny'.length
6
```



### Métodos

Es lo que puede hacer ese dato

#### Sin parámetros

* **.trim():** Quitar los espacios en blanco, al inicio y al final

  ```js
  '    Hola    '.trim()
  'Hola'
  ```

  

* **.toUpperCase():** Convierte todo a mayúsculas

* **.toLoweCase():** Convierte todo a minúsculas

#### Encontrar Caracteres

* **indexOf(string[,i]):** preguntamos en que posicion esta un caracter. 

  ```js
  let profesor = 'Kenny Armas Mantilla'
  profesor.indexOf('mas')
  8
  
  /*profesor.indexOf('n',4)---- empieza a busar desde la posicion 4*/
  profesor.indexOf('n',profesor.indexOf('n')+1)
  3
  ```

  *Si el resultado es -1 es que no encuentra el valor*

* **lastIndexOf():** Empieza una busqueda desde atras.

  ```js
  profesor.lastIndexOf('n')
  14
  ```

* **includes(string[,i]):** Pregunta si es que el texto presenta cierta cadena de caracteres de texto

  ```js
  profesor.includes('mas')
  true
  ```

* **startsWith(string[,i]):** Pregunta si empieza con un determinado texto.

  ```js
  profesor.starsWith('Ken')
  true
  ```

* **endsWith(string[,i]):** Pregunta como termina un texto

#### Manipular strings

* **replace(original, replacement):** Toma un texto y lo remplaza por otro.

  ```js
  'Hola mundo'.replace('mundo','Kenny')
  'Hola Kenny'
  ```

* **split(separator[,quantity]):** Separa un texto según el separador que usemos.

  ```js
  >'Kenny'.split('e')
  <<["K","nny"]
  
  >'Hola mundo'.split(' ')
  <<["Hola","mundo"]
  
  >'Hola mundo'.split(' ')[1]
  <<["mundo"]
  
  >'Hola mundo'.split(' ')[0]
  <<["Hola"]
  
  >'Kenny'.split('')
  <<["K","e","n","n","y"]
  ```

* **substring(star[,end]):** Extra el texto desde la posición que se le indica. *No incluye el numero final y  si el end es negativo extrae hacia atrás*

  ```js
  >'Hola mundo'.substring(2)
  <<"la mundo"
  
  >'Hola mundo'.substring(2,5)
  <<"la "
  
  >'Hola mundo'.substring(2,-1)
  <<"Ho"
  
  >'Hola mundo'.substring(5,-1)
  <<"Hola "
  ```

* **substr(start[,quantity]):** Busca la cantidad que nos indica. *Si estar es negativo empieza a extraer desde atrás*

  ```js
  >'Hola mundo'.substr(2,5)
  <<"la mu"
  
  >'Hola mundo'.substr(-2)
  <<"do"
  
  >'Hola mundo'.substr(-4)
  <<"undo"
  ```

* **slice(star[,end]):** Es identico a substring solo cambia sus valores negativos. *Si end es negativo: no toma los ultimos [end] valores, si star es negativo: empieza a contar desde el final*

  ```javascript
  >'Hola mundo'.slice(-5,-2)
  <<"mun"
  ```

  

## 5. Condicionales y ciclos

### Condicionales

* **if:**

  ```js
  if(5>3)
  {
      console.log('Hola')
  }
  else if(8<10)
  {
  	console.log('mundo')        
  }
  ```

  

* **Condiciones múltiples:**

  ```
  if (6 >3 && 5>2)
  {
  	console.log('Verdadero')
  }
  
  if (2 >3 || 5>2)
  {
  	console.log('Verdadero')
  }
  ```

* **Condicionales anidadas:** Una condición dentro de otra

  ```js
  if(5>2)
  {
  	console.log('Super')
  	if(6<50)
  	{
  		console.log('root')
  	}
  }
  ```

* **Truthy and falsy values:** Son valores que sin ser boolean se comportan como tal.

  * **Falsy**
    * 0
    * ""
    * NaN
    * undefine
    * null
  * **Truthy**
    * string no vacio
    * Número diferente de cero
    * arrays
    * objetos

* **switch:** Cuando queremos comparar un valor con una serie de valores usamos switch.

```js
switch (age) {
    case 1:
        alert('eres timido')
        break;
    case 2:
        alert('Eres extrovertido')
        break;

    default: alert('Eres normal')
        break;
}
```

### Ciclos

* **for**

  ```javascript
  for (let i = 0; i < 10; i++) {
      console.log(i)
  }
  ```

  *continue*

  ```javascript
  for (let i = 1; i <= 10; i++) {
      if(i%2 ===0) continue //saltar el valor
      console.log(i)
  }
  ```

  *break*

  ```javascript
  let n =0
  for (let i = 1; i <= 10; i++) {
      if(i%2 ===0){
          console.log(i)
          n++
      }
      if(n>2) break // rompe el ciclo
  }
  ```

* **while:** 

  ```javascript
  let i=0
  while (i<10){
      console.log(i)
      i++
  }
  ```

  

* **do while:**

```javascript
let password='123456'
let pass
do{
     pass=prompt('Ingrese la contraseña')
}while(password !==pass)
```

## 6. Funciones

### Que es

Es un bloque de código reutilizable, donde contiene un conjunto de instrucciones

* **Como funciona**

  * input => funcion() => output
  * input=>funcion()=> output1=>funcion()=>output2...

  *input: argumentos*

  *output: valor de retorno*, las funciones sin valor de retorno devuelven undefined

* **Ejecutar una función**

  * nombreFuncion(argumento1,argumento2....)
  * nombreFuncion() / *Si es que no necesita argumentos(datos de entrada)*

* Una función puede ser método de un objeto

  * 'Hola'.slice(3)

### Formas de declarar una función

* **Declaración**

  ```javascript
  function nombreFuncion (parametros){
  	//instruciones
  	return valor
  }
  ```

  

* **Expresión**

  Es un bloque de código que tiene un valor:

  * **Con function(en desuso) **

    ```javascript
    var nombreFuncion = function (){
    	//instrucciones de la funcion
    	return valor
    }
    ```

    

  * **funciones de flecha (recomendado desde ES6):**

    ```javascript
    const nombreFuncion =(parametros)=>{
    	//instrucciones de la funcion
    	return valor
    }
    /* En caso solo retorne un valor*/
    const nombreFuncion = (parametros) => valor
    ```

### Parametros y argumentos

* **Parámetros:** Son variables locales que se definen en la declaración de la función. Pueden tener valores por defecto.

  ```javascript
  const saludar = (persona, sexo='m') => {
      let saludo = sexo === 'm' 
      	? 'Bienvenido' : 'Bienvenida'
    	return `${saludo} a mi pagina, ${persona}`
  }
  ```

* **Argumentos:**

  * Si hay mas argumentos que parámetros, los adicionales se ignoran.
  * Si hay menos argumentos, los faltantes son **undefined**, a menos que tengan un valor por defecto.

* **Parámetros rest (spread operator):**

  Operador de espación

  ```javascript
  const sumarTodos =(...numeros) => {
      console.log(numeros)
  }
  ```

### Las funciones son ciudadanos de primera clase

Las funciones son un valor en javascript

* Pueden ser almacenadas en variables o constantes 

  ```javascript
  //funcion por expresion
  const c = console.log
  ```

  

* Pueden ser pasadas como argumentos de otra función, **callbacks**

* Pueden ser retornadas por otra función, **closures**

* Pueden tener métodos o propiedades, **POO**

### Tipos de funciones

* **Funciones puras:** No causan un efecto secundario, y siempre devuelven los mismos valores para los mismos parámetros.

  ```javascript
  const c = console.log
  let a = 'Hola'
  const saludar = (saludo,persona) =>`${saludo} 		${persona}`
  
  c(saludar(a,'Luis')
  ```

* **Funciones auto invocadas:** Son aquellas funciones que no necesitan luego invocarse, se ejecutan solas.

  ```javascript
  const c = console.log
  let a = 'Hola'
  const saludar = ((saludo,persona) =>`${saludo} 		${persona}`)(a,'Luis')
  
  c(saludar)
  ```

  

* **Funciones nombradas y anónimas:**

  * Una funcion es llamda cuando se declara.

  * Una funcion anonima es aquella que no tiene nombre, generalmente estan en callback 

    ```javascript
    setTimeout(()=>{
    	alert('Hola Kenny')
    }, 300)
    ```

### Scope

Es en contexto en el que una variable existe. 

```javascript
const c = console.log

{
    let profesor = 'Yo'{
        c(profesor)
    }
}
```



* **this:**

  * Representa al objeto del cual se ejecuta la función

  * Las arrow functions permiten acceder al this superior dentro de un closure (lexical this)

    

* **closures:** Son como, atravez de funciones internas podemos llegar a valores externos.

```javascript
const c = console.log

function aumentar () {
    let numero = 0
    return function() {
        numero++
        c(numero)
    }
}

aumentar()()//doble llmado porque llama a una doble funcion.
```

## 7. Arrays 

### Métodos

### Objeto Math con arrays

### Eliminar elementos duplicados de un Array

### Recorrer un array

### Map

### Fliter

### Reduce







