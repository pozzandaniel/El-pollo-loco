class World {
    keyboard;
    level = level1;
    coinsBar = new CoinsBar();
    lifeBar = new LifeBar();
    bottleBar = new BottleBar();
    cord_x;
    end_game = 719*4;
    soundtrack_audio = new Audio('./audio/soundtrack.mp3');
    throwableObjects = [];
    amountCoins = 0;
    amountBottles = 0;
    
    
    
    
    canvas;
    ctx;
    camera_x;
    
    character = new Character();
    
    
    
    /**
     * This function starts at the beginning
     * 
     * @param {*} canvas // canvas represents the surface of our game where the characters are drawn
     */
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d'); // ctx is the image of our characters
        this.canvas = canvas; // the imported value canvas is saved in the general variable "canvas"
        this.keyboard = keyboard;
        this.draw(); // the function draws is available with the comand in the console world.draw(), it causes that the characters are drawn in the canvas
        this.setWorld();
        this.run();
    }
    
    
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // This function delete the old image after we change the coordinate of a character
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectableObjects[0].bottles);
        this.addObjectsToMap(this.level.collectableObjects[0].coins);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0); // with the movement of the character the camera becomes the same "amount" of movement but in the opposite direction
        this.addFixedObject(this.lifeBar, this.lifeBar.IMAGES_LIFE, this.character.life);
        this.addFixedObject(this.coinsBar, this.coinsBar.IMAGES_COINS, this.amountCoins);
        this.addFixedObject(this.bottleBar, this.bottleBar.IMAGES_TABASCO, this.amountBottles);
        this.ctx.translate(this.camera_x, 0); // it blocks the camera and avoid an infinity movement to link (it happens because draw repeat it self)
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        })

    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
            
        })
    }
    /**
     * This function turn the image in the other direction if the property otherDirection is true. Then draw the object in the canvas.
     * 
     * @param {object} mo 
     */
    addToMap(mo){
        this.flipImage(mo);

        mo.draw(this.ctx);
        
        mo.setFrame(this.ctx);
        

        this.flipImageBack(mo);
    }

    addFixedObject(fo, array, percentage){
        fo.draw(this.ctx);
        fo.setPercentage(percentage, array);
    
    }

    setWorld(){
        this.character.world = this;
    }

    flipImage(mo){
        if(mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
    }

    flipImageBack(mo){
        if(mo.otherDirection){
            this.ctx.restore();
            mo.x = mo.x * -1;
        }
    }

    run(){
        // this.collectObjects();
        setInterval(() => {
            this.checkCollisions();
            this.checkThrows();
        }, 100);
        
    }
    
    checkCollisions(){
        this.collectBottles();
        this.collectCoins();
        
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hit();
            }
        })
    }

    checkThrows(){
        if(this.keyboard.SPACE){
            let bottle = new ThrowableObject(this.character.x, this.character.y +20);
            this.throwableObjects.push(bottle);
        }
    }

    collectBottles(){
        this.level.collectableObjects[0].bottles.forEach((bottle) => {
            if(this.character.isColliding(bottle)){
                let array = this.level.collectableObjects[0].bottles;
                let index = array.indexOf(bottle);
                array.splice(index, 1);
                this.character.collectObj('bottle');       
            }
        })
    }

    collectCoins(){
        this.level.collectableObjects[0].coins.forEach((coin) => {
            if(this.character.isColliding(coin)){
                let array = this.level.collectableObjects[0].coins;
                let index = array.indexOf(coin);
                array.splice(index, 1);
                this.character.collectObj('coin');       
            }
        })
    }


    // collectObjects(){
        
    // }
    
    
    

   

    

    // playMusic(){
    //     this.soundtrack_audio.play();
    //     setInterval(() => {
    //         this.soundtrack_audio.play();
    //     }, 28000);    
    
       
    // }
    
}