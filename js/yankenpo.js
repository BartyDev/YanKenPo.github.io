//MY GAME IS STONE PAPER SCISORS 
alert("Juega al YAN KEN PO - con BartyGames")
nombre = prompt("Ingresa tu nombre : ");

alert("Bienvenido(a) " + nombre.toUpperCase())


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra πͺ¨"
    } else if (jugada == 2) {
        resultado = "Papel π"
    } else if (jugada == 3) {
        resultado = "Tijera βοΈ"
    } else {
        resultado = "ERROR!"
    }
    return resultado
}

function combate(pc, jugador) {
    let definiendo = "";
    if (pc == jugador) {
        definiendo = "Empate π€";
        empates++;
    } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
        definiendo = "Ganaste π";
        triunfos++;
    } else {
        definiendo = "Perdiste π΅";
        perdidas++;
    }
    return definiendo;
}

function coronando() {
    if (triunfos > perdidas) {
        alert("YOU WIN π")
    } else {
        alert("YOU LOSE π")
    };
}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let empates = 0;

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);
    jugador = prompt("Elige: \n1) para π₯  \n2) para π  \n3) para βοΈ");
    // alert("Elegiste " + jugador)
    alert("TΓΊ eliges " + eleccion(jugador));
    alert("PC elige " + eleccion(pc));
    

    // COMBATE
    alert(combate(pc, jugador));
}

alert(nombre.toUpperCase() + ", TU GANASTE " + triunfos + " π, EMPATASTE " + empates + " π€ y PERDISTE " + perdidas + " π΅.");

coronando();
