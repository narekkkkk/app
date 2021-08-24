// let x = [10,12,13,15,18,17,19,20]
// let y = [];
// for (i = 0 ; i < x.length ; i++){
// 	if(x[i] >= 10 && x[i] <= 20 ){
// 		y.push(x[i])
// 	}
		
// }
// console.log(y)


// let m = [
// ["php", "laravel", "react"],
// ["javascript", "angular"],
// ["java", "android", "spring"]
// ];
// for (let i = 0; i < m.length; i++) {
//  result.innerHTML += i                                           //m[0][1] ktpi laravel@
//  for (let j = 0; j < m[i].length; j++){
//   result.innerHTML += "<li>" + m[i][j] + "</li>"
//  }
// }

// inchpes dimel tegin  document.getElementsByTagName("p")
//  inchpes dimel idin document.getElementsByid("i")
//  inchpes dimel classin document.getElementsByClassName("c")

let i = document.getElementById("i")
i.style.background = "yellow"

let d =  document.getElementsByClassName("c")
for(let i = 0 ; i < d.length ; i++){
	d[i].style.border = "5px solid red"
	// nuyny karox e linel tegin dimeluc  document.getElementsByTagName("p")
}

//query selector
// document.querySelector("p")//tag name
// document.querySelector(".ClassName")
// document.querySelector("#idName")
// document.querySelectorAll(".ClassName")

let c = document.getElementsByClassName("parent")
 let a = document.querySelectorAll(".p")
 for (let i = 0 ; i < a.length ; i++){
a[i].style.background = "yellow"
}

// let btn = document.querySelector("#btn1")
// btn.addEventListener("click", A)
// function A(){
//   let n =  document.querySelectorAll(".parent")
//   console.log(n)
//   for (let i = 0 ; i < n.length ; i++){
//   	n[i].style.background = "red"
//   } 
// }

let k = document.querySelector("#s")
k.addEventListener("click", F)
function F(){
	alert("Cheked")
}

let arr = document.querySelectorAll("parent")
for (let i = 0; i <arr.length; i++) {
 arr[i].addEventListener("click", F);
}
function F(){
	
}

// let arr = document.querySelectorAll("parent")
// for (let i = 0; i <arr.length; i++) {
//  arr[i].addEventListener("click", F);
// }
// function F() {
//   let r = Math.floor(Math.random() * 256);  
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//  for(let i = 0; i < arr.length; i++) {
//   arr[i].style.background = 'yellow'
//  }
//  let color = rgb(${r}, ${g}, ${b})
//   arr[i].style.background = color;
// }