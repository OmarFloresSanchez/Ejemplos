class Boton {
    constructor(contenedorElemento, texto) {
        //Se asignan variables
        this.contenedorElemento = contenedorElemento;
        this.texto = texto;
        //Se asigna un atributo a una funcion con bind
        //Bind es para referirse a la misma clase
        this.onClick = this.onClick.bind(this);
        //Se crea un boton
        const boton = document.createElement('button');
        //Se le mete el texto 
        boton.textContent = texto;
        //Se le pone un listener a la funcion onclick
        boton.addEventListener('click', this.onClick)
        //Se le pasa el boton creado al contenedor
        this.contenedorElemento.append(boton);
    }
    //Si se hace click muestra el texto del boton
    onClick() {
        console.log('Hiciste clic en: ' + this.texto);
    }
}
//Se selecciona el div contenedor
const botonContenedor = document.querySelector('#menu');
//Se cren instancias pasando el contenedor y un texto para el boton
const boton1 = new Boton(botonContenedor, 'A');
const boton2 = new Boton(botonContenedor, 'B');
const boton3 = new Boton(botonContenedor, 'C');