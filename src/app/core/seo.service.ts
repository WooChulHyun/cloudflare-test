import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

interface DefaultSeoData {
  title: string;
  metaTags: MetaDefinition[];
}

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  defaultSeoData: DefaultSeoData = {
    title: 'cloudflare test main title',
    metaTags: [
      {
        name: 'description',
        content:
          'cloudflare test main description',
      },
      {
        property: 'og:title',
        content: 'cloudflare test main og title',
      },
      {
        property: 'og:description',
        content: 'cloudflare test main og description',
      },
      { property: 'og:type', content: 'website' },
    ],
  };

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        const seoData: DefaultSeoData = data['seo'] ?? this.defaultSeoData;
        this.updateTitle(seoData.title);
        this.updateMetaTags(seoData.metaTags);
      });
  }

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }
  updateMetaTags(metaTags: MetaDefinition[]) {
    this.defaultSeoData.metaTags.forEach((m) => this.metaService.updateTag(m));
    metaTags.forEach((m) => this.metaService.updateTag(m));

    // this.metaService.updateTag({ name: 'description', content: 'test' });

    // console.log(this.metaService.getTag('name="description"'));
    // console.log(this.metaService.getTag('property="og:title"'));
    // console.log(this.metaService.getTag('property="og:url"'));
    // console.log(this.metaService.getTag('property="og:image"'));
    // console.log(this.metaService.getTag('property="og:image:type"'));
    // console.log(this.metaService.getTag('property="og:description"'));
    // console.log(this.metaService.getTag('property="og:type"'));
  }
}
