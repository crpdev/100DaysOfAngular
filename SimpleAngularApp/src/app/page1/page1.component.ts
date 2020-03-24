import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  // Declaring a class level variable to be read from the html page

  pageName = 'Page 1';

  constructor() { }

  ngOnInit() {
    setTimeout( () => { this.pageName = 'First Page'; }, 5000);
  }

  onButtonClick() {
    alert('Hello There, Have a good day!');
  }
}
