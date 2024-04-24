addEventListener("keydown", function(e){
    if(e.code === "KeyD") vx = 5;
    if(e.code === "KeyA") vx = -5;
});

addEventListener("keyup", function(e){
    if(e.code === "KeyD") vx = 0;
    if(e.code === "KeyA") vx = 0;
});