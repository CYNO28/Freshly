let popup = document.querySelector(".popup"),
    button = document.querySelector("#popupbtn");

button.addEventListener("click", openPop);

function openPop(){
  event.preventDefault();
  popup.style.display = "Block";
}
window.addEventListener("click", closePop);
document.querySelector('.close_raf>svg').addEventListener("click",function(){
  popup.style.display = "none";

})

function closePop(e){
  if(e.target == popup) {
    
  popup.style.display = "none";
}
}

