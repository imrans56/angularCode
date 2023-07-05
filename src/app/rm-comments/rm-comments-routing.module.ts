import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RmCommentsComponent } from './rm-comments.component';

const routes: Routes = [{ path: '', component: RmCommentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RmCommentsRoutingModule { }
