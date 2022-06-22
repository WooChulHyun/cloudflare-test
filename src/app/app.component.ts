import { Component } from '@angular/core';
import {SEOService} from "./core/seo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codetebah';

  constructor(private SEOService: SEOService, private router: Router) {
  }

  toHome() {
    this.router.navigate(['/home'])
  }

  toAbout() {
    this.router.navigate(['/about'])
  }
}

