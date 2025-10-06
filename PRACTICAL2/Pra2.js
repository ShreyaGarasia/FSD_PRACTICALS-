const apiKey = "b313af21fcb4492ba15101836253006";

const hardcodedWeather = {
valsad: 34,
surat: 36,
vadodara: 38,
ahmedabad: 40,
navsari: 35
};

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
const input = document.getElementById('cityInput').value.trim();
const city = input.toLowerCase();
const result = document.getElementById('result');

if (!city) {
    result.textContent = "Please enter a city name.";
    return;
}

  // Check for hardcoded cities
if (hardcodedWeather.hasOwnProperty(city)) {
    const temp = hardcodedWeather[city];
    result.textContent = `The weather in ${capitalize(city)} is ${temp}°C`;
    return;
}

  // Otherwise, fetch from API
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("API Error");

    const data = await response.json();
    const temperature = data.current.temp_c;
    result.textContent = `The weather in ${capitalize(city)} is ${temperature}°C`;
} catch (error) {
    result.textContent = "Failed to fetch weather data. Please check the city name or try again.";
}
});

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.slice(1);
}
