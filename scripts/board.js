const canvas = document.querySelector(".board");
const ctx = canvas.getContext("2d");

let x = 475;
let y = 450;
let vx = 0;

function update(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    if(x < 0) {
        x = 0;
    } else if (x + 50 > 1000) {
        x = 950;
    } else {
        x += vx;
    }
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(update);
}
update();