let liste = document.getElementById("liste-commissions");
let input = document.getElementById("input");
let bouton = document.getElementById("button");

bouton.addEventListener("click",function (){
    let nouvelItem = document.createElement("li");
    nouvelItem.innerHTML = input.value;
    liste.appendChild(nouvelItem);
})
