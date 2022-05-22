class MovableObject{
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;

    loadImg(path){
        this.img = new Image(); // this.img = document.getElementById('image') --> <img>
        this.img.src = path;    //document.getElementById('image').src --> `<img src="${path}">`;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}