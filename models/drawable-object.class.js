class DrawableObject {
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    life = 100;

    /**
     * This function attribute an effective image to the variable img;
     * @param {string} path - It is the source path of the image.
     */
    loadImg(path){
        this.img = new Image(); 
        this.img.src = path;    
    }

    /**
     * This function consumes an array, for each element of the array an effective image is generated.
     * Each element of the array is willingly named with the path or source of the image.
     * Every generated image has a path from an array element.
     * The sequence of images and their paths constitutes a JSON object named "imageCache".
     * @param {array} arr - This array is made from differents image paths. In sequence these paths constitute an animation.
     */
    loadImages(arr){
       
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * The function generates a variable named "i" with a value from 0 to the length of the imagesSet.
     * When this function is encapsuleted in a setIntervall, it makes an infinite loop.
     * So an animation can be performed without interruption also when the current value exceed the imageSet length,
     * because the variable "i" always return a value corresponding an index of an image.
     * @param {array} imagesSet - That's the same array used in the function "loadImages(arr)"
     */
    playAnimation(imagesSet) {
      
        let i = this.currentImage % imagesSet.length;
        let path = imagesSet[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * This function uses the method drawImage() to draw inside a canvas element.
     * @param {context} ctx - That's the canvas element plus the method "getContext('2d')".
     */
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}