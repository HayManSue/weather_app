// console.log('hello');

const apiKey ="a60daefadd836520cf8b035f0f3f5ace";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkweather(name){
    const response = await fetch(apiUrl + name + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.tem').innerHTML = Math.floor(data.main.temp) + ' °C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind-speed').innerHTML = data.wind.speed + ' km / h';
    console.log(data.main.temp)
}
searchBtn.addEventListener('click', ()=>{
    checkweather(searchBox.value);
});

// checkweather();