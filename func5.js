for(let i = 0; i < 100 ; i++){
	if(i % 7 == 0){
		console.log(i)
	}
}

for(let a = 10 ; a < 99 ; a++){
   if(a	* 17 <= 300){
    console.log(a)
   }
}
for(let b = 1 ; b < 51 ; b++){
	if(b % 3 == 0){
		console.log(b + "FIZZ")
	}
	 if(b % 5 == 0){
		console.log(b + "BAZZ")
	}
     if(b % 5 == 0 && b % 3 == 0){
    	console.log(b + "FIZZBAZZ")
    }
}

let c = 0
for(let d = 9 ; d < 21 ; d++){
	if(d % 2 == 0 ){
		c = c + d
	}
}
console.log(c)

let num = 0
let count = 0
for(let e = 10 ; e <= 20 ; e++){
	count = count + 1
   num = e + num
}
console.log(num/count)


let x = [2,12,18,22,8,19,3] 
let y = []
for(let i = 0; i < x.length;i++){
	y.push(x[i])
}
console.log(y)

let v = [2,12,18,22,8,19,3] 
for(i = 0; i < v.length ; i++){
	if(v[0] < v[i]){
		v[0] = v[i]
	}
}
console.log(v[0])

let h = [2,5,4,1,3,9,7]
let f = 1
for(let i = 0 ; i < h.length ; i++){
	if(h[i] % 2 == 0){
		f = f * h[i]
	}
}
console.log(f)


let g = [2,5,4,7,8,9,6,3,1,-4,-7,-8,-9,-1,-2,-3]
for(i = 0 ; i < g.length ; i++){
	if(g[i] < 0){
		g[i] = 0
	}
}
console.log(g)

let m = [
["php", "laravel", "react"],
["javascript", "angular"],
["java", "android", "spring"]
];
for (let i = 0; i < m.length; i++) {
 result.innerHTML += i                                
 for (let j = 0; j < m[i].length; j++){
  result.innerHTML += "<li>" + m[i][j] + "</li>"
 }
}