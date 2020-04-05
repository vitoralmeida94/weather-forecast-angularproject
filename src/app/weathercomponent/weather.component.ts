
import { WeatherComponentService } from './weather.service';
import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'weathercomponent',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeathercomponentComponent implements OnInit {
  titleCard = "Weather Information";

  @Input() coord : any;
  weatherRequest : any;

  constructor() {
   
   }

  ngOnInit(): void {
   
  }

  changeKelvinToCelsius(kelvinTemperature : number): number{
    let celsiusTemperature = (kelvinTemperature - 273);
    return celsiusTemperature;
  }

  


}
