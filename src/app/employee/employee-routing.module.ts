import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAspirationComponent } from './add-aspiration/add-aspiration.component';
import { ViewAspirationComponent } from './view-aspiration/view-aspiration.component';
import { MsalGuard } from '@azure/msal-angular';
import { ViewListComponent } from './view-list/view-list.component';
import { EmployeeComponent } from './employee.component';
import { StatusWiseAspirationComponent } from './status-wise-aspiration/status-wise-aspiration.component';

import { AspirationDetailsComponent } from './aspiration-details/aspiration-details.component';

const routes: Routes = [
  {
    path: 'add-aspiration',
    component: AddAspirationComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'view-list',
    component: ViewListComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'view-aspiration',
    component: ViewAspirationComponent,
    canActivate: [MsalGuard],
  },

  {
    path: 'welcome',
    component: AspirationDetailsComponent,
    canActivate: [MsalGuard],
  },

  { path: '', component: EmployeeComponent },
  { path: 'view', component: AspirationDetailsComponent },
  { path: "chart", component: StatusWiseAspirationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
