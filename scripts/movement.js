addEventListener("keydown", function(e){
    if(e.code === "KeyD" || e.code === "ArrowRight") vx = 5;
    if(e.code === "KeyA" || e.code === "ArrowLeft") vx = -5;
    if(e.code === "Space" || e.code === "KeyW" || e.code === "ArrowUp")
        if(grounded === true) vy = -5, grounded = false;
});

addEventListener("keyup", function(e){
    if(e.code === "KeyD" || e.code === "ArrowRight") vx = 0;
    if(e.code === "KeyA" || e.code === "ArrowLeft") vx = 0;
});