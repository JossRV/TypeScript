/* 
Ejercicio 1
Escribir un programa que pregunte al usuario su nombre, y luego lo salude.

Ejercicio 2
Calcular el perímetro y área de un rectángulo dada su base y su altura.

Ejercicio 3
Dados los catetos de un triángulo rectángulo, calcular su hipotenusa.

Ejercicio 4
Dados dos números, mostrar la suma, resta, división y multiplicación de ambos.

Ejercicio 5
Escribir un programa que convierta un valor dado en grados Fahrenheit a grados Celsius. Recordar que la fórmula para la conversión es:

C = (F-32)*5/9

Ejercicio 6
Calcular la media de tres números pedidos por teclado.

Ejercicio 7
Realiza un programa que reciba una cantidad de minutos y muestre por pantalla a cuantas horas y minutos corresponde. Por ejemplo: 1000 minutos son 16 horas y 40 minutos.

Ejercicio 8
Un vendedor recibe un sueldo base mas un 10% extra por comisión de sus ventas, el vendedor desea saber cuanto dinero obtendrá por concepto de comisiones por las tres ventas que realiza en el mes y el total que recibirá en el mes tomando en cuenta su sueldo base y comisiones.

Ejercicio 9
Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuanto deberá pagar finalmente por su compra.

Ejercicio 10
Un alumno desea saber cual será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:

55% del promedio de sus tres calificaciones parciales.
30% de la calificación del examen final.
15% de la calificación de un trabajo final.
*/

class Ejercicios{
    static ejercicio1 (){
        let nombre:string = String(prompt("Escriba su nombre"));
        alert(`Hola ${nombre}`);
    }
    static ejercicio2 (){
        let base:number = Number(prompt("Escriba la base del rectangulo"));
        let altura:number = Number(prompt("Escriba la altura del rectangulo"));

        let area:number = 0, perimetro:number = 0;
        area = base*altura;
        perimetro = (base * 2) + (altura * 2);
        console.log(`Area ${area}, Perimetro ${perimetro}`);
    }
    static ejercicio3 (){
        let co:number = Number(prompt("Escriba el cateto opuesto"));
        let ca:number = Number(prompt("Escriba el cateto adyacente"));

        let h:number = 0;
        h = Math.sqrt((co**2)+(ca**2));
        console.log(`La hipotenusa es ${h}`);
        
    }
    static ejercicio4 (){
        let numero1:number = Number(prompt("Escribe un numero"));
        let numero2:number = Number(prompt("Escribe otro numero"));

        let suma = 0, resta = 0, multiplicacion = 0, division = 0;
        suma = numero1+numero2;
        resta = numero1-numero2;
        multiplicacion = numero1*numero2;
        division = numero1/numero2;

        console.log(`Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division ${division}`);
    }
    static ejercicio5 (){
        let fahrenheit:number = Number(prompt("Escribe los grados Fahrenheit"));
        let celsius:number = 0;

        celsius = (fahrenheit-32)*(5/9);
        console.log(celsius);
    }
    static ejercicio6 (){
        let numeros:number[] = [];
        // let numero:number = 0;
        // let suma:number = 0;
        let media:number = 0;

        for(let i=0; i<3; i++){
            numeros.push(Number(prompt(`escribe el numero ${i}`)));
            // numero = Number(prompt(`escribe el numero ${i}`));
            // suma += numero;
        }
        for(let i=0; i<numeros.length; i++){
            media += numeros[i];
        }
        // media = suma/3;
        media = media / numeros.length;
        
        console.log(`La media es: ${media}`);
    }
    static ejercicio7 (){
        let minutos:number = Number(prompt("Escribe los minutos a convertir"));
        let minuto:number = 0
        let hora:number = 0;

        minuto = minutos%60; // -> 40
        hora = minutos/60; //->16.666...
        // hora = Number(hora.toFixed(2)); // -> 16.66
        // hora = Math.ceil(hora); // -> 17
        // hora = Math.round(hora); // -> 17
        hora = Math.floor(hora); // -> 16
        console.log(`Los ${minutos} minutos equivalen a ${hora} horas y ${minuto} minutos`);
    }
    static ejercicio8 (){
        let sueldo:number = Number(prompt("Cual es tu sueldo del mes"));
        let porcieto:number = 10;
        let comisionxventa:number = 0;
        let comisionxmes:number = 0;
        let sueldoTot:number = 0;
        
        comisionxventa = (porcieto/100)*sueldo;
        comisionxmes = comisionxventa*3;
        sueldoTot = sueldo+comisionxmes;

        console.log(`${sueldoTot}`);
    }
    static ejercicio9 (){
        let precio:number = Number(prompt("Precio del producto"));
        let porciento:number = 15;
        let descuento:number = 0;
        let preciodesc:number = 0;

        descuento = (porciento/100)*precio;
        preciodesc = precio-descuento;

        console.log(`Precio a pagar ${preciodesc}`);
    }
    static ejercicio10 (){
        let parciales:number[] = [];
        let parcialfin:number = 0;
        let examenfin:number = 0;
        let trabajofin:number = 0;
        let calificacionfin:number = 0;

        for (let i=1; i<=3; i++) {
            parciales.push(Number(prompt(`Calificacion del parcial ${i}`)));
            // parcialfin += Number(prompt(`Calificacion del parcial ${i}`));
            // parciales.push(Number(parcialfin));
        }
        for(let i=0; i<parciales.length; i++){
            parcialfin += parciales[i];
        }
        examenfin = Number(prompt("Calificacion del examen final"));
        trabajofin = Number(prompt("Calificacion del trabajo final"));

        parcialfin = (55/100)*(parcialfin/parciales.length);
        examenfin = (30/100)*examenfin;
        trabajofin = (15/100)*trabajofin;
        calificacionfin = parcialfin+examenfin+trabajofin;

        console.log(`Calificacion final: ${calificacionfin.toFixed(2    )}`);

    }
}

// Ejercicios.ejercicio1();
// Ejercicios.ejercicio2();
// Ejercicios.ejercicio3();
// Ejercicios.ejercicio4();
// Ejercicios.ejercicio5();
// Ejercicios.ejercicio6();
// Ejercicios.ejercicio7();
// Ejercicios.ejercicio8();
// Ejercicios.ejercicio9();
Ejercicios.ejercicio10();
