let d = document.getElementById('btn1');
let a = document.getElementById('btn');
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let h = document.createElement("h1")
let b = document.createElement("h1")
div1.append(h)
div2.append(b)
let mrger = "Mrger"
let banjarexener = "Banjarexen"
a.addEventListener("click" , F)
function F(){	
	h.innerHTML = "Mrger"
	b.innerHTML = "Banjarexen"
}

d.addEventListener("click" , V)
function V(){
let rep1 = mrger.replace("Mrger" , "Banjarexen")
let rep2 = banjarexener.replace("Banjarexen" , "Mrger")

}