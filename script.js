$(document).ready(function() {
  // Get the stored cities from local storage, or an empty array if there are none
  var storedCities = JSON.parse(localStorage.getItem("cities")) || [];
  // Declare a variable for the city name element
  var cityNameElement;

  // Loop through stored cities to check if the current city already exists
  for (var i = 0; i < storedCities.length; i++) {
      // Check if the current input city name matches a city in the stored cities array
      if (storedCities[i] === $("#city-name").val()) {
          // If the current city already exists, set the cityNameElement variable to the existing element
          cityNameElement = $(`.city-name[data-city='${storedCities[i]}']`);
          break;
      }
  }
  
  // check if there's no existing element
  if (!cityNameElement) {
      // If the city does not already exist, create a new element
      cityNameElement = $("<h3>").addClass("city-name");
      $(".container").prepend(cityNameElement);
    }
   
  
  for (var i = 0; i < storedCities.length; i++) {
      //create a new city name element
      var cityNameElement = $("<h3>").addClass("city-name").attr("data-city", storedCities[i]);
      //add the city name to the element
      cityNameElement.text(storedCities[i]);
      //when the city name is clicked
      cityNameElement.click(function() {
        var city = $(this).text();
        //create the url for the API call
        var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        console.log(city)
        fetch(url)
          .then(res => res.json())

          .then(function (data) {
             $("#forecast").empty();
             var previousForecastDate;
             for (let i = 0; i < data.list.length; i++) {
              var forecast = data.list[i];
              var forecastDate = dayjs(forecast.dt_txt).format("MM/DD/YYYY");
              if (forecastDate !== previousForecastDate) {
                  previousForecastDate = forecastDate;
                  // if (forecastDate <= dayjs().format("MM/DD/YYYY")) {
                  //     continue;
                  // }
                  // Create a new forecast element
                  var tempFahrenheit = (9/5 * forecast.main.temp + 32).toFixed(2);
                  var forecastEl = $("<div>").addClass("forecast-item");
                  forecastEl.append($("<p>").addClass("date").text(forecastDate));
                  forecastEl.append($("<p>").addClass("temperature").text("Temperature: " + tempFahrenheit));;
                  forecastEl.append($("<p>").addClass("description").text(forecast.weather[0].description));
                  forecastEl.append($("<img>").addClass("icon").attr("src", `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`));
                  forecastEl.append($("<p>").addClass("humidity").text("Humidity: " + forecast.main.humidity));
                  forecastEl.append($("<p>").addClass("wind").text("WindSpeed: " + forecast.wind.speed));
                  // Add the forecast element to the forecast container
                  forecastEl.appendTo("#forecast");
                  $("#city-name").val(city);
          }}});
        });
        
      $(".container").prepend(cityNameElement);
  }
  
var searchBtn = $('.btn')
var API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`
var city;



searchBtn.on('click', function (event) {

    event.preventDefault();
    city = $("#city-name").val();
    if (storedCities.includes(city)) {
      // The city has already been searched before, show the current date forecast for that city
      // Code to display the current date forecast for the city goes here
  } else {
      // The city is being searched for the first time, make API call and show forecast
      if (!storedCities.includes(city)) {
          // add city to the array
          storedCities.push(city);
          localStorage.setItem("cities", JSON.stringify(storedCities));
      }

    
    
   
    }

    var previousForecastDate;
    var newUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(newUrl)
      .then(res => res.json())
      .then(function (data) {
        console.log(data);
        
        $("#forecast").empty();
        for (var i = 0; i < data.list.length; i++) {
          var forecast = data.list[i];
              var forecastDate = dayjs(forecast.dt_txt).format("MM/DD/YYYY");
              if (forecastDate !== previousForecastDate) {
                previousForecastDate = forecastDate;
                  // if (forecastDate <= dayjs().format("MM/DD/YYYY")) {
                  //     continue;
                  // }
                  // Create a new forecast element
                  var tempFahrenheit = (9/5 * forecast.main.temp + 32).toFixed(2);
                  var forecastEl = $("<div>").addClass("forecast-item");
                  forecastEl.append($("<p>").addClass("date").text(forecastDate));
                  forecastEl.append($("<p>").addClass("temperature").text("Temperature: " + tempFahrenheit));;
                  forecastEl.append($("<p>").addClass("description").text(forecast.weather[0].description));
                  forecastEl.append($("<img>").addClass("icon").attr("src", `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`));
                  forecastEl.append($("<p>").addClass("humidity").text("Humidity: " + forecast.main.humidity));
                  forecastEl.append($("<p>").addClass("wind").text("WindSpeed: " + forecast.wind.speed));
                  // Add the forecast element to the forecast container
                  forecastEl.appendTo("#forecast");

                  searchBtn.on('click', function (event) {
                    city = $("#city-name").val();
                    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
                    fetch(url)
                      .then(res => res.json())
                      .then(function (data) {
                        $("#forecast").empty();
                        var previousForecastDate;
                        for (let i = 0; i < data.list.length; i++) {
                          var forecast = data.list[0];
                          var forecastDate = dayjs(forecast.dt_txt).format("MM/DD/YYYY");
                          if (forecastDate !== previousForecastDate) {
                              previousForecastDate = forecastDate;
                              // Create a new forecast element
                              var tempFahrenheit = (9/5 * forecast.main.temp + 32).toFixed(2);
                              var forecastEl = $("<div>").addClass("forecast-item");
                              forecastEl.append($("<p>").addClass("date").text(forecastDate));
                              forecastEl.append($("<p>").addClass("temperature").text("Temperature: " + tempFahrenheit));;
                              forecastEl.append($("<p>").addClass("description").text(forecast.weather[0].description));
                              forecastEl.append($("<img>").addClass("icon").attr("src", `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`));
                              forecastEl.append($("<p>").addClass("humidity").text("Humidity: " + forecast.main.humidity));
                              forecastEl.append($("<p>").addClass("wind").text("WindSpeed: " + forecast.wind.speed));
                              // Add the forecast element to the forecast container
                              forecastEl.appendTo("#forecast");
                              $("#city-name").val(city);
                          }
                        }
                      });
                      
                      

                    });
                  }}});
                })
              })
            

              

       