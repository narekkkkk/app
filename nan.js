let a = document.querySelector("#btn1")
let b = document.querySelector("#btn2")


a.addEventListener("click", A)
function A(){
    document.body.style.backgroundColor = "lightyellow"
}
b.addEventListener("click", B)
function B(){
    document.body.style.backgroundColor = "darkblue"
}