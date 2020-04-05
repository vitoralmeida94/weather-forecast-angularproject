import { WeatherComponentService } from './weathercomponent/weather.service';
import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latitude = 51.678418;
  longitude = 7.809007;

  @Output() emitCoord:EventEmitter<any> = new EventEmitter<any>();
  weatherRequest : any;

  constructor(private service : WeatherComponentService){
  }

  SetNumber(number: number): number {
    let newNumber = number.toFixed(2);
    
    if(parseFloat(newNumber)>number && number > 0){
      return  parseFloat(newNumber) - 0.01;
    }else if(parseFloat(newNumber)<number){
      return  parseFloat(newNumber) - 0.01;
    }

    return parseFloat(newNumber);
  }

  getWeather(latitude, longitude){
    this.service.getTemperatureInfo(latitude,longitude).subscribe(res=>{
        this.weatherRequest = res;
        this.weatherRequest.weather[0].icon = this.setIconWeather(this.weatherRequest.weather[0].icon);
        console.log(res);
    });
    return this.weatherRequest;
  }

  setIconWeather(icon : string): string{
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
  }

  onChoseLocation(event){
    this.latitude = this.SetNumber(event.coords.lat);
    this.longitude = this.SetNumber(event.coords.lng);
    
    this.emitCoord.emit(this.getWeather(this.latitude,this.longitude));
  }
  

}
