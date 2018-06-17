var ah3 = document.querySelector("h3");
var btn1 = document.querySelector(".btn-full");

btn1.addEventListener("click", function(){
    ah3.classList.toggle("dis");
})

ah3.addEventListener("mouseover", function(){
    ah3.className = "redtxt dis";
})