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
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    data: {
      seo: {
        title: 'cloudflare test home standalone title',
        metaTags: [
          {
            name: 'description',
            content:
              'cloudflare test home standalone description',
          },
        ],
      },
    },
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product/product.component').then((m) => m.ProductComponent),
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./test/test.component').then((m) => m.TestComponent),
  },
  {
    path: 'test2:/id',
    loadChildren: () =>
      import('./test2/test2.module').then((m) => m.Test2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
