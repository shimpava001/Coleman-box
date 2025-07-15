const sleep = ms => new Promise(res => setTimeout(res, ms));
var uncommon = ["Suvan bot", "Nerd Sarvesh", "Asian Andrew", "Micro Lyric", "Jawdan Jones", "Sigma phonk Adrian"]
var rare = ["Diego the ragebaiter", "Femboy Tucker", "Feesh Oven"]
var epic = ["jjs crying Bruce", "Cinaminanate"]
var legendary = ["Mr.Dail"]
var chroma = ["Singing Suvan", "Josue", "Mr. Dipaola", "Doge Diego"]
var mystical = ["Qintellegence penguin"]
var noclick = false;
var rarity = null;

function rng(num){ 
    return Math.floor(Math.random() * num) + 1;
}

document.getElementById("button").addEventListener("click", function() {
    const market = document.querySelector('.all');
    const open = document.querySelector('.open');
    market.classList.add('active');
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
        //document.querySelector(".blook").src = `images/${blook}.png`;
    }
    else if (randomNumber <= 1900) {
        Rarity = "Rare";
        rarity.classList.add("blue");
        let randomblook = rng(rare.length) - 1;
        blook = rare[randomblook];
        document.querySelector(".name").textContent = blook;
        //document.querySelector(".blook").src = `images/${blook}.png`;
    }
    else if (randomNumber <= 1980) {
        Rarity = "Epic";
        rarity.classList.add("red");
        let randomblook = rng(epic.length) - 1;
        blook = epic[randomblook];
        document.querySelector(".name").textContent = blook;
        //document.querySelector(".blook").src = `images/${blook}.png`;
    }
    else if (randomNumber <= 1995) {
        Rarity = "Legendary";
        rarity.classList.add("orange");
        let randomblook = rng(legendary.length) - 1;
        blook = legendary[randomblook];
        document.querySelector(".name").textContent = blook;
        //document.querySelector(".blook").src = `images/${blook}.png`;
    }
    else if (randomNumber <= 1999) {
        Rarity = "Chroma";
        rarity.classList.add("white");
        let randomblook = rng(chroma.length) - 1;
        blook = chroma[randomblook];
        document.querySelector(".name").textContent = blook;
        //document.querySelector(".blook").src = `images/${blook}.png`;
    }
    else{
        Rarity = "Mystical";
        rarity.classList.add("mystic");
        let randomblook = rng(mystic.length) - 1;
        blook = mystic[randomblook];
        document.querySelector(".name").textContent = blook;
        //document.querySelector(".blook").src = `images/${blook}.png`;
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
});

function closeModal() {
  const market = document.querySelector('.all');
  const open = document.querySelector('.open');
  const cover = document.querySelector('.trans');
  market.classList.remove('active');
  open.classList.remove('active');
  cover.classList.remove('active');
  document.body.style.backgroundColor = '';
  noclick = false;
}

document.querySelector('.open').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Optional: also close with ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
document.body.addEventListener('click', function(e) {
  if (noclick) return; // Block closing while animating

  const market = document.querySelector('.all');
  const open = document.querySelector('.open');

  // Ignore clicks on button or inside open modal
  if (e.target.closest('#button') || e.target.closest('.open')) return;

  if (market.classList.contains('active') && open.classList.contains('active')) {
    closeModal();
  }
});
