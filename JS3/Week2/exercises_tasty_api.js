const BASE_URL = "https://tasty.p.rapidapi.com";
const API_KEY = "309a26cb13msh97479ab8c74da27p1b6f99jsn38bfa4d77e35";
const API_HOST = "tasty.p.rapidapi.com";
const searchInput = document.querySelector("input");

const getRecepies = async (search) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };
  try {
    const response = await fetch(
      `${BASE_URL}/recipes/auto-complete?prefix=${search}`,
      options
    );

    if (response.status !== 200) {
      return "Something went wrong";
    }
    const data = await response.json();

    return data;
  } catch (error) {
    // alert("in catch");
    // console.log(error);
    return error.message;
  }
};

const gettingInput = async () => {
  const recipes = await getRecepies(searchInput.value);
  console.log(recipes);
};
document.querySelector("button").addEventListener("click", gettingInput);
