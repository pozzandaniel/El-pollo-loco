class Endboss extends MovableObject {
    world;
    life = 100;
    x = 719*8;
    y =90;
    height = 360;
    width = 366;
    dead = false;
    attackModus = false;
    endbossAttack;
    endbossBack;
    i = 0;

    IMAGES_PACEFUL = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];
    IMAGES_ALERT = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];
    IMAGES_ATTACK = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
  
    ];
    IMAGES_HURT = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];
    IMAGES_DEAD = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ];

    constructor(){
        super().loadImg(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_PACEFUL);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.gameOver();
    }
    
    /**
     * This function checks the status of the endboss.
     */
    animate(){
        setInterval(() => {
            this.distanceCharacterEnemy();
            if(this.isHit() && this.dead == false){
                this.playAnimation(this.IMAGES_HURT);
            } 
            
            if (this.life <= 0 ){
                this.playAnimation(this.IMAGES_DEAD);
                if(this.dead == false){
                    new Audio('./audio/chicken.mp3').play();
                }
                this.dead = true;
            }
        }, 300);
    }

    /**
     * If the distance between the character and the endboss decreases, changes the animation of the endboss.
     * When the character is distant more than 600px on the x coordinates, the animation of the endboss correspond to a 
     * peaceful state.
     * If it is less then 500px the endboss is in the alert state and if it is less then 400px he is ready to attack.
     */
    distanceCharacterEnemy(){
        if(this.world.character.x <= this.x -600 && this.dead == false){
            this.stop();    
            this.attackModus = false;
            this.playAnimation(this.IMAGES_PACEFUL);
        } else if(this.world.character.x <= this.x -500 && this.attackModus == false && this.dead == false){
            this.stop();
            this.playAnimation(this.IMAGES_ALERT);
        } else if(this.world.character.x <= this.x -400 && this.attackModus == false){
            this.stop();
            this.attackModus = true;
        } else if(this.attackModus == true && this.dead == false){
            this.i++; 
            this.attackMovement();
        } 
    }

    /**
     * After the animation attack is loaded. By the module that correspond to the image in this animation array with index 6.
     * The enemy moves along the x coordinates against the character and eventually strike him by collision.
     * By the module of the image with index 7 it comes back in his original position.
     */
    attackMovement(){
        this.playAnimation(this.IMAGES_ATTACK);
        if(this.i % this.IMAGES_ATTACK.length == 6){
            this.attack();
            new Audio('./audio/chick.wav').play();    
        }else if(this.i % this.IMAGES_ATTACK.length == 7){
            this.back();
        } else if (this.i % this.IMAGES_ATTACK.length  == 0){
            this.stop();
        }  
    }

    /**
     * The movement of the endboss during his attack along the x coordinates.
     */
    attack(){
        this.endbossAttack = setInterval(()=> {
            this.x -=200;
        }, 100);
    }
    /**
     * The endboss comes in his original position after that he's attacked.
     */
    back(){
        clearInterval(this.endbossAttack);
        this.endbossBack = setInterval(()=> {
            this.x +=200;
        }, 100);
    }
    /**
     * It avoids that the movement in direction of the character is continuosly performed every 100 milliseconds cancelling
     * the effect of the "back()" function.
     */
    stop(){
        clearInterval(this.endbossBack);
    }

    /**
     * If the life of the endboss reaches 0. The animation set is changed with a single image of the dead/burnt endboss,
     *  after a delay of 4000 milliseconds. 
     * Then the game over screen appears.
     */
    gameOver(){
        setInterval(()=>{
            if(this.life <= 0){
                setTimeout(()=>{
                    this.endAnimationGameOver()
                    document.getElementsByClassName('game-over')[0].classList.remove('d-none');
                }, 4000)
            }
        }, 1000/60)
    }

    endAnimationGameOver(){
        let imgCache1 = this.imageCache['./img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png'];
        let imgCache2 = this.imageCache['./img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png'];
        let imgCache3 = this.imageCache['./img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'];
        imgCache1.src = './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png';
        imgCache2.src = './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png';
        imgCache3.src = './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png';  
    }
}