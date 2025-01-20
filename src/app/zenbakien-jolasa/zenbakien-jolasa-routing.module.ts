import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZenbakienJolasaPage } from './zenbakien-jolasa.page';

const routes: Routes = [
  {
    path: '',
    component: ZenbakienJolasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZenbakienJolasaPageRoutingModule {}
