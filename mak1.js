let modal = document.querySelector("#myModal");

let btn = document.querySelector("#myBtn");

let span = document.querySelector(".close");

btn.onclick = () => {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = (event) =>  {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}