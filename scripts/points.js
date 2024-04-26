let play = false;

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", ()=>{
    play = true;
    startButton.style.display = "none";
});

setInterval(spawnBlock, 1000);

let score = 0;

function spawnBlock(){
    if(play === true){
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
        
        let blockInterval = setInterval(function Gravity(){
            blockCollision(y2, vy2);
            if(blockCollision(y2, vy2) === true) {
                grounded2 = true;
                setTimeout(() => {
                    block.remove();
                    clearInterval(blockInterval);
                }, 1000)
            }
            checkIfPlayerTouch(x2, y2, block, blockInterval);
        
            if(!grounded2){
                vy2 += 0.005;
                y2 += vy2;
                block.style.top = `${y2}px`;
            }
        });
    }

}
spawnBlock();

function checkIfPlayerTouch(xBlock, yBlock, blockElement, blockInterval){
    if(yBlock + 25 >= y && yBlock <= y + 50){
        if(xBlock + 25 >= x && xBlock <= x + 50){
            blockElement.remove();
            clearInterval(blockInterval);
            score++;
            const scoreText = document.querySelector(".score");
            scoreText.innerHTML = `${score}`;
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
