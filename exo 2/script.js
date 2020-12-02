let liste = document.getElementById("liste-commissions");
let input = document.getElementById("input");
let bouton = document.getElementById("button");
let boutonSupp = document.getElementById("buttonSupp");

bouton.addEventListener("click",function (){
    let nouvelItem = document.createElement("li");
    if(input.value.length > 0){
        nouvelItem.innerHTML = input.value;
        liste.appendChild(nouvelItem);
    }
})

boutonSupp.addEventListener("click", function (){
    let elements = document.querySelectorAll("#liste-commissions > li");
    if(elements.length > 0) {
        elements[elements.length - 1].remove();
    }
})
