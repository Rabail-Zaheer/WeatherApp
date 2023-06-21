"use strict";

const apiKey = "467f29fcdb93f5693c7d4e2057e1f0c9";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=hyderabad";

async function checkWeather() {
  const response = await fetch(apiURL + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
}

checkWeather();
