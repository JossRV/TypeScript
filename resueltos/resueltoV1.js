var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var EjercicioV1 = /** @class */ (function () {
    function EjercicioV1() {
    }
    EjercicioV1.ejercicio1 = function () {
        var numeros = [];
        var cubo = [];
        for (var i_1 = 0; i_1 < 10; i_1++) {
            numeros.push(Math.floor(Math.random() * 15));
        }
        console.table(numeros);
        numeros.map(function (numero) {
            cubo.push(Math.pow(numero, 3));
        });
        console.table(cubo);
    };
    EjercicioV1.ejercicio2 = function () {
        var _a;
        var cadenas = [];
        var copiaCadena = [];
        for (var i_2 = 0; i_2 < 5; i_2++) {
            cadenas.push((_a = prompt('Escribe cadena ' + (i_2 + 1))) !== null && _a !== void 0 ? _a : "");
        }
        console.table(cadenas);
        copiaCadena = __spreadArray([], cadenas.reverse(), true);
        console.table(copiaCadena);
    };
    EjercicioV1.ejercicio3 = function () {
        var calificaciones = [];
        var max = 0;
        var min = 0;
        var valor = 0;
        var promedio = 0;
        for (var i_3 = 0; i_3 < 5; i_3++) {
            valor = Number(prompt('Escribe el numero ' + (i_3 + 1)));
            calificaciones.push(valor);
            promedio += valor;
        }
        calificaciones = calificaciones.sort(function (a, b) {
            return a - b;
        });
        max = calificaciones[4];
        min = calificaciones[0];
        promedio = promedio / calificaciones.length;
        console.log("\n            Calificacion mas alta ".concat(max, "\n            Calificacion mas baja ").concat(min, "\n            Calificacion media ").concat(promedio, "\n        "));
    };
    EjercicioV1.ejercicio4 = function () {
        var numeros = [];
        for (var i_4 = 0; i_4 < 10; i_4++) {
            numeros.push(Number(prompt('Escribe el numero ' + (i_4 + 1))));
            if (numeros[i_4] < 0) {
                // detener todo hasta la funcion
                // return false;
                break;
            }
        }
        console.table(numeros);
    };
    EjercicioV1.ejercicio5 = function () {
        var numeros = [];
        for (var i_5 = 0; i_5 < 20; i_5++) {
            numeros.push(Math.floor(Math.random() * 15));
        }
        console.table(numeros.sort(function (a, b) { return a - b; }));
    };
    return EjercicioV1;
}());
// let objeto = new EjercicioV1();
// objeto.ejercicio1();
// EjercicioV1.ejercicio1();
// EjercicioV1.ejercicio2();
// EjercicioV1.ejercicio3();
// EjercicioV1.ejercicio4();
EjercicioV1.ejercicio5();
