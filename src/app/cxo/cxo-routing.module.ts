import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CxoComponent } from './cxo.component';

const routes: Routes = [{ path: '', component: CxoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxoRoutingModule { }
