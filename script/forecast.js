const key ='4qZuGEurDhdoikpnDnaxKG8Hg2c5t6kc';

//get location
const getWeather = async (id)=>{
    const base ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];



}



// get city
const getCity = async (city)=>{
    
    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};


// getCity('georgetown').then(data=> {return getWeather(data.Key)}).then(data=> console.log(data))
// .catch(err=>console.log(err));