


function main(name , languages = "Arm"){
	console.log("Barev " + name + " " + languages)
}
main("Ani")
main("Narek" , "Ru")
main("Davit")
main("Hayk")

function F(a,b){
	console.log(a*b)
}
F(8,9)

function A(a,b){
	if(a < 0){
	 return	false
	}
    return true

}
console.log(A(5))
console.log(A(-7))

function B(a){
	if(a % 2 == 0){
   return a + 2
   }
   return a - 1

}
  console.log(B(5))
  console.log(B(4))


  function C(a){
  	let sum = 0 
  	for (i = 0 ; i < a.length ; i++){
  	if (a[i] % 2 == 0 ) {
  		sum = sum + a[i]
  	}
  }
  return sum
}
console.log(C([5,4,2,3,6,7,8,9]))

function M(){
	let x =  document.querySelector("#inp").value
	let h =  document.querySelector("#result")
    x = x.split(" ")
    for (let i = 0 ; i < x.length ; i++ ){
    	x[i] = x[i][0].toUpperCase() + x[i].substring(1)


    }
    x = x.join(" ")
    h.innerHTML = x
}



