addEventListener("keydown", function(e){
    if(play === true){
        if(e.code === "KeyD" || e.code === "ArrowRight") vx = 2, move = true, frameY = 0;
        if(e.code === "KeyA" || e.code === "ArrowLeft") vx = -2, move = true, frameY = 1;
        if(e.code === "Space" || e.code === "KeyW" || e.code === "ArrowUp")
            if(grounded === true) vy = -4, grounded = false;
    }
});

addEventListener("keyup", function(e){
    if(play === true){
        if(e.code === "KeyD" || e.code === "ArrowRight") vx = 0, move = false;
        if(e.code === "KeyA" || e.code === "ArrowLeft") vx = 0, move = false;
    }
});