const numbers = [1, 2, 4, 7, 8, 3];

numbers.push(5);
numbers.unshift(0);
console.log(numbers.length);
numbers.shift();
console.log(numbers.length);

for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

console.log(numbers.toString());

console.log(numbers.join("_"));

console.log(numbers.includes(6));

const classMates = [
  { name: "Alaa", country: "Egypt" },
  { name: "Kabir", country: "Bangladesh" },
  { name: "Vipavee", country: "Thailand" },
  { name: "Claudia", country: "Ecuador" },
  { name: "Aditi", country: "India" },
  { name: "Natalia", country: "Ukraine" },
  { name: "Alex", country: "Ukraine" },
  { name: "Madhu", country: "India" },
];

for (i = 0; i < classMates.length; i++) {
  console.log(classMates[i].name);
}

for (i = 0; i < classMates.length; i++) {
  if (classMates[i].name == "Ali") {
    console.log("There he is!");
  } else {
    console.log("He is not here!");
  }
}

console.log((classMates[1].country = "Turkey"));

const myFavoriteBand = {
  name: "Metallica",
  nationality: "USA",
  genre: "Rock & Metal",
  members: 4,
  formed: 1981,
  split: false,
  albums: [
    { name: "Kill 'Em All", released: 1983 },
    { name: "Ride the Lightning", released: 1984 },
    { name: "Master of Puppets", released: "1984-1986" },
  ],
};
const bandInfo = `My favorite band is ${myFavoriteBand.name}, it is established in ${myFavoriteBand.nationality} in ${myFavoriteBand.formed} by ${myFavoriteBand.members} members. Their music style is ${myFavoriteBand.genre}. All these years they released many albums and some of them are ${myFavoriteBand.albums}`;
