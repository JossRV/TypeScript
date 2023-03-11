/**
 * 1. Diseñe un programa que imprima la tabla de multiplicar que indique el usuario
 * 2. Diseñe un programa que solicite una letra y la siga solicitando hasta ingresar la letra z, al ingresar la letra z el programa debe terminar
 * mostrando una sola ventana la coleccion de letras ingresadas y despidiendose
 * 3. Diseñe un programa que simule un login, pidiendo ingresar usuario y contraseña, el programa debe de poder avisar si el usuario
 * o la contraseña son erroneos y cancelarse a los 5 intentos fallidos
 * 4. Diseñe un programa que solcite la hora en formato 24 hrs, tipo entero, al obtener el dato de la hora el programa debe de indicar si
 * es de mañana, tarde o noche
 */
var Ejercicios = /** @class */ (function () {
    function Ejercicios() {
    }
    Ejercicios.ejercicio1 = function () {
        var numero = Number(prompt("Tabla de multiplicar\n Ingrese el numero a multiplicar"));
        var tabla = "";
        for (var i = 1; i < 11; i++) {
            tabla += "".concat(i, " x ").concat(numero, " = ").concat(i * numero, "\n");
        }
        console.log(tabla);
    };
    Ejercicios.ejercicio2 = function () {
        var letra;
        var cadena = "";
        var numero = 0;
        while (numero != 1) {
            letra = prompt("inserte una letra del abecedario: " !== null && "inserte una letra del abecedario: " !== void 0 ? "inserte una letra del abecedario: " : "");
            if (letra != "z") {
                cadena += "".concat(letra, ", ");
                numero = 0;
            }
            else {
                cadena += "".concat(letra, ", es toda su lista de letras ingresadas, hasta luego.");
                numero = 1;
            }
        }
        console.log(cadena);
    };
    Ejercicios.ejercicio3 = function () {
        var bandera = 0;
        while (bandera != 5) {
            var usuario = prompt("Usuario:" !== null && "Usuario:" !== void 0 ? "Usuario:" : "");
            var contraseña = prompt("Contraseña:" !== null && "Contraseña:" !== void 0 ? "Contraseña:" : "");
            if (usuario == "joss" && contraseña == "1234") {
                alert("Usted a ingresado");
                bandera = 5;
            }
            else {
                alert("Usuario o Contrase\u00F1a incorrecta, tiene ".concat(4 - bandera, " intentos "));
                bandera += 1;
            }
        }
    };
    Ejercicios.ejercicio4 = function () {
        var hora = Number(prompt("Ingrese la hora en formato de 24 hrs"));
        if (hora >= 0 && hora <= 6) {
            alert("".concat(hora, " hrs, es la madrugada"));
        }
        else if (hora > 6 && hora <= 12) {
            alert("".concat(hora, " hrs, es la ma\u00F1ana"));
        }
        else if (hora > 12 && hora <= 19) {
            alert("".concat(hora, " hrs, es la tarde"));
        }
        else if (hora > 19 && hora <= 24) {
            alert("".concat(hora, " hrs, es la noche"));
        }
        else {
            alert("La hora ingresada \"".concat(hora, "\", no existe dentro del formato de 24 horas"));
        }
    };
    return Ejercicios;
}());
// Ejercicios.ejercicio1();
// Ejercicios.ejercicio2();
// Ejercicios.ejercicio3();
// Ejercicios.ejercicio4();
