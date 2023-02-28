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
var Ejercicios = /** @class */ (function () {
    function Ejercicios() {
    }
    Ejercicios.ejercicio1 = function () {
        var nombre = String(prompt("Escriba su nombre"));
        alert("Hola ".concat(nombre));
    };
    Ejercicios.ejercicio2 = function () {
        var base = Number(prompt("Escriba la base del rectangulo"));
        var altura = Number(prompt("Escriba la altura del rectangulo"));
        var area = 0, perimetro = 0;
        area = base * altura;
        perimetro = (base * 2) + (altura * 2);
        console.log("Area ".concat(area, ", Perimetro ").concat(perimetro));
    };
    Ejercicios.ejercicio3 = function () {
        var co = Number(prompt("Escriba el cateto opuesto"));
        var ca = Number(prompt("Escriba el cateto adyacente"));
        var h = 0;
        h = Math.sqrt((Math.pow(co, 2)) + (Math.pow(ca, 2)));
        console.log("La hipotenusa es ".concat(h));
    };
    Ejercicios.ejercicio4 = function () {
        var numero1 = Number(prompt("Escribe un numero"));
        var numero2 = Number(prompt("Escribe otro numero"));
        var suma = 0, resta = 0, multiplicacion = 0, division = 0;
        suma = numero1 + numero2;
        resta = numero1 - numero2;
        multiplicacion = numero1 * numero2;
        division = numero1 / numero2;
        console.log("Suma ".concat(suma, ", Resta ").concat(resta, ", Multiplicacion ").concat(multiplicacion, ", Division ").concat(division));
    };
    Ejercicios.ejercicio5 = function () {
        var fahrenheit = Number(prompt("Escribe los grados Fahrenheit"));
        var celsius = 0;
        celsius = (fahrenheit - 32) * (5 / 9);
        console.log(celsius);
    };
    Ejercicios.ejercicio6 = function () {
        var numeros = [];
        // let numero:number = 0;
        // let suma:number = 0;
        var media = 0;
        for (var i_1 = 0; i_1 < 3; i_1++) {
            numeros.push(Number(prompt("escribe el numero ".concat(i_1))));
            // numero = Number(prompt(`escribe el numero ${i}`));
            // suma += numero;
        }
        for (var i_2 = 0; i_2 < numeros.length; i_2++) {
            media += numeros[i_2];
        }
        // media = suma/3;
        media = media / numeros.length;
        console.log("La media es: ".concat(media));
    };
    Ejercicios.ejercicio7 = function () {
        var minutos = Number(prompt("Escribe los minutos a convertir"));
        var minuto = 0;
        var hora = 0;
        minuto = minutos % 60; // -> 40
        hora = minutos / 60; //->16.666...
        // hora = Number(hora.toFixed(2)); // -> 16.66
        // hora = Math.ceil(hora); // -> 17
        // hora = Math.round(hora); // -> 17
        hora = Math.floor(hora); // -> 16
        console.log("Los ".concat(minutos, " minutos equivalen a ").concat(hora, " horas y ").concat(minuto, " minutos"));
    };
    Ejercicios.ejercicio8 = function () {
        var sueldo = Number(prompt("Cual es tu sueldo del mes"));
        var porcieto = 10;
        var comisionxventa = 0;
        var comisionxmes = 0;
        var sueldoTot = 0;
        comisionxventa = (porcieto / 100) * sueldo;
        comisionxmes = comisionxventa * 3;
        sueldoTot = sueldo + comisionxmes;
        console.log("".concat(sueldoTot));
    };
    Ejercicios.ejercicio9 = function () {
        var precio = Number(prompt("Precio del producto"));
        var porciento = 15;
        var descuento = 0;
        var preciodesc = 0;
        descuento = (porciento / 100) * precio;
        preciodesc = precio - descuento;
        console.log("Precio a pagar ".concat(preciodesc));
    };
    Ejercicios.ejercicio10 = function () {
        var parciales = [];
        var parcialfin = 0;
        var examenfin = 0;
        var trabajofin = 0;
        var calificacionfin = 0;
        for (var i_3 = 1; i_3 <= 3; i_3++) {
            parciales.push(Number(prompt("Calificacion del parcial ".concat(i_3))));
            // parcialfin += Number(prompt(`Calificacion del parcial ${i}`));
            // parciales.push(Number(parcialfin));
        }
        for (var i_4 = 0; i_4 < parciales.length; i_4++) {
            parcialfin += parciales[i_4];
        }
        examenfin = Number(prompt("Calificacion del examen final"));
        trabajofin = Number(prompt("Calificacion del trabajo final"));
        parcialfin = (55 / 100) * (parcialfin / parciales.length);
        examenfin = (30 / 100) * examenfin;
        trabajofin = (15 / 100) * trabajofin;
        calificacionfin = parcialfin + examenfin + trabajofin;
        console.log("Calificacion final: ".concat(calificacionfin.toFixed(2)));
    };
    return Ejercicios;
}());
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
