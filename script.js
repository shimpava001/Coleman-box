const sleep = ms => new Promise(res => setTimeout(res, ms));
var noclick = false;

function rng(num){ 
    return Math.floor(Math.random() * num) + 1;
}

document.getElementById("button").addEventListener("click", function() {
    const market = document.querySelector('.all');
    const open = document.querySelector('.open');
    market.classList.add('active');
    open.classList.add('active');
    document.body.style.backgroundColor = "#404350ff";

    let randomNumber = rng(2700);
    if (randomNumber <= 27) {
        return
    }
});

document.querySelector(".cover").addEventListener("click", async function() {
    if (noclick){
        return;
    }
    noclick = true;
    cover = document.querySelector(".cover");
    cover.classList.toggle("enlarged");
    await sleep(300);
    cover.classList.remove('enlarged');
    await sleep(300);
    cover.classList.toggle("enlarged");
    await sleep(300);
    cover.classList.remove('enlarged');
    await sleep(300);
    cover.classList.toggle("white");
    await sleep(300);
    cover.classList.toggle("trans");
});