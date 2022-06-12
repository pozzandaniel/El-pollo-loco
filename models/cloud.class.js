class Clouds extends MovableObject{
    y = 100 * Math.random();
    height = 200 * Math.random() +150;
    constructor(path){
        super().loadImg(path)
        this.width = 600 *Math.random() +100;
        this.x = Math.random() * 719*8;
        this.animate();
        
    }
    
    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000/60)
    }
    
}