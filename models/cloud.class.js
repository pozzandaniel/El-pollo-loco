class Clouds extends MovableObject{
    y = 20;
    x = Math.random() * 200;
    height = 200;
    constructor(){
        super().loadImg('img/5.Fondo/Capas/4.nubes/1.png')
        this.width = 600;

    }
}