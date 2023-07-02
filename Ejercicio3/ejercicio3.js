/* De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. */

let array = [10, 40, 30, 20, 15, 5];
array.sort((a, b) => a - b);
alert("El arreglo ordenado de menor a mayor: " + array + "\n" +
      "El número menor del arreglo es: " + Math.min(...array) + "\n" +
      "El número mayor del arreglo es: " + Math.max(...array));

