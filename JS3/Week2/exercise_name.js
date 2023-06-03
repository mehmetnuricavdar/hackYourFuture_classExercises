// URL https://api.agify.io/?name=Nikulas
// 1. create a input and a button
// 2. console.log the value of the input when i clicked

const input = document.querySelector("input");
const button = document.querySelector("button");

const getName = async (search) => {
  const API_URL = `https://api.agify.io/?name=${search}`;
  try {
    const response = await fetch(API_URL);
    if (response.status !== 200) {
      return "Something went wrong";
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

const searcFunc = async () => {
  const response = await getName(input.value);
  console.log("this is from search func", response);
};

button.addEventListener("click", searcFunc);
