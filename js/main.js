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
//In evidence image container
const inEvid = document.querySelector(".evidence-container");
//Thumbnail container
const thumbs = document.querySelector(".thumbnail-container");
//Image index 
let imgIndex = 0; //Let's start with giving it 0

console.log("Here is the array:")
console.log(images);
console.log("Here are the objects in the array:")

//----------------Start Cycle images.length
for (let i = 0; i < images.length; i++) {
  console.log("#" + i + " " + "Game");
  console.log("Image:");
  console.log(images[i].image);
  console.log("Title:");
  console.log(images[i].title);
  console.log("Description:");
  console.log(images[i].text);
  console.log("---")

  let active = "";

  if (i === 0) {
    active = "active";
  }
  //Let's print the images in Evidence
  inEvid.innerHTML += `
        <div class="evidence-img ${active}">
          <img class="game-img" src="${images[i].image}" alt="game img">
        </div>
        <div class="game-description p-2 ${active}">
          <h3 id="img-title">${images[i].title}</h3>
          <p id="img-descript">${images[i].text}</p>
        </div>
`
  //Thumbnails
  let thumb = document.createElement("div");
  let thumbImg = document.createElement("img");
  thumb.classList.add("thumbnails");
  //Let's add the border to the thumbnail by default when we open the page
  if (i === 0) {
    thumb.classList.add("active");
  }
  thumbImg.classList.add("thumbnails-img");
  thumbImg.setAttribute("src", `${images[i].image}`);
  thumbImg.setAttribute("alt", "game-img");
  thumbs.append(thumb);
  thumb.append(thumbImg);

  //Let's do the bonus 1 = click thumbnail to make the image in evidence appear
  thumb.addEventListener("click", function () {
    console.log("You selected:" + " " + `${images[i].title}`)

    //Img in Evidence
    const evidenceImgs = document.querySelectorAll(".evidence-img");
    //Thumbnails border
    const thumbImgs = document.querySelectorAll(".thumbnails");
    //Title and Text
    const infos = document.querySelectorAll(".game-description");

    //Let's remove the active class from the active image
    evidenceImgs[imgIndex].classList.remove("active");
    thumbImgs[imgIndex].classList.remove("active");
    infos[imgIndex].classList.remove("active");
    //and let's skin to the next img index
    imgIndex = i
    //Let's assign the class active to the next active img-text-thumbnails border
    evidenceImgs[imgIndex].classList.add("active");
    thumbImgs[imgIndex].classList.add("active");
    infos[imgIndex].classList.add("active");


  })
}
//----------------End Cycle images.length

// Let's make the thumbnails clickable. How?
//----...

//Let's create now the events for the prev and next btns
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

//Next Button
nextBtn.addEventListener("click", function () {
  console.log("next");

  //Img in Evidence
  const evidenceImgs = document.querySelectorAll(".evidence-img");
  //Thumbnails border
  const thumbImgs = document.querySelectorAll(".thumbnails");
  //Title and Text
  const infos = document.querySelectorAll(".game-description");

  //Let's remove the active class from the active image
  evidenceImgs[imgIndex].classList.remove("active");
  thumbImgs[imgIndex].classList.remove("active");
  infos[imgIndex].classList.remove("active");
  //and let's skin to the next img index
  imgIndex++
  //Let's put this contition that makes us return to 0 when the index is max
  if (imgIndex > evidenceImgs.length - 1) {
    imgIndex = 0;
  }
  if (imgIndex > thumbImgs.length - 1) {
    imgIndex = 0;
  }
  if (imgIndex > infos.length - 1) {
    imgIndex = 0;
  }
  //Let's assign the class active to the next active img-text-thumbnails border
  evidenceImgs[imgIndex].classList.add("active");
  thumbImgs[imgIndex].classList.add("active");
  infos[imgIndex].classList.add("active");
})

//Prev Button -- it will repeat most of the things
prevBtn.addEventListener("click", function () {
  console.log("prev");

  //Img in Evidence
  const evidenceImgs = document.querySelectorAll(".evidence-img");
  //Thumbnails border
  const thumbImgs = document.querySelectorAll(".thumbnails");
  //Title and Text
  const infos = document.querySelectorAll(".game-description");

  //Let's remove the active class from the active image
  evidenceImgs[imgIndex].classList.remove("active");
  thumbImgs[imgIndex].classList.remove("active");
  infos[imgIndex].classList.remove("active");
  //and let's skin to the next img index
  imgIndex--
  //Let's put this contition that makes us return to 0 when the index is max
  if (imgIndex < 0) {
    imgIndex = evidenceImgs.length - 1;
  }
  if (imgIndex < 0) {
    imgIndex = thumbImgs.length - 1;
  }
  if (imgIndex < 0) {
    imgIndex = infos.length - 1;
  }
  //Let's assign the class active to the next active img-text-thumbnails border
  evidenceImgs[imgIndex].classList.add("active");
  thumbImgs[imgIndex].classList.add("active");
  infos[imgIndex].classList.add("active");
})


//Let's make the bonus 2: images scroll autoplay
const autoplay = setInterval(function () {
  //Img in Evidence
  const evidenceImgs = document.querySelectorAll(".evidence-img");
  //Thumbnails border
  const thumbImgs = document.querySelectorAll(".thumbnails");
  //Title and Text
  const infos = document.querySelectorAll(".game-description");

  //Let's remove the active class from the active image
  evidenceImgs[imgIndex].classList.remove("active");
  thumbImgs[imgIndex].classList.remove("active");
  infos[imgIndex].classList.remove("active");
  //and let's skin to the next img index
  imgIndex++
  //Let's put this contition that makes us return to 0 when the index is max
  if (imgIndex > evidenceImgs.length - 1) {
    imgIndex = 0;
  }
  if (imgIndex > thumbImgs.length - 1) {
    imgIndex = 0;
  }
  if (imgIndex > infos.length - 1) {
    imgIndex = 0;
  }
  //Let's assign the class active to the next active img-text-thumbnails border
  evidenceImgs[imgIndex].classList.add("active");
  thumbImgs[imgIndex].classList.add("active");
  infos[imgIndex].classList.add("active");
}, 3000)


//Bonus 3: make the autoplay stop

//Backwards autoplay 
const backwardsAutoplay = document.getElementById("bkwards")

backwardsAutoplay.addEventListener("click", function () {
  clearInterval(autoplay);
  console.log("Rewind time everybody")
  const bkwAutoplay = setInterval(function () {
    //Img in Evidence
    const evidenceImgs = document.querySelectorAll(".evidence-img");
    //Thumbnails border
    const thumbImgs = document.querySelectorAll(".thumbnails");
    //Title and Text
    const infos = document.querySelectorAll(".game-description");

    //Let's remove the active class from the active image
    evidenceImgs[imgIndex].classList.remove("active");
    thumbImgs[imgIndex].classList.remove("active");
    infos[imgIndex].classList.remove("active");
    //and let's skin to the next img index
    imgIndex--
    //Let's put this contition that makes us return to 0 when the index is max
    if (imgIndex < 0) {
      imgIndex = evidenceImgs.length - 1;
    }
    if (imgIndex < 0) {
      imgIndex = evidenceImgs.length - 1;
    }
    if (imgIndex < 0) {
      imgIndex = evidenceImgs.length - 1;
    }
    //Let's assign the class active to the next active img-text-thumbnails border
    evidenceImgs[imgIndex].classList.add("active");
    thumbImgs[imgIndex].classList.add("active");
    infos[imgIndex].classList.add("active");
  }, 3000)
})



