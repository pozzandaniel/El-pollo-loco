class World {
    character = new Character();
    level = level1;
    cord_x;
    end_game = 719*2;
    soundtrack_audio = new Audio('./audio/soundtrack.mp3');
    
    
    
    
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
        if(mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.otherDirection){
            this.ctx.restore();
            mo.x = mo.x * -1;
        }

    }

    setWorld(){
        this.character.world = this;
    }

    // playMusic(){
    //     this.soundtrack_audio.play();
    //     setInterval(() => {
    //         this.soundtrack_audio.play();
    //     }, 28000);    
    
       
    // }
    
}