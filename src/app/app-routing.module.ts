import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    data: {
      seo: {
        title: 'cloudflare test about title',
        metaTags: [
          {
            name: 'description',
            content:
              'cloudflare test about description',
          },
        ],
      },
    },
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
    data: {
      seo: {
        title: 'cloudflare test home title',
        metaTags: [
          {
            name: 'description',
            content:
              'cloudflare test home description',
          },
        ],
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
