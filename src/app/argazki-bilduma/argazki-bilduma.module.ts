import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgazkiBildumaPageRoutingModule } from './argazki-bilduma-routing.module';

import { ArgazkiBildumaPage } from './argazki-bilduma.page';
import { NireKonponenteakModule } from '../nire-konponenteak/nire-konponenteak.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArgazkiBildumaPageRoutingModule,
    NireKonponenteakModule
  ],
  declarations: [ArgazkiBildumaPage]
})
export class ArgazkiBildumaPageModule {}
