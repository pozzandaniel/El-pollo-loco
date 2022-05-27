class Character extends MovableObject{
    height = 220;
    width = 150;
    y = 10;
    speed = 2;
    walking = new Audio('./audio/walking.mp3');
    otherDirection = false;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
    ];
    
    world;
    constructor(){
        super().loadImg('../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.animate();
        this.applyGravitation();
        
    }

    animate(){
            setInterval(() => {     //the character changes his position
                this.walking.pause();
                if(this.world.keyboard.RIGHT && this.x < this.world.end_game){
                    this.x += this.speed;
                    this.otherDirection = false;
                 
                    this.walking.play();
                    
                    
                }
                if(this.world.keyboard.LEFT && this.x > 0){
                    this.x -= this.speed;
                    this.otherDirection = true;
                    this.walking.play();
                    
                }
                this.world.camera_x = -this.x +100;
            })

            setInterval(() => {     // the character starts an animation without changing the position
                
                if(this.isAboveGround()){
                    this.playAnimation(this.IMAGES_JUMPING);
                }


                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){

                    this.playAnimation(this.IMAGES_WALKING);
                }
                

               
            }, 100);
        
       
    }

    jump(){
        
    }

    
}