const input = document.getElementById("txt")
const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    input.classList.toggle("active")
})