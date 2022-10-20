import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArabicPage } from './arabic.page';

const routes: Routes = [
  {
    path: '',
    component: ArabicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArabicPageRoutingModule {}
