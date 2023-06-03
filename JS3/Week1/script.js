fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((space) => {
    space.people.forEach((astros) => {
      let p = document.querySelector("p");
      let ul = document.createElement("ul");
      p.innerHTML = `There are ${space.people.length} astronauts in space, they are:`;
      document.body.append(ul);
      ul.innerHTML = `<li>${astros.name}</li>`;
      return astros;
    });
  });

// creating img elements
const figure = document.createElement("figure");
document.body.append(figure);

let img = document.createElement("img");
figure.append(img);

const figCaption = document.createElement("figcaption");
figure.append(figCaption);

// Dog images randomly for every 2 seconds

let dogPhotos = setInterval(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((dog) => {
      let dogImg = () => {
        img.setAttribute("src", dog.message);
        console.log(dog.message);
      };
      console.log(dogImg());
    });
}, 2000);

clearInterval(dogPhotos);

// random dog images by breed
let randomDogPhotos = setInterval(() => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breeds) => {
      console.log(breeds.message);
      const randomNumber = Math.floor(
        Math.random() * Object.keys(breeds.message).length
      );

      const element = Object.keys(breeds.message)[randomNumber];
      const str = `https://dog.ceo/api/breed/${element}/images/random`;

      const url = new URL(str);
      fetch(url)
        .then((response) => response.json())
        .then((breed) => {
          img.setAttribute("src", `${breed.message}`);
          img.setAttribute("alt", `${element}`);
          img.style.width = "250px";
          figCaption.innerHTML = `Random photo of ${element}`;
        });
      console.log(element);
    });
}, 2000);

clearInterval(dogPhotos, 5000);
