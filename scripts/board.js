const canvas = document.querySelector(".board");
const ctx = canvas.getContext("2d");

let x = 475;
let y = canvas.height - 50;
let vx = 0;
let vy = 0;

let grounded = true;

function update(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    if(x < 0) {
        x = 0;
    } else if (x + 50 > 1000) {
        x = 950;
    } else {
        x += vx;
    }
    y += vy;

    collision();
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(update);
}

function collision(){
    if(y > canvas.height - 50){
        y = canvas.height - 50;
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