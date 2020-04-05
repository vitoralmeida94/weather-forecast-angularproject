import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class WeatherComponentService{

    api : string = "http://api.openweathermap.org/data/2.5/weather?";
    MY_API_KEY: string = "YOUR OPENWEATHERMAP API KEY HERE";
    
    constructor(private http:HttpClient){

    }

    public getTemperatureInfo(lat:number, lon:number){
        const apiCall = this.api + "lat="+lat+"&lon="+lon+"&appid="+this.MY_API_KEY;
        return this.http.get(apiCall);
    }

    
    public setIconWeather(icon : string): string{
        return `https://openweathermap.org/img/wn/${icon}@2x.png`
    }
    
}