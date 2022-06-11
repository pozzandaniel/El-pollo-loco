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

    if(positionX >=30 && positionX <=60 && positionY >= 410 && positionY <= 440){
        keyboard.LEFT = true;
        setTimeout(()=>{
            keyboard.LEFT = false;
        }, 400)
    }
    if(positionX >=70 && positionX <=100 && positionY >= 410 && positionY <= 440){
        keyboard.UP = true;
        setTimeout(()=>{
            keyboard.UP = false;
        }, 400)
    }
    if(positionX >=110 && positionX <=140 && positionY >= 410 && positionY <= 440){
        keyboard.RIGHT = true;
        setTimeout(()=>{
            keyboard.RIGHT = false;
        }, 400)
    }
    if(positionX >=170 && positionX <=230 && positionY >= 410 && positionY <= 440){
        keyboard.SPACE = true;
        setTimeout(()=>{
            keyboard.SPACE = false;
        }, 400)
    }
    
})


// document.addEventListener('mouseup', (e)=> {
//     let positionX = e.offsetX;
//     let positionY = e.offsetY;

//     if(positionX >=30 && positionX <=60 && positionY >= 410 && positionY <= 440){
//         keyboard.LEFT = false;
//     }
// })





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
