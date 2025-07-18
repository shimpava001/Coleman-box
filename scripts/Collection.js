var blooks = [
  "NPC Suvan", "Nerd Sarvesh", "Asian Andrew", "Micro Lyric",
  "Doge-shartinum", "Julian", "Oven", "jjs crying Bruce",
  "Cinaminate", "Phantom Jawdan", "Adrian", "Femboy Tucker",
  "Mr.Dail", "Singing Suvan", "Kiwi", "The ragebaiting one",
  "Qintelligence Penguin"
];

for (let i = 0; i < blooks.length; i++) {
    let blookName = blooks[i];
    let Rarity =  localStorage.getItem(blookName); 

    if (localStorage.getItem(blookName) !== null) {
        let selector = `img.${blookName.replace(/ /g, ".")}`;
        let blookImg = document.querySelector(selector);

        if (blookImg) {
            blookImg.classList.add('owned');
            blookImg.src = `Blooks/${Rarity}/${blookName}.png`;
            blookImg.addEventListener("click", function () {
                let SelectBlook = document.querySelector(".SelectBlook");
                let rarity = document.querySelector(".rarity");
                document.querySelector(".blookselect").textContent = blookName;
                document.querySelector(".rarity").textContent = Rarity;
                document.querySelector(".SelectBlook").src = `Blooks/${Rarity}/${blookName}.png`;
                rarity.className = "rarity"
                SelectBlook.classList.add('owned');
                rarity.classList.add(Rarity.toLowerCase());
                if (blookName === "Qintelligence Penguin") {
                    let sound = new Audio('vids/noot noot.mp3');
                    sound.play();
                }
            });
        }
    }
}