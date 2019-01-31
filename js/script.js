"use strict";

console.log("Lancement du script");

const h = document.head;
const b = document.body;

console.log(b.childNodes[1]);

let montitre = document.getElementById("titreDeLaPage");



let boutonElement = document.getElementById("boutonChangeTitre");
boutonElement.addEventListener("click", function() {
    let nouveauTitre = document.getElementById("inputTitre").value;

    console.log("Clic !!!");
    montitre.innerHTML = nouveauTitre;
});