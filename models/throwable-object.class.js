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
    /**
     * The speedY variable of the object is changed from 0 to 20.
     * So the y coordinate of the object changes to -20 through the function "applyGravitation()".
     * This function also makes the object falling and at the same time moving to the right. 
     */
    throw(){
        this.speedY = 20;
        this.applyGravitation();
        setInterval(() => {
            this.x += 15;
        }, 25);
    }
    /**
     * This object also has an animation. The existence of the object is only given as soon as the object is thrown.
     * When the object is collected, it only exists as collectable object but not as throwable object.
     */
    rotation(){
        setInterval(() => {
            this.playAnimation(this.BOTTLE_ROTATION);
        }, 200);
    }
}