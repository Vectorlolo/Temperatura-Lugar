const axios = require('axios');

const getCLima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=10&appid=86848b20b5ec2b5d97da1db3a6549e75&units=metric`)


    return resp.data.list[0].main.temp;
}



module.exports = {
    getCLima
}