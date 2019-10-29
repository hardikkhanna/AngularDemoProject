import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assingnment2',
  templateUrl: './assingnment2.component.html',
  styleUrls: ['./assingnment2.component.css']
})
export class Assingnment2Component implements OnInit {
  show : boolean = true ;
  buttons : Array<any> = [];
  noColor : boolean = true;
  constructor() {
    
   }

  ngOnInit() {
  }
  showText() {
    this.show = !this.show;
    this.buttons.push(new Date());
    
  }
  getColor() {
    if(this.buttons.length >=5){
      return true;
    }
  }
}
