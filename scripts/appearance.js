const colorTheme = document.querySelector(".color-theme");

const body2 = document.getElementsByTagName("body");

let night = true;

colorTheme.addEventListener("click", ()=>{
    if(night === true){
        colorTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
        night = false;
        document.querySelector("body").style.backgroundColor = "white";
    } else {
        colorTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
        night = true;
        document.querySelector("body").style.backgroundColor = "rgb(61, 61, 61)";
    }
});