const sleep = ms => new Promise(res => setTimeout(res, ms));
var uncommon = ["NPC Suvan", "Nerd Sarvesh", "Asian Andrew", "Micro Lyric", "Doge-shartinum", "Julian"]
var rare = ["Oven", "jjs crying Bruce", "Cinaminate", "Jarden"]
var epic = ["Adrian", "Femboy Tucker"]
var legendary = ["Mr.Dail"]
var chroma = ["Singing Suvan", "Josue", "Kiwi", "The ragebaiting one"]
var mystic = ["Qintellegence Penguin"]
var noclick = false;
let hasOpened = false;
var rarity = null;

function rng(num){ 
    return Math.floor(Math.random() * num) + 1;
}

document.getElementById("button").addEventListener("click", function() {
    const all = document.querySelector('.all');
    const open = document.querySelector('.open');
    all.classList.add('active');
    open.classList.add('active');
    document.body.style.backgroundColor = "#404350ff";
    rarity = document.querySelector(".rarity");

    let randomNumber = rng(2000);
    if (randomNumber <= 1400) {
        Rarity = "Uncommon";
        rarity.classList.add("green");
        let randomblook = rng(uncommon.length) - 1;
        blook = uncommon[randomblook];
        document.querySelector(".name").textContent = blook;
        document.querySelector(".blook").src = `Blooks/${Rarity}/${blook}.png`;
    }
    else if (randomNumber <= 1900) {
        Rarity = "Rare";
        rarity.classList.add("blue");
        let randomblook = rng(rare.length) - 1;
        blook = rare[randomblook];
        document.querySelector(".name").textContent = blook;
        document.querySelector(".blook").src = `Blooks/${Rarity}/${blook}.png`;
    }
    else if (randomNumber <= 1980) {
        Rarity = "Epic";
        rarity.classList.add("red");
        let randomblook = rng(epic.length) - 1;
        blook = epic[randomblook];
        document.querySelector(".name").textContent = blook;
        document.querySelector(".blook").src = `Blooks/${Rarity}/${blook}.png`;
    }
    else if (randomNumber <= 1995) {
        Rarity = "Legendary";
        rarity.classList.add("orange");
        let randomblook = rng(legendary.length) - 1;
        blook = legendary[randomblook];
        document.querySelector(".name").textContent = blook;
        document.querySelector(".blook").src = `Blooks/${Rarity}/${blook}.png`;
    }
    else if (randomNumber <= 1999) {
        Rarity = "Chroma";
        rarity.classList.add("white");
        let randomblook = rng(chroma.length) - 1;
        blook = chroma[randomblook];
        document.querySelector(".name").textContent = blook;
        document.querySelector(".blook").src = `Blooks/${Rarity}/${blook}.png`;
    }
    else{
        Rarity = "Mystic";
        rarity.classList.add("mystic");
        let randomblook = rng(mystic.length) - 1;
        blook = mystic[randomblook];
        document.querySelector(".name").textContent = blook;
        document.querySelector(".blook").src = `Blooks/${Rarity}/${blook}.png`;
        document.querySelector('.blook').style.cursor = 'pointer';
    }
    document.querySelector(".rarity").textContent = Rarity;
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
    noclick = false;
    hasOpened = true;
});

function closeModal() {
    const rarity = document.querySelector(".rarity");
    const all = document.querySelector('.all');
    const open = document.querySelector('.open');
    const cover = document.querySelector('.cover');
    all.classList.remove('active');
    open.classList.remove('active');
    cover.classList.remove('trans');
    cover.classList.remove('white');
    cover.classList.remove('enlarged');
    rarity.classList.remove('green', 'blue', 'red', 'orange', 'white', 'mystic');
    document.querySelector('.blook').style.cursor = 'default';
    document.body.style.backgroundColor = '';
    noclick = false;
    hasOpened = false
}

document.querySelector('.open').addEventListener('click', function (e) {
  if (noclick || !hasOpened) return;

  if (e.target === this) {
    closeModal();
  }
});


document.body.addEventListener('click', function(e) {
  if (noclick || !hasOpened) return;

  const all = document.querySelector('.all');
  const open = document.querySelector('.open');

  if (e.target.closest('#button') || e.target.closest('.open')) return;

  if (all.classList.contains('active') && open.classList.contains('active')) {
    closeModal();
  }
});

document.querySelector('.blook').addEventListener('click', function(e) {
    if (Rarity === "Mystic") {
        console.log("Blook clicked");
        let sound = new Audio('vids/noot noot.mp3');
        sound.play();
    }
});

