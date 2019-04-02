import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Weather } from './weather/weather';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

 getWeather(date): Observable<Weather[]>{
	return this.http.get<Weather[]>('http://ec2-3-16-181-53.us-east-2.compute.amazonaws.com:8000/forecast/' + date)         
 }
  

  getWeatherThird(){
	return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/335315?apikey=GTdbdNmZ4e2CcPuNXx2GEdskPnA6M3ex')         
 }
}
