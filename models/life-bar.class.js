class LifeBar extends StatusBar{

    IMAGES_LIFE = [
        './img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        './img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        './img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        './img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        './img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        './img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    constructor(){
        super().loadImg('./img/7.Marcadores/Barra/Marcador vida/verde/0_.png');
        this.loadImages(this.IMAGES_LIFE);
        
        
    }
}