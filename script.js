function rng(num){ 
    return Math.floor(Math.random() * num) + 1;
}

document.getElementById("button").addEventListener("click", function() {
    let randomNumber = rng(10000);
    if (randomNumber >= 1 && randomNumber <= 100) {
        let blook = "Andrew";
        document.getElementById("test").textContent = blook;
    }
    else{
        let blook = "Suvan";
        document.getElementById("test").textContent = blook;
    }
});