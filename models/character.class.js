class Character extends MovableObject{
    world;
    height = 220;
    width = 150;
    y = 210;
    speed = 2;
    otherDirection = false;
    start;
    sleep;
   

    IMAGES_PACEFUL = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png',
    ];

    IMAGES_SLEEPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png',
    ];

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
        // 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
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
        this.setImageCaches();
        this.jump();
        this.waiting();
        this.applyGravitation();
        this.animate();
        this.collectObj();
        this.gameOver(); 
    }

    /**
     * The function creates 6 different image cache for each animation.
     */
    setImageCaches(){
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_PACEFUL);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
    }

    /**
     * The function starts to check the status of the character and assigned a related animation.
     */
    animate(){

        this.commandMovement();
       
        setInterval(() => {     
            this.animationSets();        
        }, 110);
    }

    /**
     * When the buttons on the keyboard are pressed and the character is located inside the entirely width of the canvas,
     * the character moves.
     * The variable "camera_x" inside the object "world" describes the position of the camera. When the character moves along 
     * the x coordinate, the camera moves in the opposite direction for the same value.
     */
    commandMovement(){
        let startPositionCamera = 100;
        setInterval(() => {     
            if(this.world.keyboard.RIGHT && this.x < this.world.end_game){
                this.moveRight();
            }

            if(this.world.keyboard.LEFT && this.x > 0){
                this.moveLeft();
                this.otherDirection = true;
            }

            this.world.camera_x = -this.x + startPositionCamera;  
        });
    }

    /**
     * Depending of the condition a different animation is applied.
     * The character posseses 6 different imageCaches for 6 different animations
     */
    animationSets(){
        if(this.isDead()){
            this.playAnimation(this.IMAGES_DEAD);
        } else if(this.isHit()){
            this.waiting();
            this.playAnimation(this.IMAGES_HURT);
        } else if(this.isAboveGround()){
            this.playAnimation(this.IMAGES_JUMPING); 
        } else  if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
            this.waiting(); 
            this.playAnimation(this.IMAGES_WALKING);
        } else if(this.characterAnnoyed){
            this.playAnimation(this.IMAGES_PACEFUL);
        } else if(this.characterSpleept){
            this.playAnimation(this.IMAGES_SLEEPING); 
        }
    }
    /**
     * This function allows the character to move along the y coordinates of the canvas, when the jump button is pressed.
     * The setInterval avoids that multiple jumps are performed. So the character can only do one jump at a time. So he cannot fly.
     * the "waiting" function applies the animation of the annoyed character with a delay of 500 milliseconds.
     * that's avoid that at the end of the jump animation, the character remain in an image of the jump sequence.
     */
    jump(){
        let jump; 
        jump = setInterval(()=>{
            if(this.world.keyboard.UP && !this.isAboveGround() && this.life > 0){
                this.waiting();
                let audioJump = new Audio('audio/jump.wav').play(); 
                this.speedY = 30;  
            }
        }, 200);
        if(this.life <= 0){
            clearInterval(jump);
        }  
    }

    /**
     * This function is linked with the "animationSets" function.
     * So when the character is not in another status, or in other words no buttons are pressed on the keyboard and 
     * the character is not hit by an enemy. Then after 500 milliseconds the character enters the annoyed status and
     * after 6000 milliseconds in the sleeping status.
     * The variables "characterAnnoyed" and "characterSpleept" are used in the function "animateSets" to change his animation.
     */
    waiting(){
        this.defaultWaitingStatus();
        clearTimeout(this.start)
        clearTimeout(this.sleep)
        this.start = setTimeout(() => {
            this.characterAnnoyed = true
        }, 500);
        this.sleep = setTimeout(()=> {
            this.characterAnnoyed = false;
            this.characterSpleept = true;
            this.sleepingAudio();
        }, 6000);  
    }

    /**
     * It sets the default waiting statuses.
     */
    defaultWaitingStatus(){
        this.characterAnnoyed = false;
        this.characterSpleept = false;
    }

    sleepingAudio(){
        if(this.life > 0){
            let audioSleeping = new Audio('audio/yawn.wav').play();
        }
    }

    /**
     * This function checks of the character life is minor or equal to 0 or if the monster status is dead.
     * In these cases the game over screen appears.
     * The animation of the character dead is provided from the function "animationSets" but with a delay of
     * 4000 milliseconds all the images of the animationset are substitute with the last image.
     * So the animation technically go on, but it always show the same image.
     */
    gameOver(){
        setInterval(()=>{
            if(this.life <= 0){
                setTimeout(()=>{
                    this.endAnimationGameOver();
                    this.world.monster.dead = true;
                    document.getElementsByClassName('game-over')[0].classList.remove('d-none');
                }, 4000)
            }
        }, 1000/60)
    }
    
    /**
     * That's the function that substitute the images of the animationSet "IMAGES_DEAD" with the last image of this set.
     */
    endAnimationGameOver(){
        let imageCache1 = this.imageCache['img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png'];
        let imageCache2 = this.imageCache['img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png'];
        let imageCache3 = this.imageCache['img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png'];
        let imageCache4 = this.imageCache['img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png'];
        let imageCache5 = this.imageCache['img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png'];
        let imageCache6 = this.imageCache['img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png'];
        let imageCache7 = this.imageCache['img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'];
        imageCache1.src = 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png';
        imageCache2.src = 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png';
        imageCache3.src = 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png';
        imageCache4.src = 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png';
        imageCache5.src = 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png';
        imageCache6.src = 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png';
        imageCache7.src = 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png';

    }

    
}