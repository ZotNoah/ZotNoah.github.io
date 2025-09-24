const apiKey = "dc4b48d5b765ffc585515d7330a1cfe1";

let cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const weatherResult = document.getElementById("weatherResult");
const errorMsg = document.getElementById("error");

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if(city){
        getWeather(city);
    }
});

cityInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        const city = cityInput.value.trim();
        if(city){
            getWeather(city);
        }
    }
});

function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
         console.log(data);
         updateWeather(data);
    })
    .catch(error => showError());
}

function updateWeather(data) {
    if(Number(data.cod) === 200) {
        errorMsg.classList.add("hidden");
        weatherResult.classList.remove("hidden");

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;

        cityInput.value = "";
    } else {
        console.log("Data invalid", data);
        showError();
    }
}

function showError() {
    weatherResult.classList.add("hidden");
    errorMsg.classList.remove("hidden");
}