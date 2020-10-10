console.log("Hola mundo!")

function comprobacion() {
    let letras = ["T","R","W","A","G","M","Y","F","P","D","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    let numero;
    dni= document.getElementById("nif").innerHTML;
    //let resto;
    //let letra;
    let letra1;
    const formaDni = /^[XYZ]?\d{5,8}[A,Z]$/;
    dni = dni.toUpperCase();

if (formaDni.test(dni) === true ){
    numero = dni.substr(0,dni.length-1);
    numero = numero.replace("X",0);
    numero = numero.replace("Y",1);
    numero = numero.replace("Z",2);
    letra1 = dni.substr(dni.length-1,1);
    numero = numero%23;
    
    letras = letras.substr(numero, numero+1);
    if (letras!=letra1){
        //alert("Error letra mal")
        document.write("ERROR, letra mal");
        return false;
    }
    else {
        //alerta("Correcto");
        document.write("Bien, DNI correcto");
        return true;
    }
}
else{
    document.write("DNI no valido");
    //alerta("No valido");
    return false;
}
}