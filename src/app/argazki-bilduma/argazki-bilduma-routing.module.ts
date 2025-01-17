import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArgazkiBildumaPage } from './argazki-bilduma.page';

const routes: Routes = [
  {
    path: '',
    component: ArgazkiBildumaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArgazkiBildumaPageRoutingModule {}
