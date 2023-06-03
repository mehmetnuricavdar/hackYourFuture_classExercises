const url = "http://api.open-notify.org/astros.json";

const testAsync = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

testAsync();

const testThen1 = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
testThen1();

const testThen2 = () => {
  return fetch(url).then((response) => response.json());
};

const logTestAsync = async () => {
  const data = await testAsync();

  console.log("data", data);
};

logTestAsync();

const logTestThen = () => {
  testThen2().then((response) => console.log(response));
};
logTestThen();

const logResponse = async (cb) => {
  const data = await cb();

  console.log("Log Response", data);
};

logResponse(testAsync);
logResponse(testThen2);
