const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=1d882b08c6f9e192b616a167cb11d957&units=metric`

    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect forecast services!", undefined)
        } else if (body.lat === undefined || body.lon === undefined) {
            callback("Unable to find the location. Try another search.", undefined)
        } else {
            const degree = body.current.temp
            const description = body.current.weather[0].description
            callback(undefined, `It is currently ${degree} degrees out. Weather description: ${description}`)
        }
    })
}

module.exports = forecast