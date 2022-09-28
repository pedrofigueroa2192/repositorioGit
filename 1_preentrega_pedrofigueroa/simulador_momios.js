var valor_momio = document.getElementById ("valor_momio");
 valor_momio.addEventListener('keyup',calcular);
 monto_apostar = document.getElementById ("monto_apostar");
 monto_apostar.addEventListener( 'change',calcular);
 monto_ganancia = document.getElementById ("monto_ganancia");


 tipo_momio = document.getElementById ("tipo_momio");
 tipo_momio.addEventListener('change', calcular);

var ganancia; 

function calcular() {
    momio = valor_momio;
    momio = parseFloat(momio);
    apuesta = monto_apostar;
    apuesta = parseFloat(apuesta);

    if (tipo_momio == "Decimal") {
        ganancia = momio * apuesta ;
        monto_ganancia.innerHTML = ganancia;
    }

    if (tipo_momio == "Americano") {
        alert ("0");

    }
}