let text = document.querySelectorAll("p")
let p = document.querySelectorAll('.btn')
for (let i = 0 ; i < p.length ; i++){
	console.log(p[i])
	p[i].addEventListener("click" , F)
}
function F(){
	this.style.background = "red"
	this.parentElement.style.border = "5px solid green"
	for(let i = 0 ; i < text.length ; i++){
		console.log(text[i])
		text[i].style.textAlign = "center"
	}
}
let b = document.querySelector("#btn1")
b.addEventListener("click" , A)
function A(){
	let head = document.createElement("h1")
	//document.body.append(head)
    document.body.prepend(head)
	head.innerHTML = "text"
}
