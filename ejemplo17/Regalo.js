class Regalo{
    constructor(containerElement, regaloSrc, callbackAbierto){
        this.containerElement=containerElement;
        this.abrirRegalo=this.abrirRegalo;
        this.callbackAbierto=callbackAbierto;

        this.regaloSrc=regaloSrc;
        //Se hace una imagen y se le agrega al contenedor
        this.image=document.createElement("img");
        this.image.src="baul.jpg";
        this.containerElement.appendChild(this.image);
        //Se le pone el bind
        this.abrirRegalo = this.abrirRegalo.bind(this);
        //Se le agrega el listener
        this.image.addEventListener("click",this.abrirRegalo);
    }
    abrirRegalo(event){
        this.image.src=this.regaloSrc
        this.image.removeEventListener("click",this.abrirRegalo)
        this.callbackAbierto()
    }

}