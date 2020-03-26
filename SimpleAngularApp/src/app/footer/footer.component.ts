import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //Property binding to access/ receive a value from the parent component
  @Input('lastAccessed')
  lastAccessed = '';

  constructor() { }

  ngOnInit() {
  }

}
