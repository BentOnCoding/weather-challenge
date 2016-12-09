const BASE_URL = "http://api.worldweatheronline.com/premium/v1/past-weather.ashx";
const API_KEY = "09d6c96df43e4f9ead8165023160612";

exports.generateRequestUrl = function (weatherRequestConfig) {

    let location = (weatherRequestConfig.zipCode === null || weatherRequestConfig.zipCode === undefined) ? 80223 : weatherRequestConfig.zipCode;
    let startDate = (weatherRequestConfig.startDate === null || weatherRequestConfig.startDate === undefined) ? "12/08/2016" : weatherRequestConfig.startDate;
    let endDate = weatherRequestConfig.endDate;

    let requestUrl = BASE_URL + "?key=" + API_KEY;

    requestUrl = requestUrl + "&q=" + location;

    requestUrl += "&format=json";

    requestUrl += "&tp=24";

    requestUrl = requestUrl + "&date=" + startDate;

     if(endDate !== null && endDate !== undefined){
        requestUrl = requestUrl + "&endDate=" + endDate
    }

    return requestUrl;

};