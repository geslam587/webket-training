
function numberChoose() { document.querySelector("h4").innerHTML =`you will add ${document.querySelectorAll(".shadow").length} users` }
function numberChooseall() { document.querySelector("h4").innerHTML =`you will add ${document.querySelectorAll(".shadowall").length} users` }

function check() {
    let allcards=  document.getElementsByClassName("card")
    let allcheck= document.getElementsByClassName("check")

    if ( !document.getElementsByClassName("button")[0].classList.contains("checkall")) {
        for (let cardd of allcards) {cardd.classList.add("shadowall")}
        for (let checkk of allcheck) {checkk.classList.add("checkedall")}
    }
    else{
        for (let cardd of allcards) {cardd.classList.remove("shadowall")}
        for (let checkk of allcheck) {checkk.classList.remove("checkedall")}
    }
    if (!document.getElementsByClassName("button")[0].classList.contains("checkall")) {
        document.getElementsByClassName("button")[0].classList.add("checkall")
        numberChooseall()
    }
    else{
        document.getElementsByClassName("button")[0].classList.remove("checkall")
        numberChoose()
    }
}
let count = 0
function checkone(num) {
    document.getElementsByClassName("card")[num].classList.toggle("shadow")
    document.getElementsByClassName("check")[num].classList.toggle("checked")   
    // function numberChoose() { console.log(document.querySelectorAll(".shadow").length ); }
    numberChoose()
}

