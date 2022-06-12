class Chick extends MovableObject {
    id;
    y = 370;
    height = 60;
    width = 56;
    chicken_audio = new Audio('./audio/chicken.mp3')
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];
    constructor(id){
        super().loadImg('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.x = 1000 + Math.random() * 2500;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.10 + Math.random() * 0.25;
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