// Create a button element and label it Click Me!
const myButton = document.createElement("button");
myButton.innerHTML = "Click Me!";
document.body.appendChild(myButton);

myButton.addEventListener("click", function(){
    const text = document.createElement("p");
    text.innerHTML = "You clicked me!";
    document.body.appendChild(text);
})

const inputText = document.createElement("input");
inputText.setAttribute("type", "text");
document.body.appendChild(inputText)

const myFavs = ["hamburger", "pizza", "desert", "salad"];



// const myForm = document.createElement("form");
// const myLabel = document.createElement("label");
// const myInput = document.createElement("input");
// const submitBtn = document.createElement("input");

// myForm.setAttribute("method", "post");
// submitBtn.setAttribute("type", "submit");
// myLabel.innerHTML = "Enter your favorite foods ";
// myInput.setAttribute("placeholder", "Enter Your food");
// myInput.setAttribute("id", "inputFood");

// document.body.append(myForm);
// myForm.append(myLabel);
// myForm.append(myInput);
// document.body.append(submitBtn);

// submitBtn.addEventListener("click", function newFavFoods() {
//   const newFood = document.getElementById("inputFood").value;
//   myFavs.push(newFood);
//   console.log("Hello", myFavs);
// });

// console.log("GoodBye", myFavs);


const myFavDishes = document.createElement("ul");
myFavDishes.innerHTML = "List of my foods";
document.body.append(myFavDishes);

for (let i = 0; i < myFavs.length; i++) {
  const listEl = document.createElement("li");
  listEl.innerText = myFavs[i];
  myFavDishes.append(listEl);
  listEl.style.color = "red";
}

const toggleBtnDark = document.createElement("button");
toggleBtnDark.setAttribute("type", "submit");
toggleBtnDark.innerText = "Dark mode"
document.body.append(toggleBtnDark);

toggleBtnDark.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})

const toggleBtnLight = document.createElement("button");
toggleBtnLight.setAttribute("type", "submit");
toggleBtnLight.innerText = "Light Mode";
document.body.append(toggleBtnLight);

toggleBtnLight.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
    document.body.style.color = "yellow";
})