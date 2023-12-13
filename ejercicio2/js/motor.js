window.addEventListener('load', function(){

  // Crea un array llamado numeros que contenga al menos 10 números enteros.
  var numeros = [1, 9, 8, 7, 6, 2, 3, 4, 5, 0];

  // Mostrar el Contenido del Array:
  console.log(numeros);

  // Ejecución de funciones

  mostrarNumeros(numeros);
  console.log("Suma: ",calcularSuma(numeros));
  console.log("Número Mayor: ",encontrarMayor(numeros));
  console.log("Array Pares: ",filtrarPares(numeros));
  console.log("Array Multiplicado: ",multiplicarPor(numeros, 2));
  console.log("Array Ordenado: ",ordenarAscendente(numeros, 2));

});


// Crea una función llamada mostrarNumeros que tome el array como parámetro y muestre en la consola el contenido del array.
function mostrarNumeros(numeros){
  console.log(numeros);
}


// Calcular la Suma:Crea una función llamada calcularSuma que tome el array como parámetro y calcule la suma de todos los números en el array. Muestra la suma en la consola.
function calcularSuma(numeros){
  let suma = 0;
  numeros.forEach((numero) => 
  {
    suma += numero;
  });
  return suma;
}


// Encontrar el Número Mayor:Crea una función llamada encontrarMayor que tome el array como parámetro y encuentre el número más grande. Muestra el número más grande en la consola.
function encontrarMayor(numeros){
  let mayor = 0;
  numeros.forEach((numero) => 
  {
    if(numero > mayor){
      mayor = numero;
    };
  });
  return mayor;
}



// Filtrar Números Pares:Crea una función llamada filtrarPares que tome el array como parámetro y devuelva un nuevo array que solo contenga los números pares.
function filtrarPares(numeros){
  var pares = [];
  numeros.forEach((numero) => 
  {
    if(numero%2==0){
      pares.push(numero);
    };
  });
  return pares;
}



// Multiplicar por un Número:Crea una función llamada multiplicarPor que tome el array y un número como parámetros y devuelva un nuevo array donde cada elemento sea el resultado de multiplicar el número dado por el elemento correspondiente del array original.
function multiplicarPor(numeros, num){
  arrayNuevo = [];
  numeros.forEach((numero) => 
  {
    arrayNuevo.push(num*numero);
  });
  return arrayNuevo;
}


// Ordenar en Orden Ascendente:Crea una función llamada ordenarAscendente que tome el array como parámetro y devuelva un nuevo array ordenado en orden ascendente.
function ordenarAscendente(numeros){
  arrayOrdenado = numeros.sort();
  return arrayOrdenado;

}

