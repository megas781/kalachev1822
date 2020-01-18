import { Component } from '@angular/core';

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
}
