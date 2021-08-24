function F() {
	let x = document.getElementById('inp').value
	let h = document.getElementById('head')
  
    let arr = x.split("")
    let z = 0
    for(let i = 0 ; i < x.length ; i++) {
    	if(arr[i] == "b")
    		z = z + 1
    }

h.innerHTML = z

}


function A(x){

for(i = 0 ; i < x.length ; i++){
	if (x[i] < x[i + 1] ){
		return true
	}
	else if (x[i] > x[i + 1]){
		console.log(x[i])
    }
}

A([1,2,3,4,5,6,7,8,9])
A([5,2,3,6,8,7,4,1,9])
}