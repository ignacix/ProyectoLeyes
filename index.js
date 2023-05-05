function obtenerValores(){
    let select1 = document.getElementById("opcionesCI");
    let valor1 = select1.value;
    let select2 = document.getElementById("opcionesCR");
    let valor2 = select2.value;

    if(valor1=="aprueba"){

        if(valor2=="aprueba"){
            document.getElementById("resultado").innerHTML ="Resultado: El proyecto aprobado por la CI y CR PASA AL PODER EJECUTIVO)";    
        }
        else{
            if(valor2=="rechaza"){
                document.getElementById("resultado").innerHTML ="Resultado: El proyecto no puede volver a tratarse en las sesiones de ese año";
            }            
            else{
                document.getElementById("resultado").innerHTML ="Resultado: Vuelve a la camara de origen";
            }
        }
    }
    else{
        document.getElementById("resultado").innerHTML ="Resultado: Espera un año";
        console.log("No seleccionaste aprueba");
    }

    console.log(valor1);
}

let boton = document.getElementById("miBoton");

boton.addEventListener('click', obtenerValores);