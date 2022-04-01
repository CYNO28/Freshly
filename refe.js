let popup = document.querySelector(".popup"),
    button = document.querySelector("#popupbtn");

button.addEventListener("click", openPop);

function openPop(){
  event.preventDefault();
  popup.style.display = "Block";
}

window.addEventListener("click", closePop);

function closePop(e){
  if(e.target == popup) {
  popup.style.display = "none";
}
}

