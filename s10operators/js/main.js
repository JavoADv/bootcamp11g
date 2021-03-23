/* índice de masa coporal IMC= peso/altura*/

var peso = peso ;
var altura = altura;
var IMC = IMC;
var altura2 = (altura * 100);


alert("Este script calcula el IMC");
var peso = prompt ("Ingresa tu peso");
var altura = prompt ("Ingresa tu altura");

peso = parseInt (peso);
altura = parseFloat (altura);
/*var altura2 = (altura * 100);
IMC = (peso/altura2);*/

IMC = (peso/(altura * altura));

alert ("Tu IMC es: " +IMC);

if (IMC <= 18.5) {
    alert ("Peso inferior al normal");
}

if (IMC >= 18.5 && IMC <= 24.9) {
    alert ("Tu peso es normal");
}

if (IMC >= 25.0 && IMC <= 29.9) {
    alert ("Tu peso es superior al normal");
}

if (IMC >= 30.0 ) {
    alert ( "¡Muévete!");
} else {
    alert ("Valor no definido");
}

/* Altura dependiendo del país y género

var altura = parseFloat (altura);
var nacionalidad = "nacionalidad";
var genero = "genero";

alert ("Este script análisa tu altura con respecto a tu género y tu nacionalidad");
var genero = prompt ("Ingresa tu genero");
var nacionalidad = prompt ("Ingresa tu nacionalidad");
var altura = prompt ("Ingresa tu altura");

alert ("Tu genero: " +genero);
alert ("Tu nacionalidad: " +nacionalidad);
alert ("Tu altura: " +altura);

switch (nacionalidad) {
    case "mexicana":
        if (genero == "hombre" && altura == 169.9) {
            alert ("Tu altura es promedio");
        } else if (genero == "hombre" && altura == 170.0) {
            alert ("Tu altura es promedio con respecto al género masculino");
        } else if (genero == "hombre" && altura >= 170.0) {
            alert ("Tu altura es mayor al promedio");
        } else if (genero == "hombre" && altura <= 170.0) {
            alert ("Tu estatura es menor al promedio");
        } else {
            alert ("Valor no definido");
        }

        if (genero == "mujer" && altura == 169.9) {
            alert ("Tu altura es promedio");
        } else if (genero == "mujer" && altura == 160.8) {
            alert ("Tu altura es promedio con respecto al género masculino");
        } else if (genero == "mujer" && altura >= 160.8) {
            alert ("Tu altura es mayor al promedio");
        } else if (genero == "mujer" && altura <= 160.8) {
            alert ("Tu estatura es menor al promedio");
        } else {
            alert ("Valor no definido");
        }
}*/




