class MovableObject extends DrawableObject{
   
    speed = 0.1;
    speedY = 0;
    acceleration = 2;
    life = 100;
    lastHit = 0;
    

    applyGravitation(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                

            }
        }, 1000/25);
    }

    isAboveGround(){
        if(this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 210;
        }
    }

    /**
     * This is the function to evaluete of the character enters the area of the enemy. In that case is called an event named "collision"
     * 
     * @param {object} mo - it represents the movable-object, for example a chicken.
     * @returns 
     */
    isColliding(mo){
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height
    }

    hit(){
        this.life -= 5;
        
        if(this.life < 0){
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHit(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed/1000;
        return timepassed < 0.8;
    }

    isDead(){
        return this.life == 0;
    }
    

    

 

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft(){
        this.x -= this.speed;
        
       
    }

    playAnimation(imagesSet) {
        let i = this.currentImage % imagesSet.length;
        let path = imagesSet[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    
    /**
     * This function draw a rectangle outside the relative character and the enemies. It permits to detect easier a collition developed with an other function
     * 
     * @param {canvas} ctx - Is the context where a 2 dimensional world is drawn. This variable is transferred from the class world to the current page
     */
    setFrame(ctx){
        if(this instanceof Character || this instanceof Chicken){
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.strokeStyle = "green";
            ctx.stroke();

        }

        
    }
}