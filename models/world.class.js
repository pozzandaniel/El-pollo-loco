class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    clouds = [
        new Clouds()
    ];

    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0)
    ];
    
    canvas;
    ctx;
    keyboard;
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
        // it allows that the image is loaded 25 times pro seconds or more, you cannot directly write "this.draw()" so you have to create a variable named for exemple let self;
        // the image is loaded as soon as the page is available so you don't need to write in the console: "world.draw()"
        // Now if you write in the console "world.character.x = 300", appears a new image of the character in a new position
        
        // this.enemies.forEach(enemy => {  // this showes the three enemy present in the array let enemies = []
        //     this.addToMap(enemy);
        // });
        // this.clouds.forEach(cloud => {
            //     this.addToMap(cloud);
            // });
            // this.backgroundObjects.forEach(bo => {
                //     this.addToMap(bo);
                // });
                this.addObjectsToMap(this.backgroundObjects);
                this.addObjectsToMap(this.clouds);
                this.addObjectsToMap(this.enemies);
                this.addToMap(this.character);
                
                
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
}