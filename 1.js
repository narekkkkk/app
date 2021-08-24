function publish(){
	let u = document.getElementById("user").value
	let h = document.getElementById('result').innerHTML = u

}

function setStyle(){
	let txc = document.getElementById("textcolor").value;
	let bgc = document.getElementById("bgcolor").value;
	let fns = document.getElementById("fonSize").value;
    let sel = document.getElementById("sel").value;
    result.style.fontSize = fns + "px";
    result.style.backgroundColor = bgc; 
    result.style.color = txc;
    var a = document.getElementById("sel");
    var option = a.options[a.selectedIndex].text;
    result.style.fontFamily = option 
}