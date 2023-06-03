/*
// Get exchange rate from API
var exchange_rate = get_exchange_rate(from_currency, to_currency);

// Get reciprocal exchange rate
var reciprocal_rate = 1 / exchange_rate;

// Calculate equivalent amount in original currency
var equivalent_amount = reciprocal_rate * converted_amount;

// Display result to user
document.write(
  converted_amount +
    " " +
    converted_currency +
    " is equivalent to " +
    equivalent_amount +
    " " +
    from_currency
);

*/
/*
// Set up URL and parameters for API request
var url = "https://api.exchangerate-api.com/v4/latest";
var params = {
  base: from_currency,
  symbols: to_currency,
};

// Make request to API
fetch(url, {
  method: "GET",
  params: params,
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Use exchange rate from API response
    var exchange_rate = data.rates[to_currency];

    // Calculate converted amount
    var converted_amount = exchange_rate * amount;

    // Calculate reciprocal exchange rate
    var reciprocal_rate = 1 / exchange_rate;

    // Calculate equivalent amount in original currency
    var equivalent_amount = reciprocal_rate * converted_amount;

    // Display results to user
    document.write(
      amount +
        " " +
        from_currency +
        " is equivalent to " +
        converted_amount +
        " " +
        to_currency
    );
    document.write("<br>");
    document.write(
      converted_amount +
        " " +
        to_currency +
        " is equivalent to " +
        equivalent_amount +
        " " +
        from_currency
    );
  })
  .catch(function (error) {
    return error.message;
  });
*/

const getDataFromAPI = () => {
  // Define the variable
  const url = "https://open.er-api.com/v6/latest/USD";

  // Use the fetch() method to get data from the API
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Return the data as an object
      return {
        dataType1: data.rates,
        dataType2: data.time_last_update_utc,
      };
    });
};

function useDataType1(data) {
  console.log("hello 1");

  // Check if the data object exists
  if (data) {
    // Do something with dataType1
    console.log(data.dataType1);
  }
}

function useDataType2(data) {
  // Check if the data object exists
  
  if (data) {
    // Do something with dataType2
    console.log(data.dataType2);
  }
  console.log("hello 2");
}

const last = () => {
  getDataFromAPI().then((data) => {
    const first = useDataType1(data);
    const second = useDataType2(data);
  });
};

// Call the getDataFromAPI() function and pass the returned data to the useDataType1() and useDataType2() functions
document.querySelector("button").addEventListener("click", last);
