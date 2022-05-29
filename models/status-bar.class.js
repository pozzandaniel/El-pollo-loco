class StatusBar extends DrawableObject {
    x = 40;
    y = 10;
    height= 60;
    width = 200;
    
    
   constructor() {
       super();
   }
  


    percentage = 100;

    setPercentage(percentage, array){
        this.percentage = percentage;
        let path = array[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if(this.percentage == 100){
            return 5;
        } else if(this.percentage > 80){
            return 4;
        } else if(this.percentage > 60){
            return 3;
        } else if(this.percentage > 40){
            return 2;
        } else if(this.percentage > 20){
            return 1;
        } else {
            return 0;
        }
    }
}