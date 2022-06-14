class BottleBar extends StatusBar {

    IMAGES_TABASCO = [
        './img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];

    constructor(){
        super().loadImg('./img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png');
        this.loadImages(this.IMAGES_TABASCO);
        this.y = 60;
        
        
    }
}