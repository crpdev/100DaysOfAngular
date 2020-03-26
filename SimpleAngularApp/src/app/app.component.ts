import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SimpleAngularApp'

  //Template reference to access a child property to set a value
  @ViewChild('footer', {static: true})
  footerComponent: FooterComponent;
  @ViewChild('page2Component', {static: true})
  page2Component: Page2Component;
  startTime: string;
  currentPage = 1;
  updateLastAccessed(){
    console.log("Update Last Accessed Clicked");
    this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  incrementHitCounter(page){
    this.currentPage = page;
    if (page === 2) {
      this.page2Component.incrementHits();
    }
  }

}

