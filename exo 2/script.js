let liste = document.getElementById("liste-commissions");
let input = document.getElementById("input");
let bouton = document.getElementById("button");
let boutonSupp = document.getElementById("buttonSupp");

bouton.addEventListener("click",function (){
    let nouvelItem = document.createElement("li");
    nouvelItem.innerHTML = input.value;
    liste.appendChild(nouvelItem);
})

boutonSupp.addEventListener("click", function (){
    liste.removeChild(liste.lastChild)
})