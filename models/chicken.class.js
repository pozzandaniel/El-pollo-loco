class Chicken extends MovableObject {
    id;
    y = 350;
    height = 80;
    width = 66;
    chicken_audio = new Audio('./audio/chicken.mp3')
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    constructor(id){
        super().loadImg('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.x = 800 + Math.random() * 719*6;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.10 + Math.random() * 1.85;
        this.id = id;

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