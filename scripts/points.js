let play = false;

const startButton = document.querySelector(".start-button");
const timer = document.querySelector(".timer");
startButton.addEventListener("click", ()=>{
    play = true;
    let stopPlaying = setInterval(()=>{
        spawnBlock(0);
    }, 1000);
    startButton.style.display = "none";
    score = 0;
    const scoreText = document.querySelector(".score");
    scoreText.innerHTML = `${score}`;
    timer.innerHTML = 60;

    x = 475;

    let i = 60;
    let stopTimer = setInterval(()=>{
        i--;
        timer.innerHTML = `${i}`;
        if(i === 0) {
            play = false;
            clearInterval(stopPlaying);
            clearInterval(stopTimer);
            startButton.style.display = "initial";
            vx = 0;
        }
    }, 1000)
});



let score = 0;

function spawnBlock(integration){
    if(play === true){
        let boostChance = Math.floor(Math.random() * 10);

        const block = document.createElement("img");
        block.classList.add("block");
        if(integration === 0){
            if(boostChance === 1) {
                block.src = "images/ethereum.png";
            } else {
                block.src = "images/point.png";
            }
        } else {
            let randomLogo = Math.floor(Math.random() * 17);
            block.src = `images/integrations/logo${randomLogo}.png`;
            boostChance = 0;
        }

        const blockParent = document.querySelector(".board");
        
        blockParent.appendChild(block);
        
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
            checkIfPlayerTouch(x2, y2, block, blockInterval, boostChance);
        
            if(!grounded2){
                vy2 += 0.005;
                y2 += vy2;
                block.style.top = `${y2}px`;
            }
        });
    }

}
spawnBlock();

function checkIfPlayerTouch(xBlock, yBlock, blockElement, blockInterval, boost){
    if(yBlock + POINT_HEIGHT >= y && yBlock <= y + PLAYER_HEIGHT){
        if(xBlock + POINT_WIDTH >= x && xBlock <= x + PLAYER_WIDTH){
            blockElement.remove();
            clearInterval(blockInterval);
            score++;
            const scoreText = document.querySelector(".score");
            scoreText.innerHTML = `${score}`;

            if(boost === 1) {
                let i2 = 0;
                let stopBoost = setInterval(()=>{
                    if(i2 === 5) {
                        clearInterval(stopBoost);
                    }
                    spawnBlock(1);
                    i2++;
                }, 500)

            }
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
