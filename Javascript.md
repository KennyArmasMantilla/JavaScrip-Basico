# JavaScript

Es un lenguaje de programación que no sigue paradigmas básicos de programación.

Todos los navegadores tienen un motor de JavaScript.

JavaScript es un lenguaje tipado e interpretado, es leído en tiempo real.

**Consola del navegador:**

La consola permite leer datos, es una manera sencilla de interpretar JavaScript, también permite leer datos que están en archivos.

**Variable:** es un contenedor para un dato, ya que permiten tener un dato almacenado en memoria. 

JavaScript es Case Sensitive, diferencia las mayúsculas de las minúsculas.

* typeof te devuelve el tipo de dato como string.

## Datos

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

## Operadores

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

## Números

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

## Strings

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

  

## Condicionales y ciclos

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











