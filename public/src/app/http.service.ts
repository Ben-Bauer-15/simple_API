import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks()
   }

   getTasks(){
     let tempObservable = this._http.get('/Bill Nye');

     tempObservable.subscribe(function(data){
       console.log("Got our data", data)
     });
   }
}
