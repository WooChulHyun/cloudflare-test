import { Component } from '@angular/core';
import {SEOService} from "./core/seo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codetebah';

  constructor(private SEOService: SEOService) {
  }
}
