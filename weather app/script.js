function getweather() {
  const apikey = "de04bcc02f178965f8d0f0636f1e9d00";
  const city = document.getElementById("city").value;

  if (!city) {
    alert("please enter the city");

    return;
  }
  const currentweatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const forcasturl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apikey}`;

  fetch(currentweatherurl)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error("error fetching current weather data:", error);
      alert("error fetching current weather data please try agian.");
    });
  fetch(forcasturl)
    .then(response => response.json())
    .then(data => {
      displayHourlyforcast(hourlyData);
    })
    .catch(error => {
      console.error("error fetching forcasting weather data:", error);
      alert("error fetching current forcstign data please try again.");
    });
}
getweather();
function displayWeather(data) {
  const tempDivinfo = document.getElementById("temp-div");
  const weatherinfoDiv = document.getElementById("weather-info");
  const weathericon = document.getElementById("weather-icon");
  

  if (data.cod === "404") {
    weatherinfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.name;
    const temperature = math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    const temperatureHtml = `<p>${temperature}0c</p>`;
    const weatherHtml = `<p>${cityName}</P>
              <p>${description}</p>
      
      `;

    tempDivinfo.innerHTML = "temperatureHtml";
    weatherinfoDiv.innerHTML = "weatherHtml";
    weathericon.src = iconUrl;
    weathericon.alt = description;

    showimage();
  }
}

function displayHourlyforcast(hourlyData){

    const hourlyforecastDiv = document.getElementById("hourly-forecast");
    const next24hours=hourlyData.slice(0,8);

    next24hours.forEach(item => {

      const dateTime=new Date(item.dt*1000);
      const hour=dateTime.getHours();
      const temperature=Math.round(item.main.temp-273.15);
      const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
       
    const hourlyItemHtml= `<div class= "Hourly-item">
      <span>${hour}:00}</span>
      <image src="${iconUrl}" alt="hourly weather icon"></image>
      <span>${temperature}0c</span>
      </div>`;
                 
      hourlyforecastDiv.innerHTML+=hourlyItemHtml;
    
    
    

    });

    function showimage(){

      const weathericon=document.getElementById('weather-icon');
      weathericon.style.display='block';
    }






}
