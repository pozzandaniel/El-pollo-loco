class World {
    character = new Character();
    level = level1;
    cord_x;
    end_game = 719*4;
    soundtrack_audio = new Audio('./audio/soundtrack.mp3');
    chicken_1 = this.level.enemies[0];
    chicken_2 = this.level.enemies[1];
    chicken_3 = this.level.enemies[2];
    big_Chicken = this.level.enemies[3];
    
    
    
    
    
    canvas;
    ctx;
    keyboard;
    camera_x;
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
        this.checkCollision();
    }
    
    
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // This function delete the old image after we change the coordinate of a character
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
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

    checkCollision(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)){
                    console.log(this.character + ' und ' + enemy + ' haben kollidiert');
                }
            })

        }, 500);
    }
    
    

   

    

    // playMusic(){
    //     this.soundtrack_audio.play();
    //     setInterval(() => {
    //         this.soundtrack_audio.play();
    //     }, 28000);    
    
       
    // }
    
}