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

    canvas;
    ctx;
    /**
     * This function starts at the beginning
     * 
     * @param {*} canvas // canvas represents the surface of our game where the characters are drawn
     */
    constructor(canvas){
        this.ctx = canvas.getContext('2d'); // ctx is the image of our characters
        this.canvas = canvas; // the imported value canvas is saved in the general variable "canvas"
        this.draw(); // the function draws is available with the comand in the console world.draw(), it causes that the characters are drawn in the canvas
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // This function delete the old image after we change the coordinate of a character
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        // it allows that the image is loaded 25 times pro seconds or more, you cannot directly write "this.draw()" so you have to create a variable named for exemple let self;
        // the image is loaded as soon as the page is available so you don't need to write in the console: "world.draw()"
        // Now if you write in the console "world.character.x = 300", appears a new image of the character in a new position
        this.enemies.forEach(enemy => {  // this showes the three enemy present in the array let enemies = []
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });
        this.clouds.forEach(cloud => {
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        })
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        })
    }
}