console.log("Script");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = "rood"
    fruitvak.appendChild(nieuwElement)
}

function zetInGroenteLa(groente){
    console.log(groente);
    const nieuwElement2 = document.createElement('h2');
    nieuwElement2.innerHTML = groente;
    groentevak.appendChild(nieuwElement2)
}