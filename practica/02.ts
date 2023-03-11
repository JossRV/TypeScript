/**
 * 1. Diseñe un programa que imprima la tabla de multiplicar que indique el usuario
 * 2. Diseñe un programa que solicite una letra y la siga solicitando hasta ingresar la letra z, al ingresar la letra z el programa debe terminar 
 * mostrando una sola ventana la coleccion de letras ingresadas y despidiendose
 * 3. Diseñe un programa que simule un login, pidiendo ingresar usuario y contraseña, el programa debe de poder avisar si el usuario
 * o la contraseña son erroneos y cancelarse a los 5 intentos fallidos
 * 4. Diseñe un programa que solcite la hora en formato 24 hrs, tipo entero, al obtener el dato de la hora el programa debe de indicar si 
 * es de mañana, tarde o noche
 */

class Ejercicios{
    static ejercicio1(){
        let numero:number = Number(prompt("Tabla de multiplicar\n Ingrese el numero a multiplicar"));
        let tabla:any = ``;
        for(let i=1; i<11; i++){
            tabla+=`${i} x ${numero} = ${i * numero}\n`
        }
        console.log(tabla);
    }
    static ejercicio2(){
        let letra:any;
        let cadena:string = ``;
        let numero:number = 0;
        while (numero != 1) {
            letra = prompt("inserte una letra del abecedario: " ?? "");
            if(letra != "z"){
                cadena += `${letra}, `;
                numero = 0;
            }else{
                cadena += `${letra}, es toda su lista de letras ingresadas, hasta luego.`;
                numero = 1;
            }
        }
        console.log(cadena);
    }
    static ejercicio3(){
        let bandera:number = 0; 
        while(bandera!=5){
            let usuario:any = prompt("Usuario:"??"");
            let contraseña:any =prompt("Contraseña:"??"");
            if(usuario == "joss" && contraseña == "1234"){
                alert("Usted a ingresado");
                bandera = 5;
            }else{
                alert(`Usuario o Contraseña incorrecta, tiene ${4-bandera} intentos `)
                bandera+=1;
            }
        }
    }
    static ejercicio4(){
        let hora:number = Number(prompt("Ingrese la hora en formato de 24 hrs"));
        if(hora >= 0 && hora <= 6 ){
            alert(`${hora} hrs, es la madrugada`);
        }else if(hora > 6 && hora <= 12){
            alert(`${hora} hrs, es la mañana`);
        }else if(hora > 12 && hora <= 19){
            alert(`${hora} hrs, es la tarde`);
        }else if(hora > 19 && hora <= 24){
            alert(`${hora} hrs, es la noche`);
        }else{
            alert(`La hora ingresada "${hora}", no existe dentro del formato de 24 horas`)
        }
    }
}

// Ejercicios.ejercicio1();
// Ejercicios.ejercicio2();
// Ejercicios.ejercicio3();
// Ejercicios.ejercicio4();