setInterval(spawnBlock, 1000);

function spawnBlock(){

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
        blockCollision(y2, vy2);
        if(blockCollision(y2, vy2) === true) {
            grounded2 = true;
        }
        checkIfPlayerTouch(x2, y2, block);
    
        if(!grounded2){
            vy2 += 0.005;
            y2 += vy2;
            block.style.top = `${y2}px`;
        }
    });
}
spawnBlock();

function checkIfPlayerTouch(xBlock, yBlock, blockElement){
    if(yBlock + 25 >= y){
        if(xBlock + 25 >= x && xBlock <= x + 50){
            blockElement.remove();
        }
    }
}

function blockCollision(yBlock, vyBlock){
    if(yBlock >= canvas.height - 45){
        yBlock = canvas.height - 45;
        vyBlock = 0;
        return true;
    } else {
        return false;
    }
}