// Bienvenida
alert("Bienvenido al sistema contable");

// Funciones de Operación
function sumar(a, b) { // Función para la suma
    return a + b; // Devuelve el resultado de la suma
}

function restar(a, b) { // Función para la resta
    return a - b; // Devuelve el resultado de la resta
}

function multiplicar(a, b) { // Función para la multiplicación
    return a * b; // Devuelve el resultado de la multiplicación
}

function dividir(a, b) { // Función para la división
    if (b === 0) { // Verifica si el divisor es 0
        return "Error: No se puede dividir por cero"; // Retorna un mensaje de error si es así
    }
    return a / b; // Devuelve el resultado de la división
};

// Lógica Principal
let opcion; // Variable para almacenar la opción seleccionada por el usuario
do {
    opcion = prompt("Seleccione una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir"); // Muestra el menú de opciones y almacena la elección

    if (opcion === "5") { // Si la opción es 5, el usuario desea salir
        alert("Gracias por usar el sistema contable. ¡Hasta luego!"); // Muestra el mensaje de despedida
        console.log("Gracias por usar el sistema contable. ¡Hasta luego!"); // Muestra el mensaje de despedida
        break; // Sale del bucle
    }

    let num1 = parseFloat(prompt("Ingrese el primer número:")); // Solicita el primer número y lo convierte a número decimal
    let num2 = parseFloat(prompt("Ingrese el segundo número:")); // Solicita el segundo número y lo convierte a número decimal
    let resultado; // Variable para almacenar el resultado de la operación

    if (isNaN(num1) || isNaN(num2)) { // Verifica si los valores ingresados son números válidos
        alert("Por favor, ingrese números válidos."); // Muestra una alerta si no son números
        console.log("Por favor, ingrese números válidos."); // Muestra en la consola si no son números
        continue; // Vuelve al inicio del bucle
    }

    switch (opcion) { // Evalúa la opción ingresada
        case "1":
            resultado = sumar(num1, num2); // Llama a la función de suma
            break;
        case "2":
            resultado = restar(num1, num2); // Llama a la función de resta
            break;
        case "3":
            resultado = multiplicar(num1, num2); // Llama a la función de multiplicación
            break;
        case "4":
            resultado = dividir(num1, num2); // Llama a la función de división
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida."); // Muestra un mensaje de error si la opción no es válida
            console.log("Opción no válida. Por favor, seleccione una opción válida."); // Muestra el mensaje de error en la consola
            continue; // Vuelve al inicio del bucle
    }

    alert(`El resultado es: ${resultado}`); // Muestra el resultado de la operación
    console.log(`El resultado es: ${resultado}`); // Muestra el resultado en la consola

} while (true); // Repite el proceso hasta que el usuario elija salir