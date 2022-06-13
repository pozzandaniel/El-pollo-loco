class World {
    keyboard;
    level = level1;
    coinsBar = new CoinsBar();
    lifeBar = new LifeBar();
    bottleBar = new BottleBar();
    cord_x;
    end_game = 719*8;
    throwableObjects = [];
    amountCoins = 0;
    amountBottles = 0;
    monster = this.level.monster[0] = new Endboss();
    canvas;
    ctx;
    camera_x;  
    character = new Character();
    
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d'); 
        this.canvas = canvas; 
        this.keyboard = keyboard;
        this.draw(); 
        this.setWorld();
        this.run();
    }
    
    /**
     * This function draws the elemts of the videogame inside the canvas.
     * The method "clearRect()" cancel the old image of the character, when he changes his position.
     * The elements inside the two methods "translate(this.camera_x)" and "translate(-this.camera_x)" can
     * move in the canvas. The elements outside are fixed.
     * The function "callBack()" executes the function "draw()" in loop and it allows updates.
     */
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsFromArray();
        this.addToMap(this.monster);
        this.ctx.translate(-this.camera_x, 0); 
        this.addStatusBar();
        this.ctx.translate(this.camera_x, 0); 
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.callBack();   
    }
    
    callBack(){
        
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        })
             
    }
    
    /**
     * It draws the status bar in the canvas giving a fixed position.
     */
    addStatusBar(){
        this.addFixedObject(this.bottleBar, this.bottleBar.IMAGES_TABASCO, this.amountBottles);
        this.addFixedObject(this.lifeBar, this.lifeBar.IMAGES_LIFE, this.character.life);
        this.addFixedObject(this.coinsBar, this.coinsBar.IMAGES_COINS, this.amountCoins);  
    }
    
    /**
     * Elements belong to arrays also are drawn inside the canvas through this function.
     */
    addObjectsFromArray(){
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectableObjects[0].bottles);
        this.addObjectsToMap(this.level.collectableObjects[0].coins);
        this.addObjectsToMap(this.throwableObjects);
    }
    /**
     * A for-loop is applied for every selected array. For each element this array named "o" an object in the canvas is drawn.
     * The "o" element is actually an object defined by a class.
     * @param {array} objects -Given array.
     */
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);  
            this.changeBottleAnimation(o);
        });
    }
    /**
     * This function turn the image in the other direction if the property otherDirection is true. 
     * Then draw the object in the canvas.
     * @param {object} mo - is a movable object defined by a class. It can belong to an array or not.
     */
    addToMap(mo){
        this.flipImage(mo); 
        mo.draw(this.ctx);  
        // mo.setFrame(this.ctx);
        this.flipImageBack(mo);
    }
    /**
     * The function draws a fixed object in the canvas. It always remain in the same position also when
     * the character and the camera move. They are status bars like the life bar, the coin bar and the bottle bar,
     * that are used to calculate the amount of a particular element(character life, number of collected bottles
     *  and amount of collected coins). When this amount increases or decreases a related image of the fixed bar is shown.
     * @param {object} fo - A fixed object (life bar, bottles bar or coins bar) defined by a class.
     * Respectively life-bar.class.js, coins-bar.class.js and bottle-bar.class.js.
     * @param {*} array - It represents a set images that change the selected and shown image in relation to 
     * the amount of element. The function "setPercentage()" belongs to the parent class/object "drawableObject",
     * return a value that represents an index of this set.
     * @param {*} percentage - it's the amount of the element in certain period.
     */
    addFixedObject(fo, array, percentage){
        fo.draw(this.ctx);
        fo.setPercentage(percentage, array);
    }
    /**
     * It creates a variable word inside the class/object character.
     * So then it is possible to access the variables and the function from the class "World"
     * also from the class "Character".
     */
    setWorld(){
        this.character.world = this;
        this.level.monster[0].world = this;
    }
    /**
     * This function allows the character to turn. When the button left is pressed.
     * The image of the character turns on the x coordinates.
     * @param {object} mo - movable object defined by a class, for example class "Character".
     */
    flipImage(mo){
        if(mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
    }
    /**
     * The image of the object turns back when the right button is pressed.
     * @param {*} mo - movable object.
     */
    flipImageBack(mo){
        if(mo.otherDirection){
            this.ctx.restore();
            mo.x = mo.x * -1;
        }
    }
    
    /**
     * This function is initialised as soon as the world is created.
     * It costantly checks if there are collisions under the elements of the world.
     */
    run(){ 
        this.checkCollisionsCharacterVSEnemy();
        this.checkCollisionsCharacterVSObjects();
        this.checkCollisionsObjectVSEnemy();
        this.checkCollisionsCharacterVSEndboss();   
    }

   
    /**
     * It costantly checks if there is a collision between the character and an enemy.
     * It also check the nature of this collision.
     * So it is possible that the character jumps above the enemy, and in this case a different respond is given.
     */
    checkCollisionsCharacterVSEnemy(){
        setInterval(()=> {
            this.level.enemies.forEach((enemy)=> {
                if(this.character.isColliding(enemy)){
                    if(this.character.isAttacking(enemy)){
                        this.squashChicken(enemy);
                    } else {
                        this.character.hit();                        
                    }
                } 
            }) 
        }, 400);    
    }
    /**
     * If the enemy inside the array "enemies" belong to a chicken or to a chick,
     * the animation of this enemy is changed. The animation set of the enemy (in other words the imageCache) is converted
     * with an animation that always show the same image. The image of the dead/squashed enemy.
     * Then the enemy is cancelled from the array enemies. It occurs with a delay of 300 milliseconds.
     * @param {*} enemy  - It is the element inside the array enemies. It could be a chicken or a chick.
     */
    squashChicken(enemy){
        if(enemy instanceof Chicken){
            this.chickenEndAnimation(enemy);
            new Audio('./audio/chicken.mp3').play();
        } else {
            this.chickEndAnimation(enemy);
            new Audio('./audio/chicken.mp3').play();
        }
        setTimeout(()=> {
            this.spliceChickenFromArray(enemy);

        }, 300);
    }

    /**
     * It costantly checks if the character is colliding with a collectable object.
     */
    checkCollisionsCharacterVSObjects(){
        setInterval(() => {
            this.collectBottles();
            this.collectCoins();
        }, 100);
    }

    /**
     * It costantly checks if a throwable object(in other words a bottle) is colliding with an enemy.
     * The enemy can be a chicken/chick or the endboss.
     */
    checkCollisionsObjectVSEnemy(){
        setInterval(()=>{
            this.checkThrows();
        }, 400);
        setInterval(()=> {
            this.checkStrikeAgainstChicken();
            this.checkStrikeAgainstEndboss();
        }, 200);
    }
    
    /**
     * This function costantly checks if the button "space" is pressed. In this case a new throwable object is generated
     * and at the same time the amount of collectable object bottle is diminished
     * @returns {boolean} - true or false
     */
    checkThrows(){
        if(this.keyboard.SPACE && this.amountBottles > 0 && this.character.life > 0){
            let bottle = new ThrowableObject(this.character.x, this.character.y +20);
            this.throwableObjects.push(bottle);
            this.amountBottles -= 5;
            this.character.waiting();
        } else {
            return false;
        }
    }
    
    /**
     * It regularly checks if the throwable object collides with an enemy.
     * In this case the image of the dead/squashed enemy is shown and the enemy is cancelled from the array. 
     */
    checkStrikeAgainstChicken(){
        let arrayEnemies = this.level.enemies;
        let arrayBottles = this.throwableObjects;
        arrayEnemies.forEach((enemy) => {
            arrayBottles.forEach((bottle) => {
                if(bottle.isColliding(enemy)){
                    this.killChicken(enemy);
                }
            })
        })
    }

    checkStrikeAgainstEndboss(){
        let arrayBottles = this.throwableObjects;
        arrayBottles.forEach((bottle) => {
            if(bottle.isColliding(this.monster)){
                this.hitEndboss();
            }
        })
    }
    
    
    
    
    killChicken(enemy){
        if(enemy instanceof Chicken){
            this.chickenEndAnimation(enemy)
            new Audio('./audio/chicken.mp3').play();

        } else {
            this.chickEndAnimation(enemy);
            new Audio('./audio/chicken.mp3').play();
        }
        setTimeout(()=>{
            this.spliceChickenFromArray(enemy);
        }, 300);
    }

    hitEndboss(){
        this.monster.lastHit = new Date().getTime();
        this.monster.life -= 2;
    }

    
    chickenEndAnimation(enemy){
        let index = this.level.enemies.indexOf(enemy);
        let imgCache1 = this.level.enemies[index].imageCache['img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png'];
        let imgCache2 = this.level.enemies[index].imageCache['img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png'];
        let imgCache3 = this.level.enemies[index].imageCache['img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'];
        imgCache1.src = 'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png';
        imgCache2.src = 'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png';
        imgCache3.src = 'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png';  
    }
    
    chickEndAnimation(enemy){
        let index = this.level.enemies.indexOf(enemy);
        let imgCache1 = this.level.enemies[index].imageCache['img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png'];
        let imgCache2 = this.level.enemies[index].imageCache['img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png'];
        let imgCache3 = this.level.enemies[index].imageCache['img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'];
        imgCache1.src = 'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png';
        imgCache2.src = 'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png';
        imgCache3.src = 'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png';  
    }
    

    spliceChickenFromArray(enemy){
        let index = this.level.enemies.indexOf(enemy);
        let arrayEnemies = this.level.enemies;
        arrayEnemies.splice(index, 1);
    }

  
    /**
     * If the character collides against a bottle, this bottle is cancelled from the collectable object array
     * and the bottles amount of the character increase.
     */
    collectBottles(){
        this.level.collectableObjects[0].bottles.forEach((bottle) => {
            if(this.character.isColliding(bottle)){
                let array = this.level.collectableObjects[0].bottles;
                let index = array.indexOf(bottle);
                array.splice(index, 1);
                this.character.collectObj('bottle');       
            }
        })
    }

    collectCoins(){
        this.level.collectableObjects[0].coins.forEach((coin) => {
            if(this.character.isColliding(coin)){
                let array = this.level.collectableObjects[0].coins;
                let index = array.indexOf(coin);
                array.splice(index, 1);
                this.character.collectObj('coin');
                new Audio('./audio/collectcoin.wav').play();       
            }
        })
    }

    /**
     * When the thrown object collides against an enemy it changes his animation in a broken bottle.
     * @param {object} o - A bottle belong to the array throwable-objects
     */
    changeBottleAnimation(o){
        if(this.throwableObjects.includes(o)){
            this.level.enemies.forEach((enemy) => {
                if(o.isColliding(enemy)){
                    let indexBottle = this.throwableObjects.indexOf(o);                    
                    this.breakBottle(indexBottle); 
                    
                }
            })
        }
        
        if(this.throwableObjects.includes(o) && o.isColliding(this.monster)){
            let indexBottle = this.throwableObjects.indexOf(o);                    
                    this.breakBottle(indexBottle); 
        }
    }
    
    /**
     * The animation of the rotating bottle is changed with an animation of a fluid.
     * @param {number} index - It is the index of the throwable object belong to the throwble objects array, that collides 
     * with an enemy
     */
    breakBottle(index){
        let imgCache1 = this.throwableObjects[index].imageCache['img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png'];
        let imgCache2 = this.throwableObjects[index].imageCache['img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png'];
        let imgCache3 = this.throwableObjects[index].imageCache['img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png'];
        let imgCache4 = this.throwableObjects[index].imageCache['img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'];
        imgCache1.src = 'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png';
        imgCache2.src = 'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png';
        imgCache3.src = 'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png';
        imgCache4.src = 'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png';
    }

    
    checkCollisionsCharacterVSEndboss(){
        setInterval(()=> {
            let endboss = this.level.monster[0]
            if(this.character.isColliding(endboss)){
                    
                this.character.bigHit();
                              
            } 
             
        }, 300);    
    }

  
  
    
    
    
}