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
     let tempObservable = this._http.get('/allPeople');

     tempObservable.subscribe(function(data){
       console.log("Got all people", data)
     });
   }

   addPerson(name){
     let observable = this._http.get('/new/' + name);

     observable.subscribe(function(data){
       console.log("Made a new person", data)
     })
   }

   removePerson(name){
     let observable = this._http.get('/remove/' + name);

     observable.subscribe(function(data){
       console.log("Removed a person", data)
     })
    }
    
    getOnePerson(name){
      let observable = this._http.get('/' + name);
  
      observable.subscribe(function(data){
        console.log("Got one person", data)
      })
     
   }







}
