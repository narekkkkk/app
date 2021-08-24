let a = 0
function clickCount(){
let h = document.getElementById("result")
  a = a + 1  
  h.innerHTML = a
  if (a % 2 === 0){
  result.style.color = "pink"
  }
  else{
  	result.style.color = "aqua"
  }
  h.innerHTML = a
}