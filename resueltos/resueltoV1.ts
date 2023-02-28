class EjercicioV1{
    static ejercicio1(){
        let numeros:number[] = [];
        let cubo:number [] = [];
        for(let i=0; i<10; i++){
            numeros.push(Math.floor(Math.random() * 15));
        }
        console.table(numeros);
        numeros.map(numero=>{
            cubo.push(numero **3);
            
        });
        console.table(cubo);
    }
    static ejercicio2(){
        let cadenas:string[] = [];
        let copiaCadena:string[] = [];
        for(let i=0; i<5; i++){
            cadenas.push(prompt('Escribe cadena '+ (i+1)) ?? "");
        }
        console.table(cadenas);
        copiaCadena = [...cadenas.reverse()];
        console.table(copiaCadena);
    }
    static ejercicio3(){
        let calificaciones:number[] = [];
        let max:number = 0;
        let min:number = 0;
        let valor:number = 0;
        let promedio:number = 0;
        for(let i=0; i<5; i++){
            valor = Number(prompt('Escribe el numero '+ (i+1)))
            calificaciones.push(valor);
            promedio += valor;
        }
        calificaciones = calificaciones.sort((a, b) =>{
            return a - b;
        });
        max = calificaciones[4];
        min = calificaciones[0];
        promedio = promedio/calificaciones.length;
        console.log(`
            Calificacion mas alta ${max}
            Calificacion mas baja ${min}
            Calificacion media ${promedio}
        `);
    }
    static ejercicio4(){
        let numeros:number[] = [];
        for(let i=0; i<10; i++){
            numeros.push(Number(prompt('Escribe el numero '+ (i+1))));
            if(numeros[i] < 0){
                // detener todo hasta la funcion
                // return false;
                break;
            }
        }
        console.table(numeros);
    }
    static ejercicio5(){
        let numeros:number[] = [];
        for(let i=0; i<20; i++){
            numeros.push(Math.floor(Math.random() * 15));
        }
        console.table(numeros.sort((a,b) => a-b));
    }
}

// let objeto = new EjercicioV1();
// objeto.ejercicio1();

// EjercicioV1.ejercicio1();
// EjercicioV1.ejercicio2();
// EjercicioV1.ejercicio3();
// EjercicioV1.ejercicio4();
EjercicioV1.ejercicio5();
