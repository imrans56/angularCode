import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common.component';
import { AspirationFullfillmentComponent } from './aspiration-fullfillment/aspiration-fullfillment.component';

const routes: Routes = [{ path: 'fullfill', component: AspirationFullfillmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
