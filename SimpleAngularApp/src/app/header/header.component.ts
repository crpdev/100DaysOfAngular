import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageRequested = 1;

  @Output()
  pageChangedEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPageChange(page) {
    this.pageRequested = page;
    console.log(this.pageRequested)
    this.pageChangedEvent.emit(page);
  }

}
