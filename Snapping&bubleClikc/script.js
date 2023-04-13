
function scrollWin() {
    window.scrollBy({top:100,left:0,behavior:"smooth"});
  }

  function printMousePos(click) {
    let circl = document.createElement("div")
    document.querySelector('.content').append(circl)
    let x=  click.x 
    let y=    click.y
        circl.classList.add('click')
        circl.style.left=x + "px"
        circl.style.top = y + "px"
        setTimeout( function() { circl.remove() }, 400 )
    
  }
  document.querySelector(".content").addEventListener("click", printMousePos);