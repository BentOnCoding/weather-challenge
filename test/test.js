var assert = require('assert');
var dataProvider = require('../src/WwoWeatherRepository.js');

describe('WwoWeatherRepository', function () {

    describe('.getWeatherDataAsync() should', function () {

        it('return weather data', function (done) {

            var weatherConfig = {
                zipCode: 80223,
                startDate: "12/01/2016"
            }

            dataProvider.getWeatherDataAsync(weatherConfig, function (weatherData) {

                assert(weatherData);

                let first = weatherData[0];

                assert(first.humidity)
                assert(first.atmosphericPressure);
                assert(first.currentTempature);

                printResult(first);

                done();
            });


        });

    });

});

function printResult(first) {
    console.log('_________________________________________________________________ \n');

    console.log('CURRENT TEMPATURE : ' + first.currentTempature);

    console.log('PRESSURE : ' + first.atmosphericPressure);

    console.log('HUMIDITY : ' + first.humidity);

    console.log('_________________________________________________________________ \n');

}