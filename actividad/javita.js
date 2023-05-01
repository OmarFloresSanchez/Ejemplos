//Arreglo inicial
let botones = [[16, 16, 16, 16, 16, 16],
[16, 0, 1, 2, 3, 16],
[16, 4, 5, 6, 7, 16],
[16, 8, 9, 10, 11, 16],
[16, 12, 13, 14, 15, 16],
[16, 16, 16, 16, 16, 16]];
//Variable para movimientos
var contador = 0;
//Funcion al presionar una casilla
function puchar(j, i, botones) {
    //Se verifica que haya un 0 cerca
    b1 = botones[j + 1][i].textContent;
    b2 = botones[j - 1][i].textContent;
    b3 = botones[j][i + 1].textContent;
    b4 = botones[j][i - 1].textContent;
    //Boton actual
    const boton = event.currentTarget;
    //Se busca donde esta el 0
    let nuevo;
    if(botones[j][i]==boton){
        console.log(boton.textContent);
        /*
        //Se incrementa el contador de movimientos
        contador += 1;
        const mov = document.querySelector("#movimientos");
        mov.textContent = contador;
        if (b1 == 0) {
            nuevo = botones[j + 1][i]; 
        }
        if (b2 == 0) {
            nuevo = botones[j - 1][i];
        }
        if (b3 == 0) {
            nuevo = botones[j][i + 1];
        }
        if (b4 == 0) {
            nuevo = botones[j][i - 1];
        }*/
    }
    //Se intercambian botones
    /*let actual = boton.textContent;
    let cero = nuevo.textContent;

    boton.textContent = cero;
    nuevo.textContent = actual;
    return;*/

}
//Funcion pa medir el tiempo
function startTimer() {
    const time = document.querySelector('#tiempo');
    startTime = Date.now();
    timer = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        time.textContent = elapsedTime;
    }, 1000);
}


//Se lo ponen query selector a cada parte del arreglo
botones[1][1] = document.querySelector("#cero");
botones[2][1] = document.querySelector("#uno");
botones[3][1] = document.querySelector("#dos");
botones[4][1] = document.querySelector("#tres");

botones[1][2] = document.querySelector("#cuatro");
botones[2][2] = document.querySelector("#cinco");
botones[3][2] = document.querySelector("#seis");
botones[4][2] = document.querySelector("#siete");

botones[1][3] = document.querySelector("#ocho");
botones[2][3] = document.querySelector("#nueve");
botones[3][3] = document.querySelector("#diez");
botones[4][3] = document.querySelector("#once");

botones[1][4] = document.querySelector("#doce");
botones[2][4] = document.querySelector("#trece");
botones[3][4] = document.querySelector("#catorce");
botones[4][4] = document.querySelector("#quince");
//Funcion del juego
function juegoInicia() {
    //Inicia el tiempo
    startTimer();
    //Se recorren las casillas
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            //Se agrega listener
            botones[j][i].addEventListener("click", puchar(j, i, botones));
        }
    }
}

//Inicia el juego
const juego = document.querySelector('#jugar');
juego.addEventListener("click", juegoInicia);