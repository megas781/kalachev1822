import { Component } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kalachev1822';
  showMobileNavbar = true;
  burgerButtonTapped() {
    this.showMobileNavbar = !this.showMobileNavbar;
  }
  constructor(
    public router: Router
  ) {
  }

  //роутинг вместо ссылок
  navLinkTapped(path: string) {
    this.router.navigateByUrl(path).then(r => console.log());
  }
}
