const progress = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

console.log(prevBtn)

let steps = 0

prevBtn.addEventListener("click",()=>{
    steps--;
    update()
})

nextBtn.addEventListener("click",()=>{
    steps++;
    update()
})

function update(){
    progress.style.width = `${steps * 2 * 45}px`
    
    circles.forEach((circle,num)=>{
        if(steps >= num){
            circle.classList.add("active")
        } else{
            circle.classList.remove("active")
        }
    })

    if(steps === 0 ){
        prevBtn.disabled = true
        prevBtn.style.cursor = "not-allowed"
    } else if(steps === 3){
        nextBtn.disabled = true
        nextBtn.style.cursor = "not-allowed"
    } else{
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}


