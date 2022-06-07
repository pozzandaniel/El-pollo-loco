class DrawableObject {
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    audio = ['./audio/chicken.mp3', './audio/chick.wav', './audio/morenita.mp3', './audio/smashglass.wav', './audio/jump.wav', './audio/yawn.wav', './audio/hit.wav', './audio/dead.mp3', './audio/chicken_pain.wav', './audio/collectcoin.wav'];    


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
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}