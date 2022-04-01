document.querySelector(".form-control").addEventListener("click",myFunction);

function myFunction(){
    var x = document.querySelector(".form-control").value;
    if(x==="Please Select"){
        var y = document.querySelector(".insideText");
        y.textContent = "Please select an option from the dropdown menu.";
    }
    // else{

    // }
}
 


document.querySelector(".form-control2").addEventListener("click",myFunction2);

function myFunction2(){
    var x = document.querySelector(".form-control2").value;
    if(x==="Please Select"){
        var y = document.querySelector(".insideText2");
        y.textContent = "Please select an option from the dropdown menu.";
    }
}