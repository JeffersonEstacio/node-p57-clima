const axios = require('axios');

const apiKey = '48705ac257b83af4fa3e693bf7693505'

const getClima = async(ciudad) => {
    try {
        const ciudadURI = encodeURI(ciudad)
        const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}`)
        return respuesta.data.main.temp;
    } catch (error) {
        console.log(error.data);
    }

}

module.exports = {
    getClima
};