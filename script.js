var Dail = ["Aleena", "Colton", "Vinisha", "Senay", "Ali", "Henry", "Mario", "Levy", "Afsheen", "Kenadie", "Karsen", "Tysen", "Abe", "Hayden", "Jawdan", "Dylan", 
    "Nathaniel", "Jinoo", "Jeremiah", "Anya", "Sage", "Evgeny", "Kaylie", "Suvan", "Bradley", "Ella", "Amara"];
function rng(num){ 
    return Math.floor(Math.random() * num) + 1;
}

document.getElementById("button").addEventListener("click", function() {
    const market = document.querySelector('.all');
    market.classList.add('active');
    document.body.style.backgroundColor = "#404350ff";

    let randomNumber = rng(2700);
    if (randomNumber <= 27) {
        const blook = "Mr.Dail";
    }
    else{
        const commonnum = rng(26);
        blook=Dail[commonnum - 1];
    }
    document.getElementById("test").textContent = blook;
});