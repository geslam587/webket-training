
function numberChoose() { document.querySelector("h4").innerHTML =`you will add ${document.querySelectorAll(".shadow").length} users` 
                            if (document.querySelectorAll(".shadow").length == 6 ) {
                                document.getElementsByClassName("button")[0].classList.add("checkall")
                                document.getElementsByClassName("button")[0].innerHTML = "Deselect all"
                                
                            }
                            else{
                                document.getElementsByClassName("button")[0].classList.remove("checkall")
                                document.getElementsByClassName("button")[0].innerHTML = "select all"
                                 }
}

function check() {
    let allcards=  document.getElementsByClassName("card")
    let allcheck= document.getElementsByClassName("check")
    
    if ( !document.getElementsByClassName("button")[0].classList.contains("checkall")) {
        console.log(123);
        for (let cardd of allcards) {cardd.classList.add("shadow")}
        for (let checkk of allcheck) {checkk.classList.add("checked")}
    }
    else{
        console.log(123);
        for (let cardd of allcards) {cardd.classList.remove("shadow")}
        for (let checkk of allcheck) {checkk.classList.remove("checked")}
    }
    if (!document.getElementsByClassName("button")[0].classList.contains("checkall")) {
        document.getElementsByClassName("button")[0].classList.add("checkall")
        document.getElementsByClassName("button")[0].innerHTML = "Deselect all"
        numberChoose()
    }
    else{
        document.getElementsByClassName("button")[0].classList.remove("checkall")
        document.getElementsByClassName("button")[0].innerHTML = "select all"
        numberChoose()
    }
}
let count = 0
function checkone(num) {
    document.getElementsByClassName("card")[num].classList.toggle("shadow")
    document.getElementsByClassName("check")[num].classList.toggle("checked")   
    numberChoose()
}

