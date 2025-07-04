

const apikey = "ad1987b812406922db28731ceb6db4c5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");

async function checkWeather(city){
    const response = await fetch( apiUrl + city + `&appid=${apikey}`);
    const data = await response.json();
 

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }

    
}
searchBtn.addEventListener("click", () => { 
    checkWeather(searchBox.value);
});
