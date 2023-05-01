

//Arreglo inicial
let botones=[[16,16,16,16,16,16],
             [16,0,1,2,3,16],
             [16,4,5,6,7,16],
             [16,8,9,10,11,16],
             [16,12,13,14,15,16],
             [16,16,16,16,16,16]];
//Variable para movimientos
var contador=0;
//Se busca en que casilla esta el cero
             function buscar(){
                let a;
                a=document.querySelector("#cero");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#cero";
                }
                a=document.querySelector("#uno");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#uno";   
                }
                a=document.querySelector("#dos");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#dos";   
                }
                a=document.querySelector("#tres");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#tres";   
                }
                a=document.querySelector("#cuatro");
                if(a.textContent==0){
                    return "#cuatro";   
                }
                a=document.querySelector("#cinco");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#cinco";   
                }
                a=document.querySelector("#seis");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#seis";   
                }
                a=document.querySelector("#siete");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#siete";   
                }
                a=document.querySelector("#ocho");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#ocho";   
                }
                a=document.querySelector("#nueve");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#nueve";   
                }
                a=document.querySelector("#diez");
                if(a.textContent==0){
                    return "#diez";   
                }
                a=document.querySelector("#once");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#once";   
                }
                a=document.querySelector("#doce");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#doce";   
                }
                a=document.querySelector("#trece");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#trece";   
                }
                a=document.querySelector("#catorce");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#catorce";   
                }
                a=document.querySelector("#quince");
                if(a.textContent==0){
                    console.log(a.textContent);
                    return "#quince";   
                }
            }
//Se lo ponen query selector a cada parte del arreglo
botones[1][1]=document.querySelector("#cero");
botones[2][1]=document.querySelector("#uno");
botones[3][1]=document.querySelector("#dos");
botones[4][1]=document.querySelector("#tres");

botones[1][2]=document.querySelector("#cuatro");
botones[2][2]=document.querySelector("#cinco");
botones[3][2]=document.querySelector("#seis");
botones[4][2]=document.querySelector("#siete");

botones[1][3]=document.querySelector("#ocho");
botones[2][3]=document.querySelector("#nueve");
botones[3][3]=document.querySelector("#diez");
botones[4][3]=document.querySelector("#once");

botones[1][4]=document.querySelector("#doce");
botones[2][4]=document.querySelector("#trece");
botones[3][4]=document.querySelector("#catorce");
botones[4][4]=document.querySelector("#quince");

//Funcion al presionar una casilla
function puchar(){
    //Se incrementa el contador de movimientos
    contador+=1;
    const mov=document.querySelector("#movimientos");
    mov.textContent=contador;

    const boton=event.currentTarget;
    actual=boton.textContent;
    //console.log("Presionaste el boton: ",actual);

    //Se busca en que posicion esta el 0
    let texto0=buscar();
    const cero=document.querySelector(texto0);

    //console.log(cero.textContent);
    //Se intercambian numeros
    nuevo=cero.textContent;
    boton.textContent=nuevo;
    cero.textContent=actual;
    return;

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
//Funcion del juego
function juegoInicia(){
    //Inicia el tiempo
    startTimer();
    //Se recorren las casillas
    for(let i=1;i<5;i++){
        for(let j=1;j<5;j++){
            //Se verifica que haya un 0 cerca
                b1=botones[j+1][i].textContent;
                b2=botones[j-1][i].textContent;
                b3=botones[j][i+1].textContent;
                b4=botones[j][i-1].textContent;
                if(b1==0 | b2==0 | b3==0 | b4==0){
                    botones[j][i].addEventListener("click", puchar);
                    //console.log(botones[j][i].textContent);
                }
        } 
    }
}

//Inicia el juego
const juego = document.querySelector('#jugar');
juego.addEventListener("click",juegoInicia);



