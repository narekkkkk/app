// function F(){
// 	let inp = inp1.value
// 	hh.innerHTML = inp.toUpperCase()
// 	 hh.innerHTML = inp.toLowerCase()
// }

// let str = "Mango , Ananas , Banana"
// str = str.split(" ")
// for (let i = 0 ; i < str.length ; i++){
// 	console.log(str[i].toUpperCase())
// }
// str =  str.join(" ")
// console.log(str)


// function F(){
// 	let inp = inp1.value
// 	inp = inp.split("  ")
// 	for (let i = 0 ; i < inp.length ; i++){
// 		hh.innerHTML = inp[i].toUpperCase();
// 	}
// }





let str = "Mango Ananas Banana"
// substr substring slice
str = str.substring(5,12) //te voreror elementic sksac ktr minchev vorerord element
str = str.substr(5,7) //voric sksac ktri ev qani hat
str = str.slice(5,12) //nuyna inch substringy bayc chi yndunum bacasakan element
console.log(str)

let strr = "Mango Ananas Banana"
//replace
strr = strr.replace(/Mango/g,  "Apple")
console.log(strr)

