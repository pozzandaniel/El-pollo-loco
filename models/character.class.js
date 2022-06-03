class Character extends MovableObject{
    world;
    height = 220;
    width = 150;
    y = 210;
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

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png',
    ];
    
    constructor(){
        super().loadImg('../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.jump();
        this.applyGravitation();
        this.animate();
        this.collectObj();
        
        
        
    }

    animate(){
        
            setInterval(() => {     //the character changes his position
                // this.walking.pause();    
                if(this.world.keyboard.RIGHT && this.x < this.world.end_game){
                    this.moveRight();
                        
                    // this.walking.play();
                }

                if(this.world.keyboard.LEFT && this.x > 0){
                    this.moveLeft();
                    this.otherDirection = true;
                    // this.walking.play();
                }

                
                this.world.camera_x = -this.x +100; // when the character moves the camera gain the same amount but in the other direction. 100 only define the start position of the camera
                
            });
            
            setInterval(() => {     // the character starts an animation without changing the position
                if(this.isDead()){
                    this.playAnimation(this.IMAGES_DEAD);
                } else if(this.isHit()){
                    this.playAnimation(this.IMAGES_HURT);
                } else if(this.isAboveGround()){
                    this.playAnimation(this.IMAGES_JUMPING);
                    
                } else {
                    if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                            this.playAnimation(this.IMAGES_WALKING);
                    }
                }
            }, 110);

        
    }

    jump(){
        
        setInterval(() => {
            if(this.world.keyboard.UP && !this.isAboveGround()){
                this.speedY = 30; 
 
           
            }

        });
        
        
    }

  

    
}