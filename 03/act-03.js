// Ejercicio 1
// La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por la uva que entrega en un embarque, considerando lo siguiente: si es de tipo A, se le cargan 20 céntimos al precio inicial cuando es de tamaño 1; y 30 céntimos si es de tamaño 2. Si es de tipo B, se rebajan 30 céntimos cuando es de tamaño 1, y 50 céntimos cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida.
// Ejercicio 2
// El director de una escuela está organizando un viaje de estudios, y requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de viajes por el servicio. La forma de cobrar es la siguiente: si son 100 alumnos o más, el costo por cada alumno es de 65 euros; de 50 a 99 alumnos, el costo es de 70 euros, de 30 a 49, de 95 euros, y si son menos de 30, el costo de la renta del autobús es de 4000 euros, sin importar el número de alumnos. Realice un algoritmo que permita determinar el pago a la compañía de autobuses y lo que debe pagar cada alumno por el viaje.
// Ejercicio 3
// La política de cobro de una compañía telefónica es: cuando se realiza una llamada, el cobro es por el tiempo que ésta dura, de tal forma que los primeros cinco minutos cuestan 1 euro, los siguientes tres, 80 céntimos, los siguientes dos minutos, 70 céntimos, y a partir del décimo minuto, 50 céntimos. Además, se carga un impuesto de 3 % cuando es domingo, y si es otro día, en turno de mañana, 15 %, y en turno de tarde, 10 %. Realice un algoritmo para determinar cuánto debe pagar por cada concepto una persona que realiza una llamada.
var Ejercicio = /** @class */ (function () {
    function Ejercicio() {
    }
    Ejercicio.ejercicio1 = function () {
        var tipoUva = prompt("Introduce el tipo de Uva\n(solo tipo A y B)");
        var tamanioUva = Number(prompt("Introduce el Tamaño\n(solo tamaño 1 y 2)"));
        var precioFinal = 0;
        var precioUva = Number(prompt("Introduce el precio de la uva en pesos Mexicanos"));
        // console.log(tipoUva.toUpperCase(), tamanioUva);
        if (tipoUva.toUpperCase() == "A") {
            if (tamanioUva == 1) {
                precioFinal += 0.2;
            }
            else if (tamanioUva == 2) {
                precioFinal += 0.3;
            }
        }
        else if (tipoUva.toUpperCase() == "B") {
            if (tamanioUva == 1) {
                precioFinal -= 0.3;
            }
            else if (tamanioUva == 2) {
                precioFinal += 0.5;
            }
        }
        var precioDD = precioFinal + precioUva;
        console.log("Ganancias obtenidas ".concat(precioDD));
    };
    Ejercicio.ejercicio2 = function () {
        var alumnos = Number(prompt("Introduce el numero de alumnos entre 0 y 100"));
        var costoAlumnos = 0;
        var costoTotal = 0;
        if (alumnos >= 100) {
            costoAlumnos = '65 Euros';
        }
        else if (alumnos >= 50 && alumnos <= 99) {
            costoAlumnos = '70 Euros';
        }
        else if (alumnos >= 30 && alumnos <= 49) {
            costoAlumnos = '95 Euros';
        }
        else if (alumnos > 0 && alumnos < 30) {
            costoTotal = 4000;
        }
        var pagoCompany = costoTotal / alumnos;
        pagoCompany = Math.round(pagoCompany);
        if (alumnos > 0 && alumnos < 30) {
            console.log("El numero de alumnos es: ".concat(alumnos, "\nEl pago por alumnos es: ").concat(pagoCompany, " Euros"));
        }
        else {
            console.log("El numero de alumnos es: ".concat(alumnos, "\nEl pago por alumno es: ").concat(costoAlumnos));
        }
    };
    Ejercicio.ejercicio3 = function () {
        var duracion = Number(prompt("Introduce la duración de la llamada"));
        var dia = prompt("Introduce el dia que tuvo su llamada (lunes,martes...)" !== null && "Introduce el dia que tuvo su llamada (lunes,martes...)" !== void 0 ? "Introduce el dia que tuvo su llamada (lunes,martes...)" : "");
        var turno;
        var costo;
        var impuesto;
        var extras;
        if (duracion > 0 && duracion <= 5) {
            costo = 1;
        }
        else if (duracion > 5 && duracion <= 8) {
            costo = 1 + 0.8;
        }
        else if (duracion > 8 && duracion <= 10) {
            costo = 1 + 0.8 + 0.7;
        }
        else {
            extras = duracion - 10;
            costo = 1 + 0.8 + 0.7 + (extras * (0.5));
        }
        if (dia == "domingo") {
            impuesto = (3 / 100) * costo;
        }
        else {
            turno = prompt("Introduce el turno (matutino o vespertino)" !== null && "Introduce el turno (matutino o vespertino)" !== void 0 ? "Introduce el turno (matutino o vespertino)" : "");
            if (turno == "matutino") {
                impuesto = (15 / 100) * costo;
            }
            else {
                impuesto = (10 / 100) * costo;
            }
        }
        impuesto = Number(impuesto.toFixed(2));
        var costoTotal = costo + impuesto;
        costoTotal = Number(costoTotal.toFixed(2));
        console.log("El costo de la llamada es de ".concat(costo, "\nEl impuesto a pagar es de ").concat(impuesto, "\nEl costo total de la llamada es de ").concat(costoTotal, " Euros"));
    };
    return Ejercicio;
}());
// Ejercicio.ejercicio1();
// Ejercicio.ejercicio2();
Ejercicio.ejercicio3();
