class Chicken extends MovableObject {
    
    constructor(){
        super().loadImg('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.x = 250 + Math.random() * 500;
    }

}