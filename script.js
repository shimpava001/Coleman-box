function rng(num){ 
    return Math.floor(Math.random() * num) + 1;
}

document.getElementById("button").addEventListener("click", function() {
    const market = document.querySelector('.all');
    market.classList.add('active');
    document.body.style.backgroundColor = "#404350ff";

    let randomNumber = rng(2700);
    if (randomNumber <= 27) {
        return
    }
});