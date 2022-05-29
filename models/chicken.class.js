class Chicken extends MovableObject {
    y = 350;
    height = 80;
    width = 66;
    chicken_audio = new Audio('./audio/chicken.mp3')
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    constructor(){
        super().loadImg('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.x = 400 + Math.random() * 500;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.10 + Math.random() * 0.25;

    }

    animate() {
        setInterval(() => {
            this.moveLeft();
         }, 1000/60);
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
        

        
       
    }

  

   

}