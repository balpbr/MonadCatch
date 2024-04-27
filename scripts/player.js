const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

let x = 475;
let y = canvas.height - 50;
let vx = 0;
let vy = 0;

let grounded = true;

const spritesheet = new Image();
spritesheet.src = "images/spritesheet.png";

const PLAYER_WIDTH = 55;
const PLAYER_HEIGHT = 110;
const POINT_WIDTH = 25;
const POINT_HEIGHT = 25;

const spriteWidth = 55;
const spriteHeight = 110;
let frameX = 0;
let frameY = 0;

let speed = 15;
let x5 = 0;

let move = false;

function update(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if(x < 0) {
        x = 0;
    } else if (x + PLAYER_WIDTH > 1000) {
        x = CANVAS_WIDTH - PLAYER_WIDTH;
    } else {
        x += vx;
    }
    y += vy;

    collision();
    // ctx.fillRect(x, y, 50, 50);
    if(move === true) {
        if(x5 % speed === 0 ) {
            if(frameX < 3) frameX++
            else {
                frameX = 0;
            }
        }
    }

    x5++;


    ctx.drawImage(spritesheet, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, x, y, 55, 110);

    requestAnimationFrame(update);
}

function collision(){
    if(y > CANVAS_HEIGHT - PLAYER_HEIGHT){
        y = CANVAS_HEIGHT - PLAYER_HEIGHT;
        grounded = true;
        vy = 0;
    }
}

update();

setInterval(function Gravity(){
    if(!grounded){
        vy += 0.05;
    }
});