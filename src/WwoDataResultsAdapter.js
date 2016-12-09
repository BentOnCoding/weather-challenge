var _ = require("underscore");

exports.adaptWeatherResponse = function (responseBody) {    

    var weatherData = JSON.parse(responseBody);
    
    return _.map(weatherData.data.weather, function (val) {            
        var todaysWeather = val.hourly[0];

        return {
            humidity: todaysWeather.humidity ,
            atmosphericPressure: todaysWeather.pressure,
            currentTempature: todaysWeather.tempF + " Freedom Units"

        }

    });

};