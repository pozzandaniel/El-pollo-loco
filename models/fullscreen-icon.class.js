class FullscreenIcon extends DrawableObject{
    x = 680;
    y = 440;
    width = 20;
    height = 20;

    
    

    constructor(){
        super().loadImg('img/expand-solid.svg');
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