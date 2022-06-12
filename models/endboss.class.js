class Endboss extends MovableObject {
    world;
    life = 100;
    y =90;
    height = 360;
    width = 366;
    dead = false;
    attackModus = false;

    IMAGES_PACEFUL = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];
    IMAGES_ALERT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];
    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
  
    ];
    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ]
    constructor(){
        super().loadImg(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_PACEFUL);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 3000;   
        this.animate();
        this.gameOver();


    }
    

    animate(){
        let i = 0;
        setInterval(() => {
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
                this.playAnimation(this.IMAGES_ATTACK);
                i++; 
                if(i % this.IMAGES_ATTACK.length == 6){
                  this.attack();
                  let audioBigChicken = new Audio('./audio/chick.wav').play();
                  
                   
                }else if(i % this.IMAGES_ATTACK.length == 7){
                  this.back();
                } else if (i % this.IMAGES_ATTACK.length  == 0){

                    this.stop();
                }  
            } 
            
            if(this.isHit() && this.dead == false){
                this.playAnimation(this.IMAGES_HURT);
                

                
                console.log(this.life);

            } 
            
            if (this.life <= 0 ){
                this.playAnimation(this.IMAGES_DEAD);
                if(this.dead == false){
                    let audioDead = new Audio('./audio/chicken.mp3').play();
                    
                }
                this.dead = true;
            }
        }, 300);
    
    }

    endbossAttack;
    endbossBack;
    attack(){
        
        this.endbossAttack = setInterval(()=> {
            this.x -=200;
        }, 100);
        
        
        
       
        
    }
    back(){
        clearInterval(this.endbossAttack);
        this.endbossBack = setInterval(()=> {
            this.x +=200;
        }, 100);
    }
    stop(){
        clearInterval(this.endbossBack);
    }

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
        let imgCache1 = this.imageCache['img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png'];
        let imgCache2 = this.imageCache['img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png'];
        let imgCache3 = this.imageCache['img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'];
        imgCache1.src = 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png';
        imgCache2.src = 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png';
        imgCache3.src = 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png';  
    }
}