var ah3 = document.querySelector("h3");
var btn1 = document.querySelector(".btn-full");
var btn2 = document.querySelector(".btn-ghost");
var longCopy = document.querySelector(".longCopy");

btn1.addEventListener("click", function(){
    ah3.classList.toggle("dis");
})

ah3.addEventListener("mouseover", function(){
    ah3.className = "redtxt dis";
})

btn2.addEventListener("click", function(){
    longCopy.classList.toggle("dis");
})

