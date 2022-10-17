import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEPage } from './home-e.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEPageRoutingModule {}
