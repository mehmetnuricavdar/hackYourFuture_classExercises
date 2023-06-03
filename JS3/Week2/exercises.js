const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

const asyncFunc = async () => {
  const response = await fetch(url);
  const data = await response.json();
  //console.log("Async Function", data);

  return data;
};
asyncFunc();

const thenFunc = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const thenFuncReturn = () => {
  return fetch(url).then((response) => response.json());
};
//thenFunc();

const logAsyncFunc = async () => {
  const dataFromAsync = await asyncFunc();
  console.log("This is from logAsyncFunction", dataFromAsync);
};

logAsyncFunc();

const logThenFunc = async () => {
  const dataFromThen = await thenFuncReturn();
  console.log("Log from logThenFunc", dataFromThen);
};

logThenFunc();
