import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ViewAspirationComponent } from './view-aspiration/view-aspiration.component';
import { AddAspirationComponent } from './add-aspiration/add-aspiration.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {
  MsalGuard, MsalBroadcastService, MsalService,
  MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalGuardConfiguration, MsalRedirectComponent, MsalModule, MsalInterceptor, MsalInterceptorConfiguration, MSAL_INTERCEPTOR_CONFIG
} from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { msalConfig, protectedResources } from '../auth-config';
import { EditAspirationComponent } from './edit-aspiration/edit-aspiration.component';
import { ViewListComponent } from './view-list/view-list.component';
import { StatusWiseAspirationComponent } from './status-wise-aspiration/status-wise-aspiration.component';
import { AspirationDetailsComponent } from './aspiration-details/aspiration-details.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    EmployeeComponent,
    ViewAspirationComponent,
    AddAspirationComponent,
    EditAspirationComponent,
    ViewListComponent,
    AspirationDetailsComponent,
    EmployeeComponent,
    AspirationDetailsComponent,
    StatusWiseAspirationComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,     
    MsalModule
    .forRoot(new PublicClientApplication(msalConfig),
    {
      // The routing guard configuration. 
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: protectedResources.todoListApi.scopes
      }
    },
    {
      // MSAL interceptor configuration.
      // The protected resource mapping maps your web API with the corresponding app scopes. If your code needs to call another web API, add the URI mapping here.
      interactionType: InteractionType.Redirect,
      protectedResourceMap: new Map([
        [protectedResources.todoListApi.endpoint, protectedResources.todoListApi.scopes]
      ])
    })
  ]
})
export class EmployeeModule { }
