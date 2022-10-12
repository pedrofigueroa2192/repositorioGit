const ladosTriangulo = [];
let cantidad = 3;

let usuario = prompt ("Ingresa tu usuario o nombre: ");
 do 
  {
    let entrada  = prompt ( "Ingresa la longitud de un lado del triangulo: ");
    ladosTriangulo.push (entrada);  

 }
 while ( ladosTriangulo.length != 3);

 //alert ("La cantidad de lados es: " + ladosTriangulo.length) 

let operacion = prompt ("Que operacion deseas realizar para el primer y tercer lado de nuestro triangulo : 1.- Multiplicacion 2.- resta 3.- division: ")

if (operacion == 1 ){
    let resultado = ladosTriangulo[0] * ladosTriangulo[2];
    alert ("El resultado de la multiplicacion es: " + resultado);
}
if (operacion == 2 ){
    let resultado = ladosTriangulo[0] - ladosTriangulo[2];
    alert ("El resultado de la resta es: " + resultado);
}

if (operacion == 3 ){
    let resultado = ladosTriangulo[0] / ladosTriangulo[2];
    alert ("El resultado de la division es: " + resultado);
}
else {
    alert (" Dicha opcion no esta disponible ");
}

