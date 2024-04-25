const block = document.createElement("div");
block.classList.add("block");
const blockParent = document.querySelector(".board");

blockParent.appendChild(block);

block.style.backgroundColor = "white";

let x2 = Math.floor(Math.random() * (canvas.width - 50));
block.style.left = `${x2}px`;

let vy2 = 0;
let y2 = 0;
let grounded2 = false;

setInterval(function Gravity(){
    blockCollision();
    checkIfPlayerTouch();

    if(!grounded2){
        vy2 += 0.005;
        y2 += vy2;
        block.style.top = `${y2}px`;
    }
});

function checkIfPlayerTouch(){
    if(y2 + 25 >= y){
        if(x2 + 25 >= x && x2 <= x + 50){
            block.remove();
        }
    }
}

function blockCollision(){
    if(y2 >= canvas.height - 45){
        y2 = canvas.height - 45;
        grounded2 = true;
        vy2 = 0;
    }
}