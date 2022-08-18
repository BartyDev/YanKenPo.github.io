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
        resultado = "Piedra 🪨"
    } else if (jugada == 2) {
        resultado = "Papel 📃"
    } else if (jugada === 3) {
        resultado = "Tijera ✂️"
    } else {
        resultado = "ERROR!"
    }
    return resultado
}

function combate(pc, jugador) {
    let definiendo = "";
    if (pc == jugador) {
        definiendo = "Empate 🤝";
        empates++;
    } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
        definiendo = "Ganaste 🏆";
        triunfos++;
    } else {
        definiendo = "Perdiste 😵";
        perdidas++;
    }
    return definiendo;
}

function coronando() {
    if (triunfos > perdidas) {
        alert("YOU WIN 🎉")
    } else {
        alert("YOU LOSE 💀")
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
    jugador = prompt("Elige: \n1) para 🥌  \n2) para 📃  \n3) para ✂️");
    // alert("Elegiste " + jugador)
    alert("Tú eliges " + eleccion(jugador));
    alert("PC elige " + eleccion(pc));
    

    // COMBATE
    alert(combate(pc, jugador));
}

alert(nombre.toUpperCase() + ", TU GANASTE " + triunfos + " 🏆, EMPATASTE " + empates + " 🤝 y PERDISTE " + perdidas + " 😵.");

coronando();
