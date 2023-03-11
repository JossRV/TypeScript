// Algoritmo que pida dos números e indique si el primero es mayor que el segundo o no.
function ejercicio1() {
    var numero1 = Number(prompt("Ingrese el primer numero"));
    var numero2 = Number(prompt("Ingrese el segundo numero"));
    if (numero1 > numero2) {
        return "El primer numero es mayor al segundo";
    }
    return "El segundo numero es mayor al primero";
}
// console.log(ejercicio1());
// Algoritmo que pida un número y diga si es positivo, negativo o 0.
function ejercicio2() {
    var numero = Number(prompt("Ingrese un numero, ya sea negativo o positivo"));
    if (numero != 0) {
        if (numero > 0) {
            return "El numero es positivo";
        }
        return "El numero es negativo";
    }
    return "El numero es un cero";
}
// console.log(ejercicio2());
// Escribe un programa que lea un número e indique si es par o impar.
function ejercicio3() {
    var numero = Number(prompt("Ingrese un numero positivo"));
    if ((numero % 2) == 0) {
        return "El numero es par";
    }
    return "El numero es impar";
}
// console.log(ejercicio3());
// Crea un programa que pida al usuario dos números y muestre su división si el segundo no es cero, o un mensaje de aviso en caso contrario.
function ejercicio4() {
    var numero1 = Number(prompt("Para la division ingrese el primer numero"));
    var numero2 = Number(prompt("Ingrese el segundo numero"));
    if (numero2 != 0) {
        return "La division es: ".concat(numero1 / numero2);
    }
    return "no se puede realizar la division";
}
// alert(ejercicio4());
// Escribe un programa que pida un nombre de usuario y una contraseña y si se ha introducido “pepe” y “asdasd” se indica “Has entrado al sistema”, sino se da un error.
function ejercicio5() {
    var usuario = prompt("Ingresa el usuario" !== null && "Ingresa el usuario" !== void 0 ? "Ingresa el usuario" : "");
    var contraseña = prompt("Ingresa la contraseña" !== null && "Ingresa la contraseña" !== void 0 ? "Ingresa la contraseña" : "");
    if (usuario === "pepe" && contraseña === "asdasd") {
        return "Has entrado al sistema";
    }
    return "Credenciales incorrectas";
}
// alert(ejercicio5());
// Programa que lea una cadena por teclado y compruebe si es una letra mayúscula.
function ejercicio6() {
    var cadena = prompt("Ingrese una cadena" !== null && "Ingrese una cadena" !== void 0 ? "Ingrese una cadena" : "");
    if (cadena === cadena.toUpperCase()) {
        return "La cadena ingresada es una letra mayuscula";
    }
    return "La cadena ingresada es una letra minuscula";
}
// alert(ejercicio6());
// Realiza un algoritmo que calcule la potencia, para ello pide por teclado la base y el exponente. Pueden ocurrir tres cosas:
// El exponente sea positivo, sólo tienes que imprimir la potencia.
// El exponente sea 0, el resultado es 1.
// El exponente sea negativo, el resultado es 1/potencia con el exponente positivo.
function ejercicio7() {
    var base = Number(prompt("Ingrese la base a potenciar"));
    var exponente = Number(prompt("Ingrese el exponente que potenciara"));
    if (exponente > 0) {
        return Math.pow(base, exponente);
    }
    else if (exponente < 0) {
        var potencia = (exponente) * (-1);
        return Math.pow(base, (1 / potencia));
    }
    return 1;
}
// alert(ejercicio7());
// Algoritmo que pida dos números ‘nota’ y ‘edad’ y un carácter ‘sexo’ y muestre el mensaje ‘ACEPTADA’ si la nota es mayor o igual a cinco, la edad es mayor o igual a dieciocho y el sexo es ‘F’. En caso de que se cumpla lo mismo, pero el sexo sea ‘M’, debe imprimir ‘POSIBLE’. Si no se cumplen dichas condiciones se debe mostrar ‘NO ACEPTADA’.
function ejercicio8() {
    var nota = Number(prompt("Ingrese su nota de la materia"));
    var edad = Number(prompt("Ingrese su edad"));
    var sexo = String(prompt("Ingrese su sexo (M o F)"));
    var caracter = sexo.charAt(0);
    if (nota >= 5 && edad >= 18 && caracter == "F") {
        return "ACEPTADA";
    }
    else if (nota >= 5 && edad >= 18 && caracter == "M") {
        return "POSIBLE";
    }
    return "NO ACEPTADA";
}
// alert(ejercicio8());
// Algoritmo que pida tres números y los muestre ordenados (de mayor a menor)
function ejercicio9() {
    var numeros = [];
    for (var i = 1; i <= 3; i++) {
        numeros.push(Number(prompt("Ingrese el numero ".concat(i))));
    }
    return numeros.sort(function (a, b) { return b - a; });
}
// console.log(ejercicio9());
// Algoritmo que pida los puntos centrales x1,y1,x2,y2 y los radios r1,r2 de dos circunferencias y las clasifique en uno de estos estados:
// exteriores
// tangentes exteriores
// secantes
// tangentes interiores
// interiores
// concéntricas
function ejercicio10() {
    var x1 = Number(prompt("Ingrece la cordenada x1"));
    var y1 = Number(prompt("Ingrece la cordenada y1"));
    var x2 = Number(prompt("Ingrece la cordenada x2"));
    var y2 = Number(prompt("Ingrece la cordenada y2"));
    var r1 = Number(prompt("Ingrese el radio del punto central 1"));
    var r2 = Number(prompt("Ingrese el radio del punto central 2"));
    var distancias = 0;
    distancias = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
    if (distancias > (r1 + r2)) {
        return "Exteriores";
    }
    else if (distancias == (r1 + r2)) {
        return "Tangentes exteriores";
    }
    else if (distancias < (r1 + r2) && distancias > (r1 + r2)) {
        return "Secantes";
    }
    else if (distancias == ((r1 - r2) * (-1))) {
        return "Tangentes interiores";
    }
    else if (distancias < (r1 + r2)) {
        return "Interiores";
    }
    else if (distancias == 0 && r1 == r2) {
        return "Concéntricas";
    }
    return "Lo que ingreso es incorrecto";
}
// alert(ejercicio10());
// Programa que lea 3 datos de entrada A, B y C. Estos corresponden a las dimensiones de los lados de un triángulo. El programa debe determinar que tipo de triangulo es, teniendo en cuenta los siguiente:
// Si se cumple Pitágoras entonces es triángulo rectángulo
// Si sólo dos lados del triángulo son iguales entonces es isósceles.
// Si los 3 lados son iguales entonces es equilátero.
// Si no se cumple ninguna de las condiciones anteriores, es escaleno.
function ejercicio11() {
    var A = Number(prompt("Ingrese el lado A"));
    var B = Number(prompt("Ingrese el lado B"));
    var C = Number(prompt("Ingrese el lado C"));
    if ((A + B) == C) {
        return "Triangulo rectangulo";
    }
    else if (A == B && B == C && C == A) {
        return "Trinagulo equilatero";
    }
    else if (A == B || B == C || C == A) {
        return "Trinagulo isosceles";
    }
    return "Triangulo escaleno";
}
// alert(ejercicio11());
// Escribir un programa que lea un año indicar si es bisiesto. Nota: un año es bisiesto si es un número divisible por 4, pero no si es divisible por 100, excepto que también sea divisible por 400.
function ejercicio12() {
    var anio = Number(prompt("Introduzca el año"));
    if ((anio % 4) == 0 && (anio % 100) != 0) {
        return "Año bisiesto";
    }
    else if ((anio % 400) == 0) {
        return "Año bisiesto";
    }
    return "Año no bisiesto";
}
// alert(ejercicio12());
// Escribe un programa que pida una fecha (día, mes y año) y diga si es correcta.
// const meses = {
//     1:"Enero",
//     2:"Febrero",
//     3:"Marzo",
//     4:"Abril",
//     5:"Mayo",
//     6:"Junio",
//     7:"Julio",
//     8:"Agosto",
//     9:"Septiembre",
//     10:"Octubre",
//     11:"Noviembre",
//     12:"Diciembre"
// }
function ejercicio13() {
    var dia = Number(prompt("Ingrese el dia en numero"));
    var mes = Number(prompt("Ingrese el mes en numero"));
    var anio = Number(prompt("Ingrese el año en numero"));
    var diasxMes = {
        1: 31,
        2: {
            noBisiesto: 28,
            Bisiesto: 29
        },
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };
    if (((anio % 4) == 0 && (anio % 100) != 0) || (anio % 400) == 0) {
        // bisiesto
        if (mes > 0 && mes <= 12) {
            if (dia > 0 && dia <= (mes != 2 ? diasxMes[mes] : diasxMes[mes].Bisiesto)) {
                return "".concat(dia.toString().padStart(2, '0'), " / ").concat(mes.toString().padStart(2, '0'), " / ").concat(anio);
            }
        }
    }
    else {
        // no bisiesto
        if (mes > 0 && mes <= 12) {
            if (dia > 0 && dia <= (mes != 2 ? diasxMes[mes] : diasxMes[mes].noBisiesto)) {
                return "".concat(dia.toString().padStart(2, '0'), " / ").concat(mes.toString().padStart(2, '0'), " / ").concat(anio);
            }
        }
    }
    return "La fecha es incorrecta";
}
// alert(ejercicio13());
// La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por la uva que entrega en un embarque, considerando lo siguiente: si es de tipo A, se le cargan 20 céntimos al precio inicial cuando es de tamaño 1; y 30 céntimos si es de tamaño 2. Si es de tipo B, se rebajan 30 céntimos cuando es de tamaño 1, y 50 céntimos cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida.
function ejercicio14() {
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
}
// ejercicio14();
// El director de una escuela está organizando un viaje de estudios, y requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de viajes por el servicio. La forma de cobrar es la siguiente: si son 100 alumnos o más, el costo por cada alumno es de 65 euros; de 50 a 99 alumnos, el costo es de 70 euros, de 30 a 49, de 95 euros, y si son menos de 30, el costo de la renta del autobús es de 4000 euros, sin importar el número de alumnos. Realice un algoritmo que permita determinar el pago a la compañía de autobuses y lo que debe pagar cada alumno por el viaje.
function ejercicio15() {
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
}
// ejercicio15();
// La política de cobro de una compañía telefónica es: cuando se realiza una llamada, el cobro es por el tiempo que ésta dura, de tal forma que los primeros cinco minutos cuestan 1 euro, los siguientes tres, 80 céntimos, los siguientes dos minutos, 70 céntimos, y a partir del décimo minuto, 50 céntimos. Además, se carga un impuesto de 3 % cuando es domingo, y si es otro día, en turno de mañana, 15 %, y en turno de tarde, 10 %. Realice un algoritmo para determinar cuánto debe pagar por cada concepto una persona que realiza una llamada.
function ejercicio16() {
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
}
// ejercicio16();
// Realiza un programa que pida por teclado el resultado (dato entero) obtenido al lanzar un dado de seis caras y muestre por pantalla el número en letras (dato cadena) de la cara opuesta al resultado obtenido.
// Nota 1: En las caras opuestas de un dado de seis caras están los números: 1-6, 2-5 y 3-4.
// Nota 2: Si el número del dado introducido es menor que 1 o mayor que 6, se mostrará el mensaje: “ERROR: número incorrecto.”.
// Ejemplo:
// Introduzca número del dado: 5
// En la cara opuesta está el "dos".
function ejercicio17() {
    var numDado = Number(prompt("Introducta el numero del dado que cayó"));
    var opuestos = {
        1: "seis",
        2: "cinco",
        3: "cuatro",
        4: "tres",
        5: "dos",
        6: "uno",
        "default": "ERROR: n\u00FAmero incorrecto"
    };
    if (numDado > 0 && numDado <= 6) {
        return "Numero del dado: ".concat(numDado, ", cara opuesta: ").concat(opuestos[numDado]);
    }
    return "ERROR: n\u00FAmero incorrecto";
}
alert(ejercicio17());
// Realiza un programa que pida el día de la semana (del 1 al 7) y escriba el día correspondiente. Si introducimos otro número nos da un error.
function ejercicio18() {
    var dia = Number(prompt("Ingrese el dia en numero entero"));
    var dias = {
        1: "Lunes",
        2: "Martes",
        3: "Miercoles",
        4: "Jueves",
        5: "Viernes",
        6: "Sabado",
        7: "Domingo",
        "default": "El numero ingresado no es correcto"
    };
    return (dias[dia] || dias["default"]);
}
// alert(ejercicio18());
// Escribe un programa que pida un número entero entre uno y doce e imprima el número de días que tiene el mes correspondiente.
function ejercicio19() {
    var mes = Number(prompt("Ingrese un numero entre el 1 y el 12"));
    var diasxMes = {
        1: "Mes Enero, tiene 31 dias",
        2: "Mes Febrero, tiene 28 dias",
        3: "Mes Marzo, tiene 31 dias",
        4: "Mes Abril, tiene 30 dias",
        5: "Mes Mayo, tiene 31 dias",
        6: "Mes Junio, tiene 30 dias",
        7: "Mes Julio, tiene 31 dias",
        8: "Mes Agosto, tiene 31 dias",
        9: "Mes Septiembre, tiene 30 dias",
        10: "Mes Octubre, tiene 31 dias",
        11: "Mes Noviembre, tiene 30 dias",
        12: "Mes Diciembre, tiene 31 dias",
        "default": "El numero que ingreso es incorrecto"
    };
    return diasxMes[mes] || diasxMes["default"];
}
// alert(ejercicio19());
