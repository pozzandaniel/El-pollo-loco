let canvas;
let keyboard = new Keyboard();
let soundtrack_audio;
let mute_grn;
let play_grn;
let audioMute;
let audioPlay;
let resizeButton;
let leftButton;
let rightButton;
let jumpButton;
let attackButton;

/**
 * This function create the object "World", that contain all the other elements of the game
 * 
 */
function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * On click of the button "Start Game" in "index.html" starts the main elements of the game 
 * 
 */
function startGame(){
    soundtrack_audio = new Audio('./audio/morenita.mp3');
    soundtrack_audio.play();
    document.getElementsByClassName('game')[0].classList.remove('d-none');
    document.getElementsByClassName('start-site')[0].classList.add('d-none');
    document.getElementsByClassName('title-box')[0].classList.remove('d-none');
    init();
    touchScreenComandBar(); 
}

/**
 * On the press of the determined button on the keyboard is a related variable with the value "true" changed.
 * This value is false by default.
 * @param {boolean} keyboard.LEFT - It coincides to the left arrow of the keyboard.
 * @param {boolean} keyboard.RIGHT - It coincides to the right arrow of the keyboard.
 * @param {boolean} keyboard.UP - It coincides to the up arrow of the keyboard.
 * @param {boolean} keyboard.SPACE - It coincides to the the space bar.
 */
document.addEventListener('keydown', (e) => {
    
        if(e.keyCode == 32){
            keyboard.SPACE = true;
            e.preventDefault();
        }
    
        if(e.keyCode == 40){
            keyboard.DOWN = true;
            e.preventDefault();
        }
    
        if(e.keyCode == 39){
            keyboard.RIGHT = true;
            e.preventDefault();
        }
    
        if(e.keyCode == 37){
            keyboard.LEFT = true;
            e.preventDefault();
        }
    
        if(e.keyCode == 38){
            keyboard.UP = true;
            e.preventDefault();
        } 
});

/**
 * When the button is released the related variable turn his value to "false" again.
 */
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

/**
 * This function describes the events in the game, that are initialised with a button.
 * 
 */
function touchScreenComandBar(){

    translateButtonToVariable()

    playMusicByPCScreen();
    changeToFullscreenCondition();
    playMusicByMobileScreen();
    eventPressTouchScreen();
    eventReleaseTouchScreen();
}

/**
 * The elements in "index.html" are converted in global variables.
 * 
 */
function translateButtonToVariable(){
     mute_grn = document.getElementById('mute_grn');
     play_grn = document.getElementById('play_grn');
     audioMute = document.getElementById('audioMute');
     audioPlay = document.getElementById('audioPlay');
     resizeButton = document.getElementById('resizeButton');
     leftButton = document.getElementById('leftButton');
     rightButton = document.getElementById('rightButton');
     jumpButton = document.getElementById('jumpButton');
     attackButton = document.getElementById('attackButton');
}

/**
 * That concerns the sound icon present with a wider screen: more than 900px;
 * When the icon is pressed the music stops or plays according to the state of the selection.
 * @param {Audio} soundtrack_audio - It is the soundtrack of the game. It can be played or paused from the user.
 * @param {variable} mute_grn - It represents a div tag with an audio icon for mute occuring by PC Media Queries;
 * @param {variable} play_grn - Another div tag with the audio icon for loud music occurring by PC Media Queries 
 */
function playMusicByPCScreen(){
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
}

/**
 * This function let out completely the screen 
 * @param {variable} resizeButton - It represents the icon of the fullscreen occuring by PC Media Queries.
 * @param {canvas} canvas - It concerns the tag canvas with ID "canvas" in index.html. 
 * 
 */
function changeToFullscreenCondition(){
    resizeButton.addEventListener('mousedown', (e)=>{
        e.preventDefault();
        canvas.requestFullscreen();
    })
}

/**
 * When the user press the related buttons the soundtrack plays or stopps according to the state of the selection.
 * These buttons concern the Mobile view.
 * @param {Audio} soundtrack_audio - The soundtrack element of the game.
 * @param {variable} audioMute - The sound icon related to the interruption of the music.
 * @param {variable} audioPlay - The sound icon related to loud music.
 */
function playMusicByMobileScreen(){
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
}

/**
 * When a button on a mobile screen is pressed it converts a variable in a true value.
 * When the button is pressed his value is true;
 * When the button is released his value is false;
 * @param {boolean} keyboard.LEFT - It coincides to the icon with the left arrow.
 * @param {boolean} keyboard.RIGHT - It coincides to the icon with the right arrow.
 * @param {boolean} keyboard.UP - It coincides to the jump icon.
 * @param {boolean} keyboard.SPACE - It coincides to the attack icon.
 * @param {variable} leftButton - Left arrow icon.
 * @param {variable} rightButton - right arrow icon.
 * @param {variable} jumpbutton - Jump icon.
 * @param {variable} attackButton - Attack icon.
 */
function eventPressTouchScreen(){
    leftButton.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.LEFT = true;
    });
    rightButton.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    jumpButton.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.UP = true;
    });
    attackButton.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        keyboard.SPACE = true;
    });
}

/**
 * That's the mirror-like function of the function above.
 * When the buttons are released the variables "LEFT, RIGHT, UP, SPACE" turns to the default value: "false".
 */
function eventReleaseTouchScreen(){
    leftButton.addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.LEFT = false;
    });
    rightButton.addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    jumpButton.addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.UP = false;
    });
    attackButton.addEventListener('touchend', (e)=>{
        e.preventDefault();
        keyboard.SPACE = false;
    });
}

/**
 * At the bottom of "index.html" there is a descriptive panel with the keys of the keyboard.
 * But they aren't effectively buttons unlike the sound button and the fullscreen button.
 * They only have the same appearance.
 * When they are tried to be clicked, that initialise an alert message.
 */
function alertKeyboard(){
    alert('For this action use the keyboard');
}








