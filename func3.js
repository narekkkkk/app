
!function (x) {
	console.log(x)
}(5)


let c = function(a){
	console.log(a)
}
c(6)

let y = (b)=>{
	console.log(b*b)
}
y(5)
console.log(
(a => a*a)(10)
)

let a = ((a,b) =>{
   if(a > b){
   	console.log(a+b)
   }
   else{
   console.log(a - 2)
   }

})(15,6)

let ss = ((a,b) =>
	a > b ? a+2 : a-2
)(15,6)
console.log(ss)

let v = ((a) => a % 2 == 0 ? a + 2 : a -2)
(15)
console.log(v)

let vv = ((a) =>
	a.map(item => console.log(item))
)([15,2,3,4,5])

// let aa = ((a) =>


//     a.map(i => {
//     	i < 0 ? console.log(bacasakan)

//     })
// )
// (-5,-6,-8,-7,8,9)


let str = [1,5,8,2,3,7,9,6]
str.sort()
console.log(str)