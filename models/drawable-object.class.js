class DrawableObject {
    loadImg(path){
        this.img = new Image(); // this.img = document.getElementById('image') --> new Image() = <img>
        this.img.src = path;    //document.getElementById('image').src --> `<img src="${path}">`;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}