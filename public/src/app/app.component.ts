import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPeople;

  title = 'public';
  constructor (private _httpService : HttpService){
  }

  ngOnInit(){
    this.allPeople = []
    this.getAllPeople(this.allPeople)
  }
  
  getAllPeople(allPeople){
    let all = this._httpService.getAllPeople()
    all.subscribe(function(data){
      for (var i = 0; i < data.data.length; i++){
        allPeople.push(data.data[i].name)
      }
    })
  }


}

