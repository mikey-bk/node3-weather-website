const request = require('request');

const geocode = (address, callback) => {
    const mapboxToken = 'pk.eyJ1IjoibWljaGFlbGd1ZW5vdCIsImEiOiJjanRrZ3RrcWEzYW1oNDlvOTg2ZTZ4bW93In0.nbgZaDepASYu5_3emkdSpA';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxToken}&limit=1`;
    request( {url, json: true}, (error, {body}) => {
        if (error) {
            callback(`Unable to connect to location services!`, undefined);
        } else if (!body.features.length) { // no search results...
            callback(`Location services exception: No features found corresponding to query "${body.query.join(' ')}"`, undefined);
        } else {
            const feature = body.features[0];
            callback(undefined, {
                location: feature.place_name,
                longitude: feature.center[0],
                latitude: feature.center[1]
            });
        }
    } );
}

module.exports = geocode;