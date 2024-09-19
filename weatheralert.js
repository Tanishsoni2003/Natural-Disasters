const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const weatherContainer = document.getElementById('weather');
const refreshButton = document.getElementById('refresh-btn');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            const weatherHtml = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            weatherContainer.innerHTML = weatherHtml;
        } else {
            weatherContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        weatherContainer.innerHTML = `<p>Error fetching weather data</p>`;
    }
}

refreshButton.addEventListener('click', fetchWeather);

// Fetch weather data on page load
fetchWeather();
