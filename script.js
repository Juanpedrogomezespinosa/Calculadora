let display = document.getElementById("display");
// Obtenemos referencia al elemento de HTML con el id "display" y lo almacenamos en una variable con su mismo nombre. Esto nos permite interactuar con el campo de texto donde se mostrarán los números y el resultado de las operaciones.

function appendToDisplay(value) {
  display.value += value;
}
// Esta función se encarga de agregar el valor pasado como argumento al campo de texto de la calculadora. Por ejemplo, cuando hacemos clic en un botón numérico, se llama a esta función con el número correspondiente. El valor se concatena al contenido actual del campo de texto.

function clearDisplay() {
  display.value = "";
}
// Esta función se utiliza para borrar el contenido del campo de texto. Cuando hacemos clic en el botón "C", esta función se llama y establece el valor del campo de texto a una cadena vacía.

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
// Esta función se utiliza para evaluar la expresión matemática ingresada en el campo de texto y mostrar el resultado. Se utiliza la función "eval()" de JavaScript para evaluar la cadena de expresión matemática. Si la evaluación es exitosa, el resultado se muestra en el campo de texto. Si ocurre algún error durante la evaluación, se muestra la cadena "Error".

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
// Esta función elimina el último carácter del campo de texto utilizando el método slice() de JavaScript.
