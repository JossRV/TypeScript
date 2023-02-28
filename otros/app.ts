// const imprime = () =>{
//     console.log(`Hola `);
// }

// imprime();
// console.log("Hola TS");

// const IA = (check,valor) =>{
//     if(check === 1){
//         console.log(`Hola ${valor}`);
//     }else if(check === 0){
//         console.log("hola");
        
//     }
// }

// IA(1,"Joss");

// Declaracion de variables en TypeScript
/* Las variables se pueden declarar usando las palabras claves let y const. ademas admite el tipado estatico y estricto, lo que significa que podemos especificar 
cuando se declara,  */

// let variable:tipo = asignacion;
// number -> entero o flotante
let valor1:number = 10;
let valor2:string = "Hola";

// validacion de si eres o no menor de edad

const IA = (edad:number) =>{
    if(edad >= 18){
        console.log(`Eres mayor de edad`);
    }else{
        console.log("Eres menor de edad");
    }
}

IA(21);

// creacion de arreglo
const numeros:number[] = [1,2,3,4];
console.log(numeros);

// interacion del arreglo
for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
    
}

// iteracion del arreglo con .map
numeros.map(numeros=>{
    console.log(numeros);
    
});

// iteracion del arreglo con while
let i:number = 0;

while(i < numeros.length){
    console.log(numeros[i]);
    i++;
}

// funcion saludar que retorna un string
function saludar(saludo:string):string{
    return saludo;
}

console.log(saludar("Hola mundo"));
