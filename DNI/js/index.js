console.log("Hola mundo!")

function comprobacion() {
    const letras = ["T","R","W","A","G","M","Y","F","P","D","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    
    let juntarDni = document.getElementById(nif).value;
    const i = 0;
    let identificador= 0;
    let separarDni = ' ';
    let resto;
    
    let dnimayus = '';
}
    for (i = 0 ; i < separarDni().length ; i ++) {

        if (i <=7){
            if (isNaN(separarDni(i))) {
                identificador = 1;
            }
        }
        else{
            if (isNaN(separarDni[8])){
                separarDni[8] = separarDni[8].toUpperCase();
            }
            else{
                identificador = 1;
            }


        }
    }
    if (i !=9){
        identificador = 1;
    }
    else{
        dnimayus = separarDni.join("");
        numerosdeldni = dnimayus.substring[0,8];
        letrafinal= dnimayus.substring[9];
        resto = numerosdeldni / 23;
        if(vector[resto] != letrafinal) {
            identificador = 2;
        }
        }

    if (identificador == 0){
        alert ("DNI correcto");
    }
    else if (identificador == 1){
        alert("DNI incorrecto");
    }
    else if (identificador == 2){
        alert("Letra erronea");
    }