let myButton = document.querySelector("#myButton");
let myInput = document.querySelector("#myInput");
let body = document.querySelector("body");

myInput.addEventListener( "click", (e) => console.log(e) );

body.addEventListener("click", function(e){
    console.log("X=",e.clientX,"Y=",e.clientY);
});

myButton.addEventListener('click', () => {
    console.log("ok");    
});

myInput.addEventListener("change", (e) => {
    console.log(e.target.value);
});
myInput.addEventListener("keyup", (e) => {
    console.log(e.target.value);
});
