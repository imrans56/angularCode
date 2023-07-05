import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuheadComponent } from './buhead.component';

const routes: Routes = [{ path: '', component: BuheadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuheadRoutingModule { }
