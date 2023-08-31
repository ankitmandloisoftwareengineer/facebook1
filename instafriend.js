var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var check = 0;
add.addEventListener("click",function()
{
    add.style.backgroundColor = "#fff";
    add.style.color = "black";
    document.querySelector("#friend").innerHTML = "Friend";
    document.querySelector("#friend").style.color = "green";
    remove.style.color = "white";
    remove.style.backgroundColor = "purple";
    check = 1;
})
remove.addEventListener("click",function(){
    remove.style.color = "black";
    remove.style.backgroundColor = "#fff";
    add.style.backgroundColor = "purple";
    add.style.color = "white";
    document.querySelector("#friend").innerHTML = "stranger";
    document.querySelector("#friend").style.color = "red";


})