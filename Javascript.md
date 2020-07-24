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
  * null
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















