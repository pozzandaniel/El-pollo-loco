class FixedObject {
    x = 400;
    y = 200;
    img;
    width = 300;
    heigth = 400;

    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

}