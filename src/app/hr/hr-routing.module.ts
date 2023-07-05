import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr.component';
import { MsalGuard } from '@azure/msal-angular';
import { HrCommentsListComponent } from './hr-comments-list/hr-comments-list.component';
import { ViewAspirationListComponent } from './view-aspiration-list/view-aspiration-list.component';

const routes: Routes = [
  {
    path: '',
    component:HrCommentsListComponent,
  },
  {
    path: 'view',
    component:ViewAspirationListComponent,
  },
  // { 
  // path: 'hr-comments-list', 
  // component:HrCommentsListComponent,
  // canActivate: [MsalGuard], },

  // { 
  //   path: 'view-aspiration-list', 
  //   component:ViewAspirationListComponent,
  //   canActivate: [MsalGuard], },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
