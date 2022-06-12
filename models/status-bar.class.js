class StatusBar extends DrawableObject {
    x = 40;
    y = 10;
    height= 60;
    width = 200;
    percentage = 100;
    
    /**
     * This function turns an amount regularly updated into an index related to an image of a given array.
     * @param {number} percentage - Amount of an element that could be accumulated or lost by the character. For Example life or coins.
     * @param {array} array - An array composed of image paths.
     */
    setPercentage(percentage, array){
        this.percentage = percentage;
        let path = array[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    /**
     * For each amount a number representing an index is returned.
     * @returns {number} - An index.
     */
    resolveImageIndex(){
        if(this.percentage >= 100){
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