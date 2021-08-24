let p = document.querySelectorAll(".parent")
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")
let p4 = document.querySelector(".p4")
let p5 = document.querySelector(".p5")
let p6 = document.querySelector(".p6")
let p7 = document.querySelector(".p7")
let p8 = document.querySelector(".p8")
let p9 = document.querySelector(".p9")
let p10 = document.querySelector(".p10")
let p11 = document.querySelector(".p11")
let p12 = document.querySelector(".p12")
let p13 = document.querySelector(".p13")
let p14 = document.querySelector(".p14")
let p15 = document.querySelector(".p15")
let p16 = document.querySelector(".p16")
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

btn1.addEventListener("click", A)
function A(){
	p1.style.background = "green"
    p6.style.background = "green"
    p11.style.background = "green"
    p16.style.background = "green"
}
btn3.addEventListener("click", B)
function B(){
	p5.style.background = "red"
    p9.style.background = "red"
    p10.style.background = "red"
    p13.style.background = "red"
    p14.style.background = "red"
    p15.style.background = "red"
}
btn4.addEventListener("click", C)
function C(){
	p2.style.background = "red"
    p3.style.background = "red"
    p4.style.background = "red"
    p7.style.background = "red"
    p8.style.background = "red"
    p12.style.background = "red"
}
btn2.addEventListener("click", D)
function D(){
	p2.style.background = "red"
    p4.style.background = "red"
    p5.style.background = "red"
    p7.style.background = "red"
    p10.style.background = "red"
    p12.style.background = "red"
    p13.style.background = "red"
    p15.style.background = "red"
    p1.style.background = "green"
    p3.style.background = "green"
    p6.style.background = "green"
    p8.style.background = "green"
    p9.style.background = "green"
    p11.style.background = "green"
    p14.style.background = "green"
    p16.style.background = "green"
}



let i = document.querySelector("#inp1")
let b = document.querySelector("#btn5")
 b.addEventListener("click", F)
 function F(){
 	 alert(i.value * i.value)
 }
