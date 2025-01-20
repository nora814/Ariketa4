import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZenbakienJolasaPageRoutingModule } from './zenbakien-jolasa-routing.module';

import { ZenbakienJolasaPage } from './zenbakien-jolasa.page';
import { NireKonponenteakModule } from '../nire-konponenteak/nire-konponenteak.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZenbakienJolasaPageRoutingModule,
    NireKonponenteakModule
  ],
  declarations: [ZenbakienJolasaPage]
})
export class ZenbakienJolasaPageModule {}
