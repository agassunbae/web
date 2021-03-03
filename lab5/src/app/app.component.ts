enum Category{
  ELECTRONICS,
  BEAUTY,
  SPORTS,
  VIDEO_GAMES,
  FASHION
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'My store';
  category: string;
  constructor() {
    this.category = '';
  }
  identifyCategory(ctgry: string): void {
    this.category = ctgry;
  }
  // share(link: string): void {
  //   window.open('https://wa.me?text=' + link, '_blank');
  // }

  // let category = document.getElementById('category');
  // let value = category.value;
}
