let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    
    
}

document.addEventListener('keydown', (e) => {
    console.log(e);
})