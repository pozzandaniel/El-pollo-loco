class Level {
    enemies;
    monster;
    clouds;
    backgroundObjects;
    collectableObjects;
    

    constructor(enemies,monster,  clouds, backgroundObjects, collectableObjects){
        this.enemies = enemies;
        this.monster = monster;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectableObjects = collectableObjects;

        
    }
}