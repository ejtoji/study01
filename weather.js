const weather = document.querySelector(".js-weather");

const COORES = 'coords';
const API_KEY= "ff3a40cdd566ced317af800c51cac3e3";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORES, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    //console.log(position.latitude.longitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadedCoords(){
    const loadedCoords = localStorage.getItem(COORES);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        //console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init(){
    loadedCoords();
}
init();