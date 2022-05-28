class MovableObject{
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.1;
    speedY = 0;
    acceleration = 2;
    

    applyGravitation(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                console.log('speedY =' + this.speedY);
                console.log('Y =' + this.y);

            }
        }, 1000/25);
    }

    isAboveGround(){
        return this.y < 210;
    }
    

    loadImg(path){
        this.img = new Image(); // this.img = document.getElementById('image') --> new Image() = <img>
        this.img.src = path;    //document.getElementById('image').src --> `<img src="${path}">`;
    }

    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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