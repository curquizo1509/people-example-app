import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'examples',
    loadChildren: () => import('./modules/examples/examples.module').then( m => m.ExamplesModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./modules/articles/articles.module').then( m => m.ArticlesModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
