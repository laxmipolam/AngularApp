import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
import { WeatherService } from '../weather.service';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: Weather = {
    DATE: '',
    TMIN : 0,
    TMAX : 0
  };
  details: Weather[];

  constructor(private weatherService: WeatherService) { }
  getCall(date): void {
        date = date.replace(/-/g,"");
  	this.weatherService.getWeather(date)
      		.subscribe(details => {this.details = details;
                       this.drawCharts(this.details,date);
		});
	
  	this.weatherService.getWeatherThird()
      		.subscribe(details => {
                   this.drawChartsThird(details);
		});
	}
        
  

  ngOnInit() {
  }
  
	drawCharts(det,date): void{
		if(det !== undefined){
			let arr = [];
			let tmaxarr = [];
		for(let i=0; i< det.length;i++){
			let row = {y : det[i]['TMIN'],label : det[i]['DATE']};
			let tmaxrow = {y : det[i]['TMAX'],label : det[i]['DATE']};
			arr.push(row);
			tmaxarr.push(tmaxrow);
		}
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Plot for selected date " + date
		},
		data: [{
			type: "line",
			dataPoints: arr,
		},
			{
			type: "line",
			dataPoints: tmaxarr,
		}]
		});
		chart.render();
		}
	}
        drawChartsThird(details): void{
              
		if(details !== undefined){
			let arr = [];
			let tmaxarr = [];
		for(let i=0; i< 5;i++){
                        debugger;
			let row = {y : details["DailyForecasts"][i]["Temperature"]["Minimum"].Value ,label : details["DailyForecasts"][i]["Date"].substring(0,10)};
			let tmaxrow= {y : details["DailyForecasts"][i]["Temperature"]["Maximum"].Value ,label : details["DailyForecasts"][i]["Date"].substring(0,10)};
			arr.push(row);
			tmaxarr.push(tmaxrow);
		}
		let chart = new CanvasJS.Chart("chartContainer2", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Plot Using Third Party for next 5 days"
		},
		data: [{
			type: "line",
			dataPoints: arr,
		},
			{
			type: "line",
			dataPoints: tmaxarr,
		}]
		});
		chart.render();
		}
	}

}
