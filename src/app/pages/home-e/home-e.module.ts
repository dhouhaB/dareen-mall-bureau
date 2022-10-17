import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEPageRoutingModule } from './home-e-routing.module';

import { HomeEPage } from './home-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEPageRoutingModule
  ],
  declarations: [HomeEPage]
})
export class HomeEPageModule {}
