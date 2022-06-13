class MovableObject extends DrawableObject{
    speed = 0.1;
    speedY = 0;
    speedX = 0;
    acceleration = 2;
    lastHit = 0;
    lastJump = 0;

    /**
     * A gravitation is applied if the character is in air. That means that the character fall with increasing speed.
     */
    applyGravitation(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000/25);
    }

    /**
     * If the character is on the ground, his y coordinate is 210.
     * 
     * @returns {variable} - It represents the y coordinate of the character in the canvas
     */
    isAboveGround(){
        if(this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 210;
        }
    }

    /**
     * This is the function to evaluate if the character enters the area of the enemy. 
     * In that case a collision occured.
     * @param {object} mo - it represents the movable-object, for example a chicken.
     * @returns A condition of collision or false.
     */
    isColliding(mo){
        if(this.life > 0){
            return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height
        } else {
            return false;
        }  
    }

    /**
     * This function describes the conditions where the collision happens because the character is attacking the enemy.
     * It occurs when the character jump on the enemy.
     * @param {Object} mo - It represents a movable-object colliding with the character.
     * @returns - the coordinates of the contact.
     */
    isAttacking(mo){
        return this.x + this.width > mo.x + mo.width && this.x < mo.x
    }
    /**
     * It occurs when the endboss attacks the character. When the attack succeed the character lose 50 life points.
     * The variable "lastHit" is updated with a data representing the time, in which the event occurs. 
     */
    bigHit(){
        this.life -= 50;
        let soundHit = new Audio('audio/hit.wav').play();
        if(this.life < 0){
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * It occurs when a normal enemy collides with the character. In that case the character lose 5 life points.
     */
    hit(){
        this.life -= 5;
        let soundHit = new Audio('audio/hit.wav').play();
        if(this.life < 0 ){
            this.life = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * This function calculate of the last hit happened in the last 0.8 seconds.
     * @returns {boolean} - false if the last hit happened more then 0.8 seconds ago, in the opposite situation true
     */
    isHit(){
        if(this.life > 0){
            let timepassed = new Date().getTime() - this.lastHit;
            timepassed = timepassed/1000;
            return timepassed < 0.8;
        } else {
            return false;
        }
    }

    /**
     * It calculates of the last jump of the character occured in the last 0.8 seconds
     * @returns {boolean} - it returns true or false.
     */
    isJump(){
        let timepassed = new Date().getTime() - this.lastJump;
        timepassed = timepassed/1000;
        return timepassed < 0.8;
    }
    
    /**
     * This Function check if the life is equal to 0;
     * @returns {boolean} - it returns true or false.
     */
    isDead(){
        return this.life == 0;
    }

    /**
     * A nature of the collected object is checked, then the related amount is increased of 5 points.
     * @param {Object} obj 
     */
    collectObj(obj){
        if(obj == 'bottle'){
            this.world.amountBottles += 5; 
        }
        if(obj == 'coin'){
            this.world.amountCoins += 5; 
        }
    }
    /**
     * This function allows to move to the right
     * @returns {boolean} - true or false
     */
    moveRight() {
        if(this.life > 0){
            this.x += this.speed;
            this.otherDirection = false;
        } else{
            return false;
        }
    }

    /**
     * This function allows to move to the left
     * @returns  {boolean} - true or false
     */
    moveLeft(){
        if(this.life > 0){
            this.x -= this.speed;
        } else{
            return false;
        } 
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