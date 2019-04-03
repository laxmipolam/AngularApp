# MyApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.


App Details:
This app is to forecast weather for next 5 days for given date. This forecasts based on average of previous years data.

It also given weather forecast for coming 5 days from third party api called Accuweather.

--Code is placed in src/app/weather/weather.component,ts
--<app-weather> component is rendered in src/app/app.component.html
It used chartJS Javascript library to plot charts.  

It is using api "http://ec2-3-16-181-53.us-east-2.compute.amazonaws.com".

# Code is placed in src/app/weather.service,ts
Used angular service calls and Observables for for serving GET and Post requests. 

Functionality:

Select some date for which you want to forecast data for the next 5 days.

You will get a forecast graph of (minimum temperature and maximum temperature) based on average from previous years data.

Other graph will show minimum temperature and maximum temperature graph of coming 5 days (Irrespective of the selected date).



