import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAPageRoutingModule } from './home-a-routing.module';

import { HomeAPage } from './home-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [HomeAPage]
})
export class HomeAPageModule {}
