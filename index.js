const normal = "http://openweathermap.org/img/wn/"
const api = {

    key: "82ee04ed4c9858179b2d17defb47ccaa",
    base: "https://api.openweathermap.org/data/2.5/"
};

document.getElementById ("search-btn").addEventListener ("click", function () {

    const inputCityValue = document.getElementById ("input-city").value;
    getWeather(inputCityValue);
})

function getWeather (value) {

    fetch(`${api.base}weather?q=${value}&appid=${api.key}`)
    .then(response => response.json())
    .then(json => {
        console.log (json);
        document.getElementById ("city-name").innerText = `${json.name}, ${json.sys.country}`;
        document.getElementById ("degree").innerText =`${Math.round(json.main.temp - 273.15)} °C `;
        document.getElementById("sky").innerText = json.weather[0].main;
        document.getElementById("weather-icon").src = `${normal}${json.weather[0].icon}`
    })
}

