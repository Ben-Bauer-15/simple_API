import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.addPerson("Robert DeNiro")
   }

   getAllPeople(){
     return this._http.get('/allPeople');

   }

   addPerson(name){
     return this._http.get('/new/' + name);
   }

   removePerson(name){
     return this._http.get('/remove/' + name);
    }
    
    getOnePerson(name){
      return this._http.get('/' + name);
   }







}
