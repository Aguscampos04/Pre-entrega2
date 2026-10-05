//Simulador: promedio de notas y estado academico
const notaAprobar = 6;
let ingresarNotas = true;
let cantidadNotas = 0;
let sumaNotas = 0;


alert("Bienvenido al simulador de promedio de notas y estado académico");

while (ingresarNotas) {
    const entrada = prompt("Ingrese una nota (o escriba 'salir' para finalizar):");

    if (entrada === null || entrada.toLowerCase() === "salir") {
        ingresarNotas = false;
    } else {
        const nota = parseFloat(entrada);

         if (isNaN(nota) || nota < 1 || nota > 10  ) {
            alert("Numero no valido, ingrese una nota válida entre 1 y 10.");
        } else{
            cantidadNotas++;
            sumaNotas += nota;
    }
    }

}

// Resultados
if (cantidadNotas === 0) {
    console.log("No se ingresaron notas.");
} else{
    const promedio = sumaNotas / cantidadNotas;
    console.log(`---Resumen---\nCantidad de notas ingresadas: ${cantidadNotas}\nPromedio: ${promedio.toFixed(2)}`);

    if (promedio >= notaAprobar) {
        console.log("Estado académico: Aprobado. Felicitaciones!");
    } else{
        console.log("Estado académico: Desaprobado.");
    }
}