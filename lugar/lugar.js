const axios = require('axios');

const getLugarLati = async(dir) => {

    const encodedUrI = encodeURI(dir)


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrI}`,
        headers: { 'x-rapidapi-key': 'cf30ec97cfmsh6c600b12617c160p19e8e3jsn96c7bcc7d1f5' }
    });

    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultadospara ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name
    const lat = data.lat
    const lon = data.lon
    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLati
}