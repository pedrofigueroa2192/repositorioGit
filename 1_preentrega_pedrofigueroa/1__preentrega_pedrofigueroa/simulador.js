let usuario = prompt ("Ingresa tu usuario o nombre: ");

let cantidad = prompt ("Hola " + usuario + " indica a cuantas cantidades vamos a calcular el promedio");
let suma = 0;
let cantidad_uno = 0;

for (let i = 1; i <= cantidad; i ++){
    let cantidad_uno = parseInt (prompt ("Ingresa la cantidad: "));
    suma = suma + cantidad_uno;
} 

let promedio = suma/cantidad;
if (promedio >= 10){
    alert (usuario +"el promedio es: "+ promedio +", no puedes continuar, baja el promedio para poder continuar" );
}
else {
    alert ("Felicidades " + usuario +"el promedio es: "+ promedio + ", puedes continuar");
}