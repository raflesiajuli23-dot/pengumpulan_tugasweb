const genre = document.querySelector(".kedua-text");

const daftar = ["ACTION","HORROR","ROMANCE","COMEDY"];

let i = 0;

setInterval(function(){
    i++;
    if(i >= daftar.length){
        i = 0;
    }
    genre.textContent = daftar[i];
},4000);

document.querySelector(".signup-btn").addEventListener("click",function(){
    alert("Website Dalam Perbaikan");
});

document.querySelector(".login-btn").addEventListener("click",function(){
    alert("Website Dalam Perbaikan");
});