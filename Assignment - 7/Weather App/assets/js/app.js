const enterName = document.getElementById('enterCity');

async function getWeatherUpdate() {

    console.clear();

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enterName.value}&appid=c06e78532b9c533ed21345d04aee215a`);

    const data = await response.json();

    const mainT = data.main.feels_like;
    const Temperature = mainT - 273.15;

    const minT = data.main.temp_min;
    const minTemp = minT - 273.15;

    const maxT = data.main.temp_max;
    const maxTemp = maxT - 273.15; 
    
    const cityName = document.getElementById('city');
    cityName.innerText = data.name + ' , ';
    console.log('City_Name:' + data.name);

    const country = document.getElementById('country');
    country.innerText = data.sys.country;
    console.log('Country:' + data.sys.country);

    const date = document.getElementById('date');
    const d = new Date();
    date.innerText = "Date" + " " + ":" + " " + d.getDate() + " - " + (d.getMonth() + 1) + " - " + d.getFullYear();
    console.log('Date:' + date.innerText);

    const feellike = document.getElementById('temp');
    feellike.innerText = "Feels_Like" + " " + ":" + " " + Math.trunc(Temperature) + '\u00B0C';
    console.log('Feels_Like:' + Math.trunc(Temperature) + '\u00B0C');

    const atm = document.getElementById('atm');
    atm.innerText = "Atmosphere" + " " + ":" + " " + data.weather[0].main;
    console.log('Atmosphere:' + data.weather[0].main);

    const minimumTemperature = document.getElementById('mnT');
    minimumTemperature.innerText = Math.trunc(minTemp) + '\u00B0C' + ' / ';
    console.log('Min_Temp:' + Math.trunc(minTemp) + '\u00B0C');

    const maximumTemperature = document.getElementById('mxT');
    maximumTemperature.innerText = Math.trunc(maxTemp) + '\u00B0C';
    console.log('Max_Temp:' + Math.trunc(maxTemp) + '\u00B0C');

    enterName.value='';

}

$(enterName).keypress(function(e){

    if(e.which == 13) {

        
        getWeatherUpdate()
            .then(() =>{
                console.log("Resolved");
            })
            .catch(err => {
                console.log("AAAHHHH !! Error");
                alert("Failed To Fetch Data !!..");
                console.log(err);
                enterName.value='';
            })
        
    }
        
});

$('#btn-reset').on('click',function(){
    
    const cityName = document.getElementById('city');
    cityName.innerText = '';

    const country = document.getElementById('country');
    country.innerText = '';

    const date = document.getElementById('date');
    date.innerText = '';

    const feellike = document.getElementById('temp');
    feellike.innerText = '';

    const atm = document.getElementById('atm');
    atm.innerText = '';

    const minimumTemperature = document.getElementById('mnT');
    minimumTemperature.innerText = '';

    const maximumTemperature = document.getElementById('mxT');
    maximumTemperature.innerText = '';
    
});