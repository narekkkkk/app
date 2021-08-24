function F(){
	let x = document.querySelector("#inp").value
    let h = document.querySelector("#head")
  
    	if(x < 0){
        h.innerHTML = x  + "  duq stacel eq bacasakan tiv"
    	}
    	else{
    		h.innerHTML = x + " duq tpel eq drakan tiv"
    	}
    
}


function A(x){
  for (let i = 0 ; i < x.length ; i++){
  	if (x[i] <= 0){
  	   x[i] = 0 
  	}
   
  }
	  return x
}
console.log(A([5,12,4,-89,-74,-41,-5,-6,0]))

function B(x){
	let a = 1
	for (let i = 0 ; i < x.length ; i++){
       if(x[i] > 0 && x[i] % 2 == 0 ){
       	a = x[i] * a
       }
	}
    return a
}
console.log(B([8,-12,8,-89,-74,-41,-5,-6,0]))



let h = document.querySelector("#result")
let c = [["qdq","vsv"], ["svs","wvs"], ["cvv","gef"]]
    for (let i = 0 ; i < c.length ; i++){
      console.log(c[i])
      for (let j = 0 ; j < c[i].length ; j++){

      	 h.innerHTML += "<li>" + c[i][j] + "<li>"

      }


    }
   
   let str = "scdvdvsdvv"
  	str = str.replace(str,"*")
  	console.log(str)
  
   let arr2 = "abg , dez , eyt , jil"
   arr2.split("")
   console.log(arr2)