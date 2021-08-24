var size = 200
var count = 50
function F(){
size = size + count	
let i = document.getElementById("idea");
if (size == 500){
	count = -50;
	i.style.width = size + "px";
	i.style.height = size + "px";
}
else{
	i.style.width = size + "px";
	i.style.height = size + "px";
}
if (size == 200){
	count = +50
	i.style.width = size + "px";
	i.style.height = size + "px";
}
else{
	i.style.width = size + "px";
	i.style.height = size + "px";
}

}