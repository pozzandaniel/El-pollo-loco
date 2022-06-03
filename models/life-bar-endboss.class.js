class LifeBarEndboss extends StatusBar{


    IMAGES_LIFE_ENEMY = [
       'img/7.Marcadores/Marcadorvida_enemy/Azul.png',
       'img/7.Marcadores/Marcadorvida_enemy/Azul.png',
       'img/7.Marcadores/Marcadorvida_enemy/Azul.png',
    ];

    constructor(){
        super().loadImg('img/7.Marcadores/Marcadorvida_enemy/Azul.png');
        this.loadImages(this.IMAGES_LIFE_ENEMY);
        
        
    }
}