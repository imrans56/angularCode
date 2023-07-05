import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { HrCommentsListComponent } from './hr-comments-list/hr-comments-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalInterceptor, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MsalService, MsalGuard, MsalBroadcastService, MsalRedirectComponent } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { MSALInstanceFactory, MSALGuardConfigFactory, MSALInterceptorConfigFactory } from '../app.module';
import { msalConfig, protectedResources } from '../auth-config';
import { ViewAspirationListComponent } from './view-aspiration-list/view-aspiration-list.component';
import { AddHrCommentsComponent } from './add-hr-comments/add-hr-comments.component';
import { EditHrCommentsComponent } from './edit-hr-comments/edit-hr-comments.component';
import { ViewParticularDetailsComponent } from './view-particular-details/view-particular-details.component';





@NgModule({
  declarations: [
    HrComponent,
    HrCommentsListComponent,
    ViewAspirationListComponent,
    AddHrCommentsComponent,
    EditHrCommentsComponent,
    ViewParticularDetailsComponent,
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
   
    // Initiate the MSAL library with the MSAL configuration object
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
],
providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: MsalInterceptor,
        multi: true,
      },
    {
        provide: MSAL_INSTANCE,
        useFactory: MSALInstanceFactory
    },
    {
        provide: MSAL_GUARD_CONFIG,
        useFactory: MSALGuardConfigFactory
    },
    {
        provide: MSAL_INTERCEPTOR_CONFIG,
        useFactory: MSALInterceptorConfigFactory
      },
    // { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
    MsalService,
    MsalGuard,
    MsalBroadcastService
],
bootstrap: [AppComponent, MsalRedirectComponent],
  
})
export class HrModule { }
