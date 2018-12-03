import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPeople;
  person;

  title = 'public';
  constructor (private _httpService : HttpService){
  }

  ngOnInit(){
    this.allPeople = []
    this.person = {name : undefined, createdAt : undefined}
  }
  
  getAllPeopleFromDb(allPeople){
    
    let all = this._httpService.getAllPeople()
    all.subscribe(function(data){
      for (var i = 0; i < data.data.length; i++){
        allPeople.push(data.data[i].name)
      }
    })
  }

  getAllButtonClicked(){
    if (this.allPeople.length < 1){
      this.getAllPeopleFromDb(this.allPeople)
    }
  }

  showOnePerson(person) {
    var self = this
    let subject = this._httpService.getOnePerson(person)
    subject.subscribe(function(data){
      if (data != undefined) {
        self.person.name = data.data.name
        self.person.createdAt = data.data.createdAt
        console.log(self.person)
      }
    })
  }

}

