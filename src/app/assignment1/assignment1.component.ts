import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  userName : String = '';

  constructor() { }

  ngOnInit() {
  }
  resetUsername() {
    this.userName = '';
  }
  allowButtonClick() {
    if(this.userName.length == 0)
      return true;
    return false;
  }
}
