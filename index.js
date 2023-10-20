const apiKey="58ed7eca15d99e9ee4506223ddb5ce11";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector("weather-icon");
const clearButton = document.querySelector('.search button.searchbutton');
async function checkWeather(city){
    const response= await fetch(apiUrl+ city+ `&appid=${apiKey}`);

    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";

    if(data.weather[0].main== "clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
clearButton.addEventListener("click",()=>{
    searchBox.value='';
    document.querySelector(".weather").style.display="none";
})
searchBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});
// checkWeather();