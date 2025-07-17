var blooks = [
  "NPC Suvan", "Nerd Sarvesh", "Asian Andrew", "Micro Lyric",
  "Doge-shartinum", "Julian", "Oven", "jjs crying Bruce",
  "Cinaminate", "Jarden", "Adrian", "Femboy Tucker",
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
            blookImg.src = `Blooks/${Rarity}/${blookName}.png`;
        }
    }
}
