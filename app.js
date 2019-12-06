const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/* lugar.getLugarLati(argv.direccion)
    .then(console.log)

clima.getCLima(10.470000, -66.800003)
    .then(console.log)
    .catch(console.log) */

const getInfo = async(direccion) => {

    let dato = await lugar.getLugarLati(direccion)
        .then(eso => {
            return eso
        })
        .catch(err => {
            console.log(err)
        })

    let clim = await clima.getCLima(dato.lat, dato.lon)
        .then(temp => {
            return temp
        })
        .catch(err => {
            console.log(err, `La temperatura para ${direccion} no ha sido encontrada`)
        })

    console.log(`El clima en ${dato.direccion} es de ${clim}`)

}


getInfo(argv.direccion)