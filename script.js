console.log("script.js is working");
// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = 'YOUR_API_KEY';

// Define the location (latitude and longitude) for New York City
const latitude = '40.7128';
const longitude = '-74.0060';

// Define the number of days for the forecast (up to 7 days)
const numDays = 5;

// Construct the API URL
const url = `https://api.weather.gov/points/${latitude},${longitude}`;

const tempSpan = document.getElementById("temp");
const forecastSpan =  document.getElementById("forecast");
// let url2 = '';

// Make the API request
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to retrieve weather data. Status code: ${response.status}`);
    }
    console.log(response);
    return response.json();
  })
  .then(data => {   
    console.log(data);
    let url2 = data.properties.forecast

    findTemp(url2)
  })
  .catch(error => {
    console.error(error);
  });

  function findTemp(url){
    console.log("findTemp function")
    fetch(url)
    .then(response => {
        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error(`Failed to retrieve data. Status code: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
      })
      .then(data => {
        // Data is now a JavaScript object containing the JSON response
        console.log(data);
        tempSpan.innerHTML = data.properties.periods[0].temperature;
        forecastSpan.innerHTML = data.properties.periods[0].detailedForecast;
      })
      .catch(error => {
        // Handle any errors that occur during the fetch or parsing process
        console.error('Error:', error);
      });

  }
