const apiKey = // Replace with your OpenWeather API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherBox = document.getElementById('weatherBox');
  const errorBox = document.getElementById('errorBox');

  if (!city) {
    errorBox.textContent = "Please enter a city name.";
    weatherBox.innerHTML = '';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    const weatherHtml = `
      <h2>${data.name}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" />
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Condition:</strong> ${data.weather[0].main}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    weatherBox.innerHTML = weatherHtml;
    errorBox.textContent = '';
  } catch (error) {
    weatherBox.innerHTML = '';
    errorBox.textContent = `Error: ${error.message}`;
  }
}
