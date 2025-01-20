import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'argazki-bilduma',
    loadChildren: () => import('./argazki-bilduma/argazki-bilduma.module').then( m => m.ArgazkiBildumaPageModule)
  },
  {
    path: 'zenbakien-jolasa',
    loadChildren: () => import('./zenbakien-jolasa/zenbakien-jolasa.module').then( m => m.ZenbakienJolasaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
