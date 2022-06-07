class World {
    keyboard;
    level = level1;
    coinsBar = new CoinsBar();
    lifeBar = new LifeBar();
    bottleBar = new BottleBar();
    // lifeBarEndboss = new LifeBarEndboss();
    cord_x;
    end_game = 719*4;
    audio = ['./audio/chicken.mp3', './audio/chick.wav', './audio/morenita.mp3', './audio/smashglass.wav', './audio/jump.wav', './audio/yawn.wav'];    
    throwableObjects = [];
    amountCoins = 0;
    amountBottles = 0;
    monster = this.level.monster[0] = new Endboss();

   
    
    
    
    
    
    
    
    canvas;
    ctx;
    camera_x;
    
    character = new Character();
    
    
    
    /**
     * This function starts at the beginning
     * 
     * @param {*} canvas // canvas represents the surface of our game where the characters are drawn
     */
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d'); // ctx is the image of our characters
        this.canvas = canvas; // the imported value canvas is saved in the general variable "canvas"
        this.keyboard = keyboard;
        this.draw(); // the function draws is available with the comand in the console world.draw(), it causes that the characters are drawn in the canvas
        this.setWorld();
        this.run();
        
    }
    
    
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // This function delete the old image after we change the coordinate of a character
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsFromArray();
        this.addToMap(this.monster);
        this.ctx.translate(-this.camera_x, 0); // with the movement of the character the camera becomes the same "amount" of movement but in the opposite direction
        this.addStatusBar();
        this.ctx.translate(this.camera_x, 0); // it blocks the camera and avoid an infinity movement to link (it happens because draw repeat it self)
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        
        // Callback function -- continuous callback of the function draw();
        this.callBack();
        
    }
    
    callBack(){
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        })
    }
    
    addStatusBar(){
        // this.addFixedObject(this.lifeBarEndboss, this.lifeBarEndboss.IMAGES_LIFE_ENEMY, this.monster.life);
        this.addFixedObject(this.bottleBar, this.bottleBar.IMAGES_TABASCO, this.amountBottles);
        this.addFixedObject(this.lifeBar, this.lifeBar.IMAGES_LIFE, this.character.life);
        this.addFixedObject(this.coinsBar, this.coinsBar.IMAGES_COINS, this.amountCoins);
        
    }
    
    addObjectsFromArray(){
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        // this.addObjectsToMap(this.level.monster);
        this.addObjectsToMap(this.level.collectableObjects[0].bottles);
        this.addObjectsToMap(this.level.collectableObjects[0].coins);
        this.addObjectsToMap(this.throwableObjects);
    }
    
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);  
            this.changeBottleAnimation(o);
        });
        
        
    }
    /**
     * This function turn the image in the other direction if the property otherDirection is true. Then draw the object in the canvas.
     * 
     * @param {object} mo 
     */
    addToMap(mo){
        this.flipImage(mo);
        
        mo.draw(this.ctx);
        
        mo.setFrame(this.ctx);
        

        this.flipImageBack(mo);
    }
    
    addFixedObject(fo, array, percentage){
        fo.draw(this.ctx);
        fo.setPercentage(percentage, array);
    
    }
    
    setWorld(){
        this.character.world = this;
        this.level.monster[0].world = this;
    
    }

    flipImage(mo){
        if(mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
    }
    
    flipImageBack(mo){
        if(mo.otherDirection){
            this.ctx.restore();
            mo.x = mo.x * -1;
        }
    }
    
    run(){
        
        this.checkCollisionsCharacterVSEnemy();
        this.checkCollisionsCharacterVSObjects();
        this.checkCollisionsObjectVSEnemy();
        this.checkCollisionsCharacterVSEndboss();
       
        
             
    }

   
    
    checkCollisionsCharacterVSEnemy(){
        setInterval(()=> {
            this.level.enemies.forEach((enemy)=> {
                let indexEnemy = this.level.enemies.indexOf(enemy);
                if(this.character.isColliding(enemy)){
                    if(this.character.isAttacking(enemy)){
                        
                            this.squashChicken(enemy);
                            console.log(indexEnemy, ' suashed')

                        
                        
                    } else {
                        this.character.hit();
                        console.log(indexEnemy, ' hit')
                        
                    }
                } 
            }) 
        }, 400);
            
    }

    squashChicken(enemy){
        if(enemy instanceof Chicken){
            this.chickenEndAnimation(enemy);
            let audioChicken = new Audio(this.audio[0]).play();

        } else {
            this.chickEndAnimation(enemy);
            let audioChick = new Audio(this.audio[0]).play();
        }
        setTimeout(()=> {
            this.spliceChickenFromArray(enemy);

        }, 300);
    }

        
    checkCollisionsCharacterVSObjects(){
        setInterval(() => {
            this.collectBottles();
            this.collectCoins();

        }, 100);
            
    }

    checkCollisionsObjectVSEnemy(){
        setInterval(()=>{
            this.checkThrows();
        }, 200);
        setInterval(()=> {
            this.checkStrikeAgainstChicken();
            this.checkStrikeAgainstEndboss();

            
        }, 200);
    }
    
    
    checkThrows(){
        if(this.keyboard.SPACE && this.amountBottles > 0){
            let bottle = new ThrowableObject(this.character.x, this.character.y +20);
            this.throwableObjects.push(bottle);
            this.amountBottles -= 5;
            this.character.waiting();
            setTimeout(() => {
                let bottle_smash = new Audio(this.audio[3]).play();   

            }, 500)

            
        }
    }
    
    checkStrikeAgainstChicken(){
        
        let arrayEnemies = this.level.enemies;
        let arrayBottles = this.throwableObjects;
        arrayEnemies.forEach((enemy) => {
            let indexEnemy = this.level.enemies.indexOf(enemy); 
            arrayBottles.forEach((bottle) => {
                if(bottle.isColliding(enemy)){
                    this.killChicken(indexEnemy, enemy);
                    console.log('indexEnemy: ',indexEnemy, ' is killed') 
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
    
    
    
    
    killChicken(index, enemy){
        if(enemy instanceof Chicken){
            this.chickenEndAnimation(enemy)
            let audioChicken = new Audio(this.audio[0]).play();

        } else {
            this.chickEndAnimation(enemy);
            let audioChick = new Audio(this.audio[0]).play();
        }
        setTimeout(()=>{
            this.spliceChickenFromArray(enemy);

        }, 300);
        
       
    }

    hitEndboss(){
        this.monster.lastHit = new Date().getTime();
        this.monster.life -= 5;
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
            // let ID = arrayEnemies[index].id;
            arrayEnemies.splice(index, 1);
            console.log(index, 'is not in array more')
            // console.log(ID, ' ID is not in array more')

        
        
    
    }

  

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
            }
        })
    }

    
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
  
    

    

    // playMusic(){
    //     this.soundtrack_audio.play();
    //     setInterval(() => {
    //         this.soundtrack_audio.play();
    //     }, 28000);    
    
    
    // }
    
}