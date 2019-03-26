const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const apiKey = 'f40c14e6b792b620a1090020a7d9829f'
    const url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;
    request( {url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!');
        } else if ( body.error ) {
            callback(`Server side error: ${body.error}`)
        } else {
            const temp = body.currently.temperature;
            const proba = body.currently.precipProbability;    
    
            callback(undefined, `${body.daily.data[0].summary}. It is currently ${temp} degrees out. There is a ${proba*100}% chance of rain.`);
        }
    });

};

module.exports = forecast;