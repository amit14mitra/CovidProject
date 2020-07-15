import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CoronaDataService {
    
    constructor(private http:HttpClient){
        //const urlCountry="https://api.covid19api.com/countries";
    }
    getCountry():Observable<any>{
        const urlCountry="https://api.covid19api.com/countries";
        return this.http.get<any>(urlCountry);
    }
    getCoronaData(country:any):Observable<any>{
        const urlCases="https://api.covid19api.com/total/dayone/country/"+country;
        return this.http.get<any>(urlCases);
    }
}