(function () {
  ("use strict");

  const URLCurrency = "https://open.er-api.com/v6/latest/";
  const getExchange = async (a, b) => {
    return fetch(`${URLCurrency}${a}`)
      .then((response) => response.json())
      .then((data) => {
        // Return the data as an object
        console.log(b);
        //console.log(data.rates)
        return {
          rate: data.rates[b],
          time: data.time_last_update_utc,
        };
      });
  };

  //getting user selections
  const selectionOfCurrencies = () => {
    const selectedUp = document.querySelector(".list-up");
    const selectedDown = document.querySelector(".list-down");
    let selectedUpValue;
    let selectedDownValue;
    selectedUp.addEventListener("change", () => {
      selectedUpValue = selectedUp.value;
      console.log("This is from 1st list", selectedUpValue);
    });
    selectedDown.addEventListener("change", async () => {
      selectedDownValue = selectedDown.value;
      console.log("This is from 2nd List", selectedDownValue);

      const ex = await getExchange(selectedUpValue, selectedDownValue);
      console.log(ex);
    });
  };

  // getting user amounts
  // Assigning variables

  const calculator = (data) => {
    const upInput = document.querySelector(".input-up");
    const downInput = document.querySelector(".input-down");
    let firstAmount = upInput.value;
    let secondAmount = downInput.value;

    if (data) {
      console.log("inside IF calculator:", data.rate);
      console.log("inside IF calculator", data.time);
    }

    console.log("Calculator Exchange", data.rate);
    const converted_amount = data.rate * firstAmount;
    const reciprocal_rate = 1 / data.rate;
    const equivalent_amount = reciprocal_rate * converted_amount;
    console.log("converted Amount :", converted_amount);
  };

  selectionOfCurrencies();

  const final = () => {
    console.log("final");
    const get = getExchange().then((data) => {
      console.log(data.time);
      console.log(data.rate);
      calculator(data);
    });
  };

  document.querySelector("button").addEventListener("click", final);
})();
