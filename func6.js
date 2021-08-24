

// let h = document.getElementById('hh')
// h.style.color = "yellow"

// let c = document.getElementsByClassName("h")
// for(let i = 0 ; i < c.length ; i++){
// 	c[i].style.color = "green"
// }



// let v = document.getElementsByTagName("p")
// for(let j = 0 ; v.length ; j++ ){
// 	v[j].style.border = "5px solid red"
// }


let k = document.getElementById('h1')
k.addEventListener("click" , A)
function A(){
	k.style.color = "blue"  
	console.log("text")

}

let strr = "Hello JavaScript Hello Hello hello"
//replace
strr = strr.replace(/Hello/gi,  "Hi")
console.log(strr)

