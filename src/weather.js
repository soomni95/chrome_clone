const weather = document.querySelector("weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "d2700fa01b43e4399eedd57759ad2031";

function onGeoOk(position) {
    const lat =  position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon};appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError() {
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);