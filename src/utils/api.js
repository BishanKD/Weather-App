import axios from 'axios';

const API_KEY = 'a23d53a02d1f0ee5b4790d210fac3629';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeather = async (city) => {
    try{
        const response = await axios.get(`${BASE_URL}/weather`, {
            params:{
                q:city,
                appid:API_KEY,
                units:'metric'
            }
        });
        return response.data;
    }
    catch(err){
        console.error('Error fetching weather data: ', err);
        throw err;
    }
};

export {getWeather}