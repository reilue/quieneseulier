import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: 'mobile', component: MobileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
