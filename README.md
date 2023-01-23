# weather-app



## Description
This application is a weather forecast tool that allows users to search for the forecast of a specific city. When the page loads, the application checks for any previously stored cities in the user's local storage. If any are found, they are displayed on the page and can be clicked on to view their forecast. When the user searches for a new city, the application checks if the city has already been stored and if not, it creates a new element for the city and adds it to the local storage. The forecast information is obtained from the OpenWeatherMap API and includes the date, temperature, description, humidity, and wind speed. Additionally, it includes a feature to show the temperature in Fahrenheit.


## Acceptance Criteria 
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
![Web capture_23-1-2023_1313_](https://user-images.githubusercontent.com/116024194/213975485-a7f0382b-ef57-43e2-8241-bbb38481554e.jpeg)
 https://marii9.github.io/weather-app/
