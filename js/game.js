let canvas;
let keyboard = new Keyboard();
let soundtrack_audio;

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function startGame(){
    soundtrack_audio = new Audio('./audio/morenita.mp3').play();
    document.getElementsByClassName('game')[0].classList.remove('d-none');
    document.getElementsByClassName('start-site')[0].classList.add('d-none');
    init();
    
    
}





document.addEventListener('keydown', (e) => {
    
        if(e.keyCode == 32){
            keyboard.SPACE = true;
        }
    
        if(e.keyCode == 40){
            keyboard.DOWN = true;
        }
    
        if(e.keyCode == 39){
            keyboard.RIGHT = true;
        }
    
        if(e.keyCode == 37){
            keyboard.LEFT = true;
        }
    
        if(e.keyCode == 38){
            keyboard.UP = true;
        }

    
    
     
});
document.addEventListener('keyup', (e) => {
    if(e.keyCode == 32){
        keyboard.SPACE = false;
    }

    if(e.keyCode == 40){
        keyboard.DOWN = false;
    }

    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38){
        keyboard.UP = false;
    }
   
     
});

document.addEventListener('mousedown', (e) => {
    let positionX = e.offsetX;
    let positionY = e.offsetY;
    if(positionX >= 680 && positionX <= 700 && positionY >= 440 && positionY <= 460){
        canvas.requestFullscreen();
    }
})





// window.addEventListener('resize', (e)=>{
//     if(window.innerWidth < 900){
//         e.stopPropagation();
//         document.getElementById('canvas').style = 'visibility: visible';
//     }
// })

// function excludeParent(e){
//     e.stopProagation();
//     document.getElementById('canvas').classList.remove('d-none');
// }
