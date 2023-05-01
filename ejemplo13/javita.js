class Boton {
    constructor(contenedorElemento, texto) {
        this.contenedorElemento = contenedorElemento;
        this.texto = texto;

        this.onClick = this.onClick.bind(this);

        const boton = document.createElement('button');
        boton.textContent = texto;
        boton.addEventListener('click', this.onClick)
        this.contenedorElemento.append(boton);
    }
    onClick() {
        //Se hace una constante para facil
        const informachon = this.texto ;
        //Se crea el evento nuevo "puchar" y se le pasa la variable informacion
        document.dispatchEvent(new CustomEvent('puchar', {detail:informachon}));
    }
}
class Menu {
    constructor() {
        this.botonContenedor = document.querySelector('#menu');
        this.estatus = document.querySelector('#estatus');
        this.mostrarBotonClick = this.mostrarBotonClick.bind(this);
        this.buttons = [
            new Boton(this.botonContenedor, 'Star Platinum'),
            new Boton(this.botonContenedor, 'Eliophant Green'),
            new Boton(this.botonContenedor, 'Magicans Red'),
            new Boton(this.botonContenedor, 'Hermit Purple'),
            new Boton(this.botonContenedor, 'Silver Chariot'),
            new Boton(this.botonContenedor, 'The fool')
        ];
        //Puchar
        document.addEventListener('puchar', this.mostrarBotonClick);
    }
    mostrarBotonClick() {
        //Al detectar un "puchar" se imprime el texto este
        console.log('Hola amigos, ¿como están?');
        //Y se imprime el nombre del boton que se recivio
        const nombreBoton = event.detail;
        this.estatus.textContent = 'Clic en ' + nombreBoton;
    }
}
const menu = new Menu();