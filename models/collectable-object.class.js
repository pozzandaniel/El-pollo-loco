class CollectableObject extends MovableObject {
    img;
    
    
    aboveGround = 360;
    bottle1 = 'img/6.botella/2.Botella_enterrada1.png';
    bottle2 = 'img/6.botella/2.Botella_enterrada2.png';
    coin1 = 'img/8.Coin/Moneda1.png';
    coin2 = 'img/8.Coin/Moneda2.png';

    BOTTLE_IMAGES = [
        './img/6.botella/2.Botella_enterrada1.png',
        './img/6.botella/2.Botella_enterrada2.png'
    ];

    COIN_IMAGES = [
        './img/8.Coin/Moneda1.png',
        './img/8.Coin/Moneda2.png',
    ];
   

    constructor(path){
        super().loadImg(path);
        this.loadImages(this.BOTTLE_IMAGES);
        this.loadImages(this.COIN_IMAGES);
        this.givePlace(path);
        this.setSize(path)
        this.animate(path);
    }
    
    givePlace(path){
        this.x = 100+ Math.random()* 719*6;
        if(path == this.bottle1 || path == this.bottle2){
            this.y = this.aboveGround;
        } else {
            this.y = 80+ Math.random() * this.aboveGround -80;
        }
    }

    setSize(path){
        if(path == this.coin1){
            this.height = 110;
            this.width = 110;
        } else if(path == this.coin2){
            this.height = 130;
            this.width = 130;
        } else {
            this.height = 70;
            this.width = 70;
        }

    }

    animate(path){
        if(path == this.bottle1 || path == this.bottle2){
            setInterval(()=>{
                this.playAnimation(this.BOTTLE_IMAGES);

            }, 500);
        } else {
            setInterval(()=>{
                this.playAnimation(this.COIN_IMAGES);

            }, 500);
        }
    }
}