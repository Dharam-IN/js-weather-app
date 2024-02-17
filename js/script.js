let apikey = `8d6454a89dff871786a0307b0dbebbee`;
let cityName = "Jaipur";

let fetchApi = async function(cityName){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`);
    let res = await data.json();

    console.log(res)

    // console.log(res.name)
    WeatherAppData(res)
}


let WeatherAppData = function(res){
    let cityName = document.getElementById("CityName");
    cityName.textContent = res.name;

    let dateget = document.getElementById("CurrentDate");

    let currentdate = new Date;

    dateget.textContent = currentdate.toDateString();

    let temphe = document.getElementById("tempHeading");
    temphe.textContent = `${Math.round(res.main.temp)}°`;


    let WindKMH = document.getElementById("WindKMH");
    WindKMH.textContent = `${res.wind.speed} KM/H`;

    let SunnyID = document.getElementById("SunnyID");
    SunnyID.textContent = res.main.pressure;

    let RainID = document.getElementById("RainID");
    RainID.textContent = "Bhai API Ne Nhi Diya";

    let HumidityID = document.getElementById("HumidityID");
    HumidityID.textContent = res.main.humidity;

}


let FormInp = document.querySelector(".MyForm");
let searchinput = document.querySelector(".SearchCity");

FormInp.addEventListener("submit", function(noref){
    noref.preventDefault();
    
    let inpval = searchinput.value;
    if(inpval!==""){
        console.log(inpval);
        fetchApi(inpval);

        searchinput.value = "";
    }else{
        alert("Bhai Pahle Kuch enter to kar yar")
    }

})

