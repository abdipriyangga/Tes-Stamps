const XMLHttpRequest = require('xhr2');
const request = new XMLHttpRequest();
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=-6.200000&lon=106.816666&exclude=current,minutely,hourly,alerts&units=metric&appid=21211e185bdb41f3dad7effb08fae94a";

request.open("GET", url, true);

request.onload = function (data) {
  data = JSON.parse(this.response);
  console.log("WEATHER FORECAST: ");
  if (request.status === 200) {
    data.daily.forEach((element, index) => {
      let dayname = new Date(element.dt * 1000).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      let temp = element.temp.day;
      console.log(`${dayname}: ${temp} °C`);
    });
  }
  else {
    console.log(`error ${request.status} ${request.statusText}`);
  }

}

request.send()