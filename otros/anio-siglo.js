function siglo(anio) {
    var resultado = anio % 100;
    if (anio > 100) {
        if (resultado != 0) {
            return Math.floor(anio / 100) + 1;
        }
        else {
            return (anio / 100);
        }
    }
    else {
        return 1;
    }
}
function siglo2(anio) {
    var resultado = anio % 100;
    if (resultado != 0) {
        return Math.floor(anio / 100) + 1;
    }
    else {
        return (anio / 100);
    }
}
function siglo3(anio) {
    var resultado = anio % 100;
    if (resultado != 0) {
        return Math.ceil(anio / 100);
    }
    else {
        return (anio / 100);
    }
}
// con roun no funciona puesto que quedara en el mismo numero si es menos de .5 y si es mas de .5 aumentara el numero
function siglo4(anio) {
    var resultado = anio % 100;
    if (resultado != 0) {
        return Math.round(anio / 100);
    }
    else {
        return (anio / 100);
    }
}
var anio = Number(prompt("escriba el año"));
console.log(siglo3(anio));
