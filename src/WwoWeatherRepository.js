const urlProvider = require('./WwoUrlProvider');
const request = require('request');
const dataAdapter = require('./wwoDataResultsAdapter');
const Promise = require('Bluebird');

// Promise getWeatherDataAsync(zipCode: int, startDate: date, endDate: date)
exports.getWeatherDataAsync = function (weatherRequestConfig) {

    let requestUrl = urlProvider.generateRequestUrl(weatherRequestConfig);

    return new Promise(function (resolve, reject) {
        
        request(requestUrl, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(dataAdapter.adaptWeatherResponse(body));
            }
        });

    });

};

