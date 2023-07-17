const images = [
  {//Miles Morales
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {//Ratchet & Clank
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {//RE:VILLAGE
    image: 'img/03.jpg',
    title: 'Resident Evil: Village',
    text: "Resident Evil Village is the new chapter in Capcom's survival horror series. The game was also known as Resident Evil 8 for a time, being the direct sequel to the seventh chapter.",
  }, {//AC:NH
    image: 'img/05.jpg',
    title: "Animal Crossing: New Horizons",
    text: 'Welcome to Animal Crossing: New Horizons! Build your own island and meet new friends! Find fossils, fish, catch bugs, find new recipes and craft new objects!',
  }, {//Doom Eternal
    image: 'img/06.jpg',
    title: "Doom Eternal",
    text: 'Boom boom. DOOM Eternal is now available now on Xbox One, PS4, PC, and Nintendo Switch.',
  }
];


const thumbs = document.querySelector(".thumbnail-container");
console.log(images);

for (let i = 0; i < images.length; i++) {
  const games = images[i];
  console.log(games);
  thumbs.innerHTML = `<div class="thumbnails"></div>`;


}

