const button=document.getElementById('Btn');
const input=document.getElementById('city-input');
const cityName=document.getElementById("city-name");
const cityTime=document.getElementById("city-time");
const cityTemp=document.getElementById("city-temp");

async function getData(cityName){
    const promise=await fetch
    (`http:api.weatherapi.com/v1/current.json?key=7e9b1b8b82a346cc830130057251510&q=${cityName}&aqi=no`);
    return await promise.json();
}

button.addEventListener("click",async()=>{
    const value=input.value;
    const result=await getData(value);
    cityName.innerText=`${result.location.name},${result.location.region},${result.locationcountry}`;
    cityTime.innerText=result.location.localtime;
    cityTemp.innerText=result.current.temp_c;
});
  

//

