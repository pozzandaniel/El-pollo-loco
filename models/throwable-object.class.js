class ThrowableObject extends MovableObject {
    width = 60;
    height = 100;
    
    constructor(x, y){
        super().loadImg('img/6.botella/1.Marcador.png');
        this.x = x;
        this.y = y;
        this.throw();
        
        
       
    }

    throw(){
        this.speedY = 20;
        this.applyGravitation();
        setInterval(() => {
            this.x += 15;
        }, 25);
    }
}