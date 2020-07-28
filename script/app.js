const cityForm = document.querySelector('form');
const card= document.querySelector('.card');
const detials = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{
    const cityDets = data.cityDets;
    const weather = data.weather;

    console.log(cityDets);
    detials.innerHTML=`
    <h5 class="my-3">${cityDets.Country.LocalizedName}</h5>
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&degC</span>
    `;

    //remove d-none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    //update imgs

    //use template quotes because of variable and assign weather property
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    // set src attribute to variable to assign picture
    icon.setAttribute('src',iconSrc);

    
    //uses tenary operator to be more concise
    let timeSrc=weather.IsDayTime ? 'img/day.svg': 'img/night.svg' ;
    time.setAttribute('src',timeSrc);

    
} ;

const updateCity = async (city)=>{
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return{
        cityDets:cityDets,
        weather:weather
    }
    
}

cityForm.addEventListener('submit', e=>{
    // prevent default action
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data=> updateUI(data))
    .catch(err=> console.log(err));
})