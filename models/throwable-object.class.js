class ThrowableObject extends MovableObject {
    width = 60;
    height = 100;

    BOTTLE_ROTATION = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];
    
    constructor(x, y){
        super().loadImg('img/6.botella/1.Marcador.png');
        this.loadImages(this.BOTTLE_ROTATION);
        this.x = x;
        this.y = y;
        this.throw();
        this.rotation();
       
        
        
       
    }

    throw(){
        this.speedY = 20;
        this.applyGravitation();
        setInterval(() => {
            this.x += 15;
        }, 25);
    }

    rotation(){
        setInterval(() => {
            this.playAnimation(this.BOTTLE_ROTATION);
        }, 100);
    }
}