
let a = ["077","043","041","095"];
let i = document.querySelector("#inp");
let b = document.querySelector("#btn");
b.addEventListener("click" , Num)


function D(n){
let num = 0
for(let i = 0 , i = n , i++ ){
    if(n%i === 0){
            num++
        }
    }
    return num
} 
console.log(D(25))
