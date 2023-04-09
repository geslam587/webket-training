
let hover = document.querySelector(".hover")
document.querySelector(".parant").addEventListener("click",Cleck)

document.querySelector(".parant").addEventListener("mousemove",move)
document.querySelector(".parant").addEventListener("click",printMouse)
let hblur = document.querySelector(".blur")

let x = 0
function Cleck(e) {
    hover.style.height= e.y + "px"
    hblur.style.height= e.y + "px"
    if (x == 0) { x = 1}
    else x = 0
}
function move(e) {
    if (x == 1) {
        hover.style.height= e.y + "px"
        hblur.style.height= e.y + "px"
        
    }
}
function printMouse(e) {
    let circl = document.createElement("div")
    document.querySelector(".parant").append(circl)
    circl.classList.add("click")
    circl.style.left = e.x + "px"
    circl.style.top = e.y + "px"
    setTimeout(() => {circl.remove()}, 200);
    
    let smallCircl = document.createElement("div")
    document.querySelector('.parant').append(smallCircl)
 
    smallCircl.classList.add('smallCircl')
    smallCircl.style.left=e.x + "px"
    smallCircl.style.top = e.y + "px"
        setTimeout( function() { smallCircl.remove() }, 200 )
    
}