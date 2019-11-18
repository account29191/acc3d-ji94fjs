function weatherBalloon(cityID) {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?APPID=46ce04e9dd1e334e5af9fb15f54d31a3&q=Sacramento"
  )
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      drawWeather(data);
      console.log(data);
    })
    .catch(function() {
      console.log("error");
    });
}

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);

  document.getElementById("description").innerHTML = d.weather[0].description;
  document.getElementById("temp").innerHTML = fahrenheit + "&deg;";
  document.getElementById("location").innerHTML = d.name;
}
window.onload = function() {
  weatherBalloon(6167865);
};
