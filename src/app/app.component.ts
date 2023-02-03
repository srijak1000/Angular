import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  temp: any;
  temp_min: any;
  temp_max: any;

  city: string = 'kolkata';
  cityData: any;
  constructor(private weatherService: WeatherService) {
    
  }

  searchCity(event:any) {
    console.log(event)
    this.city = event.target.value;
    this.getCityData();
  }
  ngOnInit(): void {
    this.getCityData();
  }

  getCityData() {
    this.weatherService.getWeatherData(this.city).subscribe({
      next: (response) => {
        console.log(response);
        this.cityData = response;
        this.temp = (response.main.temp - 32)*(5/9);
        this.temp_min = (response.main.temp_min - 32)*(5/9);
        this.temp_max = (response.main.temp_max - 32)*(5/9);
      }
    });
  }
}
