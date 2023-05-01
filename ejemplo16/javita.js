function saludar(saludarFuncion){
    saludarFuncion();
}
const saludoItaliano=function(){
    console.log("Kogo Giorno Giovanna ni wa yume ga aru")
}
const saludoChingon=()=>{
    console.log("¡Arriba, mis maestros!")
}
saludar(saludoItaliano);
saludar(saludoChingon);