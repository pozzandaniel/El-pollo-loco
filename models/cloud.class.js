class Clouds extends MovableObject{
    y = 20;
    height = 200;
    constructor(){
        super().loadImg('img/5.Fondo/Capas/4.nubes/1.png')
        this.width = 600;
        this.x = Math.random() * 200;
        this.moveLeft();
        
    }
    
    moveLeft(){
        setInterval(() => {
           this.x -= 0.2;
        }, 1000/60);
    }
    
}