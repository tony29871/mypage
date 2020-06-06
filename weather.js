
const COORDS = "coords" // 위도:   경도:

const API_KEY ="ce5e0f7c59ea39c1797b28d90409c8a5"

const weather = document.querySelector(".wh");


function getWeather(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json)
        const temperature = json.main.temp;
        const name = json.name;
        console.log(temperature);
        console.log(name);
        weather.innerHTML=`오늘의 온도:${temperature}('c)<br> 장소:${name}`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj))
}// COORDS: JSON 형식로 위도와 경도가 들어감 

function handleSuccess(position){
    console.log(position);
    const latitude =position.coords.latitude;
    const longitude =position.coords.longitude;
    const coordsObj ={
        latitude: latitude,
        longitude: longitude
    } // coordsobj = 위도, 경도
    saveCoords(coordsObj);
}

function handleError(){
    console.log('error');
}

function askforPosition(){
    navigator.geolocation.getCurrentPosition(handleSuccess,handleError);
}



function loadedCoords(){
    const loadedcoords = localStorage.getItem(COORDS);
    console.log(loadedcoords);

    if (loadedcoords=== null){
        askforPosition();
    }
    else{
        const parsecoords = JSON.parse(loadedcoords)
        getWeather(parsecoords.latitude,parsecoords.longitude);
    }

}// 위도와 경도를 집어넣어서 온도와 장소를 가져오는 함수


function init(){
    loadedCoords()
}
init();