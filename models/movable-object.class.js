class MovableObject{
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.1;
    

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
        console.log('Moving right');
    }

    moveLeft(){
        setInterval(() => {
           this.x -= this.speed;
        }, 1000/60);
    }

    playAnimation(imagesSet) {
        let i = this.currentImage % imagesSet.length;
        let path = imagesSet[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}