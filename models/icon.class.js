class Icon extends DrawableObject{
    x = 680;
    y = 440;
    width = 20;
    height = 20;
    iconPath;

    
    

    constructor(iconPath, x, y, width, height ){
        super();
        this.iconPath = iconPath;
        this.loadImg(this.iconPath);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

     // called when user clicks the mouse

    handleMouseDown(){
        // e.preventDefault();
        console.log('Die Funktion funktioniert')
  
        // get the mouse position
        // var mouseX=parseInt(e.clientX-offsetX);
        // var mouseY=parseInt(e.clientY-offsetY);
  
       
            // if(ctx.isPointInPath(mouseX,mouseY)){
            //     // if inside, display the shape's message
            //     alert(shape.message);
            // }
        
  
    }
  
    
}
// listen for mousedown events
// document.getElementById("canvas").mousedown(function(){handleMouseDown();});