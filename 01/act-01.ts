/* 1.- Relizar un programa que defina un arreglo de 10 enteros, a continuacion hay que inicializarlo con numeros aleatorios, posteriormente hay que mostrar los datos del arreglo pero elevados al cubo.

2.- Crear un arreglo de 5 elementos de cadenas de texto, inicializar el arreglo con elementos obtenidos desde teclado, copiamos los elementos del arreglo en otro arreglo y lo mostramos de manera inversa

3.- Realizar un programa que obtenga por teclado 5 calificaciones comprendidas entres 0 y 10. A continuacion debe mostrar todas las notas, la nota media, la nota mas alta y la menor nota.

4.- realizar un programa que pida 10 numeros por teclado, cuando se ingrese un numero negativo por teclado debe mostrarse el arreglo hasta donde haya sido llenado.

5.- hacer un programa que inicialice un arreglo de numeros con valores aleatorios y posteriormente ordene los elementos de menor a mayor y los muestre
 */

// // 1.
// let numerosAr:number[] = [1,5,10,7,9,4,3,2,8,6];

// for(let i=0; i<numeros.length; i++){
//     console.log(Math.pow(numeros[i],3));
// }

// // 2.
// let cadenas:string[] = [];
// let cadenas1:string[] = [];

// for(let i=0; i<5; i++){
//     const cadena = prompt("Introduce tu nombre");
//     cadenas.push(`${cadena}`);
//     // cadenas1.unshift(`${cadena}`);
// }
// for(let i=cadenas.length; i>0; i--){
//     cadenas1.push(`${cadenas[i-1]}`);
// }

// console.log(cadenas);
// console.log(cadenas1);

// // 3.
// let calificaciones:number[] = [];
// let suma:number = 0;

// for(let i=0; i<5; i++){
//     const calificacion = prompt(`Agrega la calificacion ${i+1} entre 0 y 10`);
//     calificaciones.push(parseInt(`${calificacion}`));
// }

// for(let i=0; i<calificaciones.length; i++){
//     suma += (calificaciones[i]);
// }

// const notaMedia = suma/calificaciones.length;
// const notaAlta = Math.max(...calificaciones); 
// const notaBaja = Math.min(...calificaciones);

// console.log(calificaciones);
// console.log(`La nota media es: ${notaMedia}`);
// console.log(`La nota alta es: ${notaAlta}`);
// console.log(`La nota baja es: ${notaBaja}`);

// // 4.
// let numeros1:number[] = [];

// for(let i=0; i<10; i++){
//     const dato = prompt("Ingresa un numero");
//     if(parseInt(`${dato}`) < 0){
//         break;
//     }else{
//         numeros1.push(parseInt(`${dato}`));
//     }
// }

// console.log(numeros1);

// 5.

let numeroArr:number[] = [];
for (let i = 0; i < 5; i++) {
    numeroArr.push(Math.floor(Math.random() * 100));
} 

console.log(numeroArr);
console.log(numeroArr.sort((a, b) => a - b));

