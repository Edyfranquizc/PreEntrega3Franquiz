alert ('BIENVENIDO!!');
const seguro = confirm ('Deseas que te salude por tu nombre');
if (seguro) {
    const nombre = prompt ('Cuál es tu nombre?');
    alert (`Hola ${nombre}!`);
}

function convertir() {
    var valor = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    de=document.getElementById("de").value;
    a=document.getElementById("a").value;
    var dolar=178.36;
    var euro=188.30;
    resultado=0;
    // peso a Dolar
    if(de==1&&a==2){
        resultado=valor/dolar;
    }
    // Peso a Euro
    else if(de==1&&a==3){
        resultado=valor/euro;
    }
     // Dolar a peso
    else if(de==2&&a==1){
        resultado=valor*dolar;
    }
    // Dolar a Euro
    else if(de==2&&a==3){
        resultado=valor*(dolar/euro);
    }
    // Euro a peso
    else if(de==3&&a==1){
        resultado=valor*euro;
    }
    // Euro a dolar
    else if(de==3&&a==2){
        resultado=valor*(euro/dolar);
    }
    // peso apeso, dolar a dolar y euro a euro
    else{
        resultado=valor;
    }

    document.getElementById("resultado").innerHTML="Resultado : $ "+resultado.toFixed(2);
}








    

