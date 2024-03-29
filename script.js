
const discoverLink = document.getElementById('Discover');
const contentWeather = document.getElementById('contentWeather');

discoverLink.addEventListener('click', ()=>{
    contentWeather.scrollIntoView({ behavior: 'smooth' }); 
  });


  async function getWeatherData(cityName) {
    try {
        const apiKey = '1056e19200dd66a7ddc620eaf1a9c12a';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  
  function updateIcon(icon,condition) {
    if (condition === "Rain") {
        icon.src = "./pictures/rain.png";
    } else if (condition === "Clouds") {
        icon.src = "./pictures/clouds.png";
    } else if (condition === "Snow") {
        icon.src = "./pictures/snow.png";
    } else {
        icon.src = "./pictures/sun.png";
    }
}

  function displayCardCity(name,nameCity,icon,temperature,humidity,speed,condition){
        getWeatherData(name).then(weather=>{
        nameCity.textContent=`${weather.name}`;
        updateIcon(icon,weather.weather[0].main);
        temperature.textContent=`${(weather.main.temp-273.15).toFixed(0)}`;
        humidity.textContent=`${weather.main.humidity} %`;
        speed.textContent=`${weather.wind.speed} m/s`;
        condition.textContent=`${weather.weather[0].main}`;
    })
  }

  function displayCardCityDetail(name,nameCity,icon,temperature,valueMin,valueMax,humidity,speed,condition){
    getWeatherData(name).then(weather=>{
      if(weather)
      {
        const weatherCitys = document.getElementById('weatherCitys');
        const detailWeatherCity = document.getElementById('detailWeatherCity');
        weatherCitys.style.display='none';
        detailWeatherCity.style.display='flex';
        nameCity.textContent=`${weather.name}`;
        updateIcon(icon,weather.weather[0].main)
        temperature.textContent=`${(weather.main.temp-273.15).toFixed(0)}`;
        valueMin.textContent=`${(weather.main.temp_min-273.15).toFixed(0)}`;
        valueMax.textContent=`${(weather.main.temp_max-273.15).toFixed(0)}`;
        humidity.textContent=`${weather.main.humidity} %`;
        speed.textContent=`${weather.wind.speed} m/s`;
        condition.textContent=`${weather.weather[0].main}`;
        contentWeather.scrollIntoView({ behavior: 'smooth' }); 
      }
    })
  }

  const nameCity1 = document.getElementById('nameCity1');
  const iconTemp1 = document.getElementById('iconTemp1');
  const valuetemperature1 = document.getElementById('valuetemperature1');
  const valueHumidity1 = document.getElementById('valueHumidity1');
  const valueSpeed1 = document.getElementById('valueSpeed1');
  const Weathercondition1 = document.getElementById('Weathercondition1');

  displayCardCity('Casablanca',nameCity1,iconTemp1,valuetemperature1,valueHumidity1,valueSpeed1,Weathercondition1);

  const nameCity2 = document.getElementById('nameCity2');
  const iconTemp2 = document.getElementById('iconTemp2');
  const valuetemperature2 = document.getElementById('valuetemperature2');
  const valueHumidity2 = document.getElementById('valueHumidity2');
  const valueSpeed2 = document.getElementById('valueSpeed2');
  const Weathercondition2 = document.getElementById('Weathercondition2');
  displayCardCity('Berrechid',nameCity2,iconTemp2,valuetemperature2,valueHumidity2,valueSpeed2,Weathercondition2);

  const nameCity3 = document.getElementById('nameCity3');
  const iconTemp3 = document.getElementById('iconTemp3');
  const valuetemperature3 = document.getElementById('valuetemperature3');
  const valueHumidity3 = document.getElementById('valueHumidity3');
  const valueSpeed3 = document.getElementById('valueSpeed3');
  const Weathercondition3 = document.getElementById('Weathercondition3');
  displayCardCity('OUED ZEM',nameCity3,iconTemp3,valuetemperature3,valueHumidity3,valueSpeed3,Weathercondition3);

  const nameCity4 = document.getElementById('nameCity4');
  const iconTemp4 = document.getElementById('iconTemp4');
  const valuetemperature4 = document.getElementById('valuetemperature4');
  const valueHumidity4 = document.getElementById('valueHumidity4');
  const valueSpeed4 = document.getElementById('valueSpeed4');
  const Weathercondition4 = document.getElementById('Weathercondition4');
  displayCardCity('BENI MELLAL',nameCity4,iconTemp4,valuetemperature4,valueHumidity4,valueSpeed4,Weathercondition4);

  const nameCity5 = document.getElementById('nameCity5');
  const iconTemp5 = document.getElementById('iconTemp5');
  const valuetemperature5 = document.getElementById('valuetemperature5');
  const valueHumidity5 = document.getElementById('valueHumidity5');
  const valueSpeed5 = document.getElementById('valueSpeed5');
  const Weathercondition5 = document.getElementById('Weathercondition5');
  displayCardCity('AZILAL',nameCity5,iconTemp5,valuetemperature5,valueHumidity5,valueSpeed5,Weathercondition5);

  const nameCity6 = document.getElementById('nameCity6');
  const iconTemp6 = document.getElementById('iconTemp6');
  const valuetemperature6 = document.getElementById('valuetemperature6');
  const valueHumidity6 = document.getElementById('valueHumidity6');
  const valueSpeed6 = document.getElementById('valueSpeed6');
  const Weathercondition6 = document.getElementById('Weathercondition6');
  displayCardCity('MARRAKECH',nameCity6,iconTemp6,valuetemperature6,valueHumidity6,valueSpeed6,Weathercondition6);

  const nameCityDetail =document.getElementById('nameCityDetail');
  const iconTempCityDetail =document.getElementById('iconTempCityDetail');
  const temperatureCityDetail =document.getElementById('temperatureCityDetail');
  const valueMin =document.getElementById('valueMin');
  const valueMax =document.getElementById('valueMax');
  const valueHumidityCityDetail =document.getElementById('valueHumidityCityDetail');
  const valueSpeedCityDetail =document.getElementById('valueSpeedCityDetail');
  const WeatherconditionCityDetail =document.getElementById('WeatherconditionCityDetail');

  const searchInput =document.getElementById('input-search');
  const searchButton =document.getElementById('btn-search');

  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        displayCardCityDetail(searchInput.value,nameCityDetail,iconTempCityDetail,temperatureCityDetail,valueMin,valueMax,valueHumidityCityDetail,valueSpeedCityDetail,WeatherconditionCityDetail);
    }
  });
  
  searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    displayCardCityDetail(searchInput.value,nameCityDetail,iconTempCityDetail,temperatureCityDetail,valueMin,valueMax,valueHumidityCityDetail,valueSpeedCityDetail,WeatherconditionCityDetail);
  });


  function clickinCard(card,numbercity){
    card.addEventListener('click',()=>{
      if(numbercity==1)
      {
        const nameCity1 = document.getElementById('nameCity1');
        displayCardCityDetail(nameCity1.innerText,nameCityDetail,iconTempCityDetail,temperatureCityDetail,valueMin,valueMax,valueHumidityCityDetail,valueSpeedCityDetail,WeatherconditionCityDetail);

      }
      else if(numbercity==2)
      {
        const nameCity2 = document.getElementById('nameCity2');
        displayCardCityDetail(nameCity2.innerText,nameCityDetail,iconTempCityDetail,temperatureCityDetail,valueMin,valueMax,valueHumidityCityDetail,valueSpeedCityDetail,WeatherconditionCityDetail);

      }else if(numbercity==3)
      {
        const nameCity3 = document.getElementById('nameCity3');
        displayCardCityDetail(nameCity3.innerText,nameCityDetail,iconTempCityDetail,temperatureCityDetail,valueMin,valueMax,valueHumidityCityDetail,valueSpeedCityDetail,WeatherconditionCityDetail);
      }
      else if(numbercity==4)
      {
        const nameCity4 = document.getElementById('nameCity4');
        displayCardCityDetail(nameCity4.innerText,nameCityDetail,iconTempCityDetail,temperatureCityDetail,valueMin,valueMax,valueHumidityCityDetail,valueSpeedCityDetail,WeatherconditionCityDetail);
      }
      else if(numbercity==5)
      {
        const nameCity5 = document.getElementById('nameCity5');
        displayCardCityDetail(nameCity5.innerText,nameCityDetail,iconTempCityDetail,temperatureCityDetail,valueMin,valueMax,valueHumidityCityDetail,valueSpeedCityDetail,WeatherconditionCityDetail);
      }
      else{
        const nameCity6 = document.getElementById('nameCity6');
        displayCardCityDetail(nameCity6.innerText,nameCityDetail,iconTempCityDetail,temperatureCityDetail,valueMin,valueMax,valueHumidityCityDetail,valueSpeedCityDetail,WeatherconditionCityDetail);
      }
    });
  }


  const card1=document.getElementById('card1');
  clickinCard(card1,1);
  
  const card2=document.getElementById('card2');
  clickinCard(card2,2);
  
  const card3=document.getElementById('card3');
  clickinCard(card3,3);
  
  const card4=document.getElementById('card4');
  clickinCard(card4,4);

  const card5=document.getElementById('card5');
  clickinCard(card5,5);

  const card6=document.getElementById('card6');
  clickinCard(card6,6);

  

  


  