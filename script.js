// script.js

// 1. Seleccionar todos los elementos necesarios del HTML
const campoNum1 = document.getElementById('num1');
const campoNum2 = document.getElementById('num2');
const botonSumar = document.getElementById('btn-sumar');
const botonrestar = document.getElementById('btn-restar');
const botonmultiplicacion = document.getElementById('btn-multiplicacion');
const botondividicion = document.getElementById('btn-divicion');

const elementoResultado = document.getElementById('resultado');


// 2. Definir la función que realiza la suma y actualiza la página
function realizarSuma() {
    
    // a. Leer los valores de los campos de entrada usando .value
    let valor1 = campoNum1.value;
    let valor2 = campoNum2.value;
    
    // b. ¡CRUCIAL EN JAVASCRIPT! Convertir los valores a números.
    // Los .value de los <input> siempre se leen como TEXTO (string).
    // Usamos parseFloat() para convertirlos a números decimales (o enteros).
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);
    
    // c. Realizar la operación matemática
    const sumaTotal = numero1 + numero2;
    
    // d. Mostrar el resultado en el elemento de salida usando .textContent
    // El resultado final se convierte automáticamente a texto para mostrarse.
    elementoResultado.textContent = sumaTotal;
    
    // Opcional: Mostrar en consola
    console.log(`Sumando ${numero1} + ${numero2} = ${sumaTotal}`);
}


// 3. Asignar la función al evento 'click' del botón
botonSumar.addEventListener('click', realizarSuma);

// 2. Definir la función que realiza la suma y actualiza la página
function realizarrestar() {
    
    // a. Leer los valores de los campos de entrada usando .value
    let valor1 = campoNum1.value;
    let valor2 = campoNum2.value;
    
    // b. ¡CRUCIAL EN JAVASCRIPT! Convertir los valores a números.
    // Los .value de los <input> siempre se leen como TEXTO (string).
    // Usamos parseFloat() para convertirlos a números decimales (o enteros).
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);
    
    // c. Realizar la operación matemática
    const restarTotal = numero1 - numero2;
    
    // d. Mostrar el resultado en el elemento de salida usando .textContent
    // El resultado final se convierte automáticamente a texto para mostrarse.
    elementoResultado.textContent = restarTotal;
    
    // Opcional: Mostrar en consola
    console.log(`restar ${numero1} - ${numero2} = ${restarTotal}`);
}


// 3. Asignar la función al evento 'click' del botón
botonrestar.addEventListener('click', realizarrestar);

// 2. Definir la función que realiza la suma y actualiza la página
function realizarmultiplicacion() {
    
    // a. Leer los valores de los campos de entrada usando .value
    let valor1 = campoNum1.value;
    let valor2 = campoNum2.value;
    
    // b. ¡CRUCIAL EN JAVASCRIPT! Convertir los valores a números.
    // Los .value de los <input> siempre se leen como TEXTO (string).
    // Usamos parseFloat() para convertirlos a números decimales (o enteros).
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);
    
    // c. Realizar la operación matemática
    const multiplicacionTotal = numero1 * numero2;
    
    // d. Mostrar el resultado en el elemento de salida usando .textContent
    // El resultado final se convierte automáticamente a texto para mostrarse.
    elementoResultado.textContent = multiplicacionTotal;
    
    // Opcional: Mostrar en consola
    console.log(`multiplicacion ${numero1} * ${numero2} = ${restarTotal}`);
}


// 3. Asignar la función al evento 'click' del botón
botonmultiplicacion.addEventListener('click', realizarmultiplicacion);

// 2. Definir la función que realiza la suma y actualiza la página
function realizardividicion() {
    
    // a. Leer los valores de los campos de entrada usando .value
    let valor1 = campoNum1.value;
    let valor2 = campoNum2.value;
    
    // b. ¡CRUCIAL EN JAVASCRIPT! Convertir los valores a números.
    // Los .value de los <input> siempre se leen como TEXTO (string).
    // Usamos parseFloat() para convertirlos a números decimales (o enteros).
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);
    
    // c. Realizar la operación matemática
    const dividicionTotal = numero1 / numero2;
    
    // d. Mostrar el resultado en el elemento de salida usando .textContent
    // El resultado final se convierte automáticamente a texto para mostrarse.
    elementoResultado.textContent = dividicionTotal;
    
    // Opcional: Mostrar en consola
    console.log(`dividicion ${numero1} / ${numero2} = ${dividicionTotal}`);
}

// 3. Asignar la función al evento 'click' del botón
botondividicion.addEventListener('click', realizardividicion);




