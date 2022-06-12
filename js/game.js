let canvas;
let keyboard = new Keyboard();
let soundtrack_audio;


function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
   
}

function startGame(){
    soundtrack_audio = new Audio('./audio/morenita.mp3');
    soundtrack_audio.play();
    document.getElementsByClassName('game')[0].classList.remove('d-none');
    document.getElementsByClassName('start-site')[0].classList.add('d-none');
    init();
    touchScreenComandBar();
    
    
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


function touchScreenComandBar(){
    let mute_grn = document.getElementById('mute_grn');
    let play_grn = document.getElementById('play_grn');
    let audioMute = document.getElementById('audioMute');
    let audioPlay = document.getElementById('audioPlay');
    let resizeButton = document.getElementById('resizeButton');
    let leftButton = document.getElementById('leftButton');
    let rightButton = document.getElementById('rightButton');
    let jumpButton = document.getElementById('jumpButton');
    let attackButton = document.getElementById('attackButton');

    mute_grn.addEventListener('mousedown', (e)=>{
        e.preventDefault();
        soundtrack_audio.pause();
        mute_grn.classList.add('d-none');
        play_grn.classList.remove('d-none');
    })
    
    play_grn.addEventListener('mousedown', (e) =>{
        e.preventDefault();
        soundtrack_audio.play();
        mute_grn.classList.remove('d-none');
        play_grn.classList.add('d-none');
    })

    resizeButton.addEventListener('mousedown', (e)=>{
        e.preventDefault();
        canvas.requestFullscreen();
    })

    audioMute.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        soundtrack_audio.pause();
        audioMute.classList.add('d-none');
        audioPlay.classList.remove('d-none');
    })

    audioPlay.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        soundtrack_audio.play();
        audioMute.classList.remove('d-none');
        audioPlay.classList.add('d-none');
    })

    leftButton.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.LEFT = true;
    })
    leftButton.addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.LEFT = false;
    })
    rightButton.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.RIGHT = true;
    })
    rightButton.addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.RIGHT = false;
    })
    jumpButton.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.UP = true;
    })
    jumpButton.addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.UP = false;
    })
    attackButton.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.SPACE = true;
    })
    attackButton.addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.SPACE = false;
    })
}

function alertKeyboard(){
    alert('For this action use the keyboard of your pc');
}



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
