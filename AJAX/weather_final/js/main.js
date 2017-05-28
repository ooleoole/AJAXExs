/*jslint browser:true */
'use strict';


var weatherForecast = new XMLHttpRequest();
var weatherConditions = new XMLHttpRequest();
var cObj;
var fObj;


function loadWeather() {
    // GET THE CONDITIONS
    weatherConditions.open('GET', 'http://api.wunderground.com/api/2c8aae9ae1926e47/conditions/q/autoip.json', true);
    weatherConditions.responseType = 'text';
    weatherConditions.send(null);
    
    // GET THE FORECARST
    weatherForecast.open('GET', 'http://api.wunderground.com/api/2c8aae9ae1926e47/forecast/q/autoip.json', true);
    weatherForecast.responseType = 'text';
    weatherForecast.send();



}

weatherConditions.onload = function() {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);

        document.getElementById("location").innerHTML = cObj.current_observation.observation_location.city;
        document.getElementById("weather").innerHTML = cObj.current_observation.weather;
        document.getElementById("temperature").innerHTML = cObj.current_observation.temp_c;
    }
}

weatherForecast.onload = function () {


    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);
        

        document.getElementById("desc").innerHTML = fObj.forecast.txt_forecast.forecastday["0"].fcttext_metric;

        document.getElementById("r1c1").innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
        document.getElementById("r1c3").innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.celsius + "&deg";
        document.getElementById("r1c4").innerHTML = fObj.forecast.simpleforecast.forecastday[1].low.celsius + "&deg";

        var imagePath = fObj.forecast.simpleforecast.forecastday[1].icon_url;
        document.getElementById("r1c2").src = imagePath;


        document.getElementById("r2c1").innerHTML = fObj.forecast.simpleforecast.forecastday[2].date.weekday;
        document.getElementById("r2c3").innerHTML = fObj.forecast.simpleforecast.forecastday[2].high.celsius + "&deg";
        document.getElementById("r2c4").innerHTML = fObj.forecast.simpleforecast.forecastday[2].low.celsius + "&deg";

        imagePath = fObj.forecast.simpleforecast.forecastday[2].icon_url;
        document.getElementById("r2c2").src = imagePath;



        document.getElementById("r3c1").innerHTML = fObj.forecast.simpleforecast.forecastday[3].date.weekday;
        document.getElementById("r3c3").innerHTML = fObj.forecast.simpleforecast.forecastday[3].high.celsius + "&deg";
        document.getElementById("r3c4").innerHTML = fObj.forecast.simpleforecast.forecastday[3].low.celsius + "&deg";

        imagePath = fObj.forecast.simpleforecast.forecastday[3].icon_url;
        document.getElementById("r3c2").src = imagePath;

            
    } //end if
}; //end function

