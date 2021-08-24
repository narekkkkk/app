let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let p5 = document.getElementById('p5')
p1.addEventListener("click", A)
function A(){
	p1.style.fontSize = "30px"
}

p2.addEventListener("click", B)
function B(){
	p2.style.fontSize = "30px"
}

p3.addEventListener("click", C)
function C(){
	p3.style.fontSize = "30px"
}

p4.addEventListener("click", D)
function D(){
	p4.style.fontSize = "30px"
}

p5.addEventListener("click", E)
function E(){
	p5.style.fontSize = "30px"
}

let arr = []
let i1 = document.getElementById('i1')
// let i2 = document.getElementById('i2')
let i3 = document.getElementById('i3')
arr.push(i1,i3)
i1.addEventListener("click", F)
function F(){
i1.src = "3.png";
i3.src = "1.jpg"

}


// let btn = document.getElementById('btn1')
// let inp = document.getElementById('inp1').value
// let h = document.getElementById('hh')
//  btn.addEventListener("click", F)
//  function F(){
//  	h.innerHTML = inpl
//     inp.style.textTransform = "uppercase"
//   }




let btn2 = document.getElementById('btn2')
let inp2 = document.getElementById('inp2').value
let h1 = document.getElementById('h1')
 btn2.addEventListener("click", G)
function G(){
		h1.innerHTML = inp2.length
	}


