This is a sleek and responsive weather application built using modern web technologies such as React. It provides real-time weather updates, including temperature, conditions, humidity, and wind speed for any city worldwide. The app also offers dynamic icons and visual elements that change according to the weather, ensuring an interactive and user-friendly experience.





Features:-

Real-time Weather Updates: Get live weather information for any city by simply entering its name.

Dynamic Weather Icons: Icons change based on the weather conditions (e.g., sunny, cloudy, rainy).

Temperature Display: Shows the current temperature in Celsius with real-time updates.

Weather Conditions: Displays the current weather condition (like "Sunny", "Cloudy", "Rainy") with the appropriate icon.

Wind Speed and Humidity: View the wind speed in km/h and the humidity percentage for the selected city.

Error Handling: The app handles errors such as invalid city names and network failures with clear error messages to enhance the user experience.

Responsive Design: The app is built to be mobile-friendly and responsive, ensuring it works smoothly on both desktop and mobile devices.



Technologies Used:-

React: The core framework used to build the app, providing an efficient and modular approach to manage the UI.
OpenWeatherMap API: Used to fetch real-time weather data, including temperature, wind speed, humidity, and weather conditions.
CSS: Custom styling has been applied to ensure the app is visually appealing with a dark theme and smooth gradients.
React Icons: For enhanced UI elements, various icons like search and location icons are used, making the app look modern and clean.



How It Works:-

Input a City Name: Enter the name of a city in the search box to retrieve its weather information.
Fetch Data: When the "Search" button is clicked or the "Enter" key is pressed, the app fetches weather data for that city from the OpenWeatherMap API.
Display Weather Information: Upon receiving the data, the app displays:
The current temperature in Celsius.
A weather description (e.g., "Sunny", "Cloudy").
The corresponding weather icon.
Wind speed and humidity information.
Error Handling: If a city is not found or if there's a network error, the app displays an appropriate error message.