function F() {
let i = document.getElementById("inp");
let h = document.getElementById("hh");
 h.innerHTML = i.value ;
 if(i.value > 9 && i.value < 100){
 	h.innerHTML = "duq mutqarel eq erknish tiv"
 }
 else {
  h.innerHTML = "muqagreq erknish tiv"
 }
}
function F1(){
	let i1 = document.getElementById("inp1");
	let h1 = document.getElementById("h1");
    let i2 = document.getElementById("inp2");
    let i3 = document.getElementById("inp3");
    if (i1.value == i2.value && i1.value == i3.value){
    	h1.innerHTML = "bolor tvery irar havasar en"
    }
    else{
    	h1.innerHTML = "greq havasar tver"
    }
}

function F2(){
    let ii = document.getElementById("inp1");
    let h2 = document.getElementById("h1");
    let ii1 = document.getElementById("inp2");
    let ii2 = document.getElementById("inp3");
    if (ii.value == 0 && ii1.value == 0 && ii2.value == 0) {
    	h2.innerHTML = "bolor texerum mutqagrvac e 0"
    }
    else{
    	h2.innerHTML = "motqagreq 0"
    }
}
function F3(){
    let i1 = document.getElementById("inp1");
	let h1 = document.getElementById("h1");
    let i2 = document.getElementById("inp2");
    let i3 = document.getElementById("inp3");
    let z  = 0; 
    
    if (i1.value == 0){
    z = z + 1
    }
    if (i2.value == 0){
    z = z + 1 
    }
    if (i3.value == 0){
    z = z + 1
    }
    h1.innerHTML = "mutqagrvac e  " + z + "hat 0"
}
function F4(){
    let i1 = document.getElementById("inp1");
    let h1 = document.getElementById("h1");
    let i2 = document.getElementById("inp2");
    let i3 = document.getElementById("inp3");
    
    if(i1.value < i2.value && i2.value < i3.value ){
        h1.innerHTML = i1.value + "," + i2.value + "," + i3.value + ","
    }
    else if(i1.value < i3.value && i3.value < i2.value){
        h1.innerHTML = i2.value + "," + i1.value + "," + i3.value + ","
    }
    else if(i2.value < i1.value && i1.value < i3.value){
         h1.innerHTML = i2.value + "," + i1.value + "," + i3.value + ","
    }
    else if(i2.value < i3.value && i3.value < i1.value){
        h1.innerHTML = i2.value + "," + i3.value + "," + i1.value + ","
    }
    else if (i3.value < i1.value && i1.value < i2.value){
        h1.innerHTML = i3.value + "," + i1.value + "," + i2.value + ","
    }
    else{
        h1.innerHTML = i3.value + "," + i2.value + "," + i1.value + ","
    }
}
function countPay(){
    let num = document.getElementById("lessons").value
    let h = document.getElementById("resul")
    let d = document.getElementById("design")
    d = 4200
    let p = document.getElementById("programming")
    p = 5700
    let t = document.getElementById("theoretical")
    t = 12500
    let sum = d + p + t * num
    if (sum <= 300000){
        h.innerHTML = sum
    }
    if (sum >= 300000){
        h.innerHTML = sum / 100*40
    }
    if(num == "" ){
        h.innerHTML = "mutqagreq qanak"
    }
}