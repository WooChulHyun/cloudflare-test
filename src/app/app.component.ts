import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {SEOService} from "./core/seo.service";
import {Router} from "@angular/router";
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'codetebah';

  isBrowser: boolean = false;
  isServer: boolean = false;

  constructor(private SEOService: SEOService, private router: Router, @Inject(PLATFORM_ID) private platformId: object	) {
  }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)) this.isBrowser = true;
    if(isPlatformServer(this.platformId)) this.isServer = true;
    console.log(222)
  }

  toHome() {
    this.router.navigate(['/home'])
  }

  toAbout() {
    this.router.navigate(['/about'])
  }

  toProduct() {
    this.router.navigate(['/product/1'])
  }

  toTest() {
    this.router.navigate(['/test'])
  }
}

