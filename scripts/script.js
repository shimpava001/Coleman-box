const sleep = ms => new Promise(res => setTimeout(res, ms));
var uncommon = ["NPC Suvan", "Nerd Sarvesh", "Asian Andrew", "Micro Lyric", "Doge-shartinum", "Julian"]
var rare = ["Oven", "jjs crying Bruce", "Cinaminate", "Jarden"]
var epic = ["Adrian", "Femboy Tucker"]
var legendary = ["Mr.Dail"]
var chroma = ["Singing Suvan", "Kiwi", "The ragebaiting one"]
var mystic = ["Qintellegence Penguin"]
var noclick = false;
let hasOpened = false;
var rarity = null;
var savedBlooks

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
        rarity.classList.add("cyan");
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
    savedBlooks = localStorage.getItem(blook);
    if (savedBlooks === blook) {
        console.log("You already have this blook!");
        return;
    }
    else {
      localStorage.setItem(blook, Rarity);
    }
});

//chatgpt
function makeShapes(rarity, count = 40) {
  const burst = document.getElementById('burstArea');
  if (!burst) return console.error('burstArea element not found');
  const rand = (min, max) => Math.random() * (max - min) + min;
  const shapes = ['circle', 'square', 'triangle'];

  for (let i = 0; i < count; i++) {
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    const s = document.createElement('div');
    const angle = rand(0, 2 * Math.PI);
    const size = rand(30, 60);
    const distance = rand(200, 350);
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const rot = rand(-1.5, 1.5);
    const dur = rand(2.5, 3); // faster burst

    // Set CSS vars for animation
    s.style.setProperty('--size', `${size}px`);
    s.style.setProperty('--x', `${dx}px`);
    s.style.setProperty('--y', `${dy}px`);
    s.style.setProperty('--rot', `${rot}turn`);
    s.style.setProperty('--dur', `${dur}s`);

    // Random pastel-ish color, you can customize by rarity here:
    let hue;
    switch (rarity) {
      case 'Uncommon': hue = rand(120, 160); break; // greenish
      case 'Rare': hue = rand(200, 240); break;     // blueish
      case 'Epic': hue = rand(0, 30); break;        // reddish
      case 'Legendary': hue = rand(30, 60); break;  // orange/yellow
      case 'Chroma': hue = rand(280, 320); break;   // purple/pink
      case 'Mystic': hue = rand(180, 210); break;   // cyan
      default: hue = rand(0, 360);
    }
    const color = `hsl(${hue}, 80%, 65%)`;
    s.style.setProperty('--clr', color);

    s.style.left = '50%';
    s.style.top = '50%';

    if (shapeType === 'circle') {
      s.className = 'shape';
      s.style.setProperty('--br', '50%');
      s.style.backgroundColor = color;
      s.style.backgroundImage = 'none';
    } else if (shapeType === 'square') {
      s.className = 'shape';
      s.style.setProperty('--br', '6px');
      s.style.backgroundColor = color;
      s.style.backgroundImage = 'none';
    } else if (shapeType === 'triangle') {
      s.className = 'triangle';
      s.style.setProperty('--triangle-size', `${size / 2}px`);
      s.style.backgroundColor = 'transparent'; // triangles use border
      s.style.borderBottomColor = color;
    }

    burst.appendChild(s);

    s.addEventListener('animationend', () => s.remove(), { once: true });
  }
}


function positionBurstArea() {
  const blook = document.querySelector('.blook');
  const burst = document.getElementById('burstArea');
  const rect = blook.getBoundingClientRect();

  // Position burstArea at the center of the .blook image
  burst.style.top = `${rect.top + rect.height / 2}px`;
  burst.style.left = `${rect.left + rect.width / 2}px`;
  burst.style.transform = 'translate(-50%, -50%)';
}



//not chatgpt
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

    positionBurstArea();
    makeShapes(Rarity, 75);
    if (blook === "The ragebaiting one") {
        const domainvid = document.querySelector(".domainvid");
        console.log("Ryōiki Tenkai");
        domainvid.classList.add('active');
        domainvid.muted = false; 
        domainvid.play();
    }
    if (blook === "Adrian") {
        console.log("EARTHQUAKE!!!");
        document.body.classList.add('shake');
        alert("EARTHQUAKE!!!");
    }
    noclick = false;
    hasOpened = true;
});

function closeModal() {
    const rarity = document.querySelector(".rarity");
    const all = document.querySelector('.all');
    const open = document.querySelector('.open');
    const cover = document.querySelector('.cover');
    const domainvid = document.querySelector('.domainvid');
    all.classList.remove('active');
    open.classList.remove('active');
    cover.classList.remove('trans');
    cover.classList.remove('white');
    cover.classList.remove('enlarged');
    domainvid.classList.remove('active');
    document.body.classList.remove('shake');
    document.body.style.overflow = "";
    domainvid.pause();
    domainvid.muted = true; 
    domainvid.currentTime = 0;
    rarity.classList.remove('green', 'blue', 'red', 'orange', 'cyan', 'mystic');
    document.querySelector('.blook').style.cursor = 'default';
    document.body.style.backgroundColor = '';
    noclick = false;
    hasOpened = false
    const burst = document.getElementById('burstArea');
    while (burst.firstChild) {
        burst.removeChild(burst.firstChild);
    }

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

