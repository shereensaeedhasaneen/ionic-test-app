import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name='My name is shereen saeed';
  constructor() {}

  ss(){
    this.name ='my name is reham saeed';
  }
}
