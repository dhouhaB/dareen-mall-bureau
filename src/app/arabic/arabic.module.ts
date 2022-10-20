import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArabicPageRoutingModule } from './arabic-routing.module';

import { ArabicPage } from './arabic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArabicPageRoutingModule
  ],
  declarations: [ArabicPage]
})
export class ArabicPageModule {}
