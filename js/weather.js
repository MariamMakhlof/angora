let td = document.getElementById('tdName'),
    tddate = document.getElementById('Date'),
    searchBar = document.getElementById('searchBar'),
    loCation = document.getElementById('loCation'),
    todaydegree = document.getElementById('today-degree'),
    todayicon = document.getElementById('today-icon'),
    descrip = document.getElementById('today-description'),
    humidty = document.getElementById('humidty'),
    wind = document.getElementById('wind'),
    compass = document.getElementById('compass'),
    //Next
    nextDay = document.getElementsByClassName('nextDayName'),
    nextIcon = document.getElementsByClassName('next'),
    maxDeg = document.getElementsByClassName('max-deg'),
    minDeg = document.getElementsByClassName('min-deg'),
    nextDesc = document.getElementsByClassName('nextDay-description'),
    apiLink,
    apiData,
    currentCity,
    days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suterday'
    ],
    nameOfMonth = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Spet', 'Oct', 'Nov', 'Dec'];

async function getData(currentCity = 'Cairo') {
    apiLink = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a59a58bf740c4bf28c1215551222310&q=${currentCity}&days=7`);
    apiData = await apiLink.json();
    console.log(apiData);
    // console.log(apiData);
    displayTdCard();
    displayNextDay();
}

getData();

function displayTdCard() {
    let date = new Date();
    console.log(date);
    console.log(days[date.getDay()]);
    console.log(nameOfMonth[date.getMonth()]);
    td.innerHTML = days[date.getDay()];
    tddate.innerHTML = `${date.getDate()} ${nameOfMonth[date.getMonth()]}`;
    loCation.innerHTML = apiData.location.name;
    todaydegree.innerHTML = apiData.current.temp_c;
    todayicon.setAttribute('src', `https:${apiData.current.condition.icon}`);
    descrip.innerHTML = apiData.current.condition.text;
    wind.innerHTML = apiData.current.wind_kph;
    compass.innerHTML = apiData.current.wind_dir;
    humidty.innerHTML = apiData.current.humidity;
}

function displayNextDay() {
   
    for (let i = 0; i < nextDay.length; i++) {
        nextDay[i].innerHTML = days[new Date(apiData.forecast.forecastday[i+1].date).getDay()]
        nextIcon[i].setAttribute('src',`https:${apiData.forecast.forecastday[i+1].day.condition.icon}`)
        maxDeg[i].innerHTML = apiData.forecast.forecastday[i+1].day.maxtemp_c;
        minDeg[i].innerHTML = apiData.forecast.forecastday[i+1].day.mintemp_c;
        nextDesc[i].innerHTML =  apiData.forecast.forecastday[i+1].day.condition.text;
    }
  }

searchBar.addEventListener('keyup',function () {
    currentCity = searchBar.value;
    console.log(currentCity);
    getData(currentCity);
  })







    ////////////////////////////////////////
    // console.log(today);
    // console.log(tddate);
    // console.log(searchBar);
    // console.log(loCation);
    // console.log(todaydegree);
    // console.log(todayicon);
    // console.log(descrip);
    // console.log(humidty);
    // console.log(wind);
    // console.log(compass);
///////////////////////////////////////
    console.log(nextDay);
    console.log(nextIcon);
    // console.log(maxDeg);
    // console.log(minDeg);
    // console.log(nextDesc);