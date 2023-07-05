import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';
import { HomeComponent } from './home/home.component';
import { GuardedComponent } from './guarded/guarded.component';
import { ViewWeatherForcastComponent } from './view-weather-forcast/view-weather-forcast.component';
import { CxoCommentListComponent } from './cxo/cxo-comment-list/cxo-comment-list.component';
import { BucommentListComponent } from './buhead/bucomment-list/bucomment-list.component';
import { AddBucommentComponent } from './buhead/add-bucomment/add-bucomment.component';
import { BuAspirationListComponent } from './buhead/bu-aspiration-list/bu-aspiration-list.component';
import { EditBucommentComponent } from './buhead/edit-bucomment/edit-bucomment.component';
import { ViewBucommentListComponent } from './buhead/view-bucomment-list/view-bucomment-list.component';

// import { EditBucommentComponent } from './buhead/edit-bucomment/edit-bucomment.component';
import { ViewAspirationComponent } from './employee/view-aspiration/view-aspiration.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddAspirationComponent } from './employee/add-aspiration/add-aspiration.component';
import { AspirationDetailsComponent } from './employee/aspiration-details/aspiration-details.component';
import { StatusWiseAspirationComponent } from './employee/status-wise-aspiration/status-wise-aspiration.component';
import { ErrorComponent } from './common/error-routes/error.component';
import { HrCommentsListComponent } from './hr/hr-comments-list/hr-comments-list.component';
import { RmCommentsComponent } from './rm-comments/rm-comments.component';

/**
 * MSAL Angular can protect routes in your application using MsalGuard. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#secure-the-routes-in-your-application
 */
const routes: Routes = [
    {
        path: 'guarded',
        component: AspirationDetailsComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        path: 'bucomment-list',
        component: BucommentListComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        path: 'add-bucomment',
        component: AddBucommentComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        path: 'bu-aspiration-list',
        component: BuAspirationListComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        path: 'edit-bucomment',
        component: EditBucommentComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        path: 'view-bucomment-list',
        component: ViewBucommentListComponent,
        canActivate: [
            MsalGuard
        ]
    },
  
    {
        path: 'test',
        component: GuardedComponent,
        canActivate: [
            MsalGuard
        ]
    },
    {
        path: 'view-aspiration',
        component: ViewAspirationComponent,
        canActivate: [MsalGuard],
    },
    {
        path: 'employee',
        component: EmployeeComponent,
        canActivate: [MsalGuard],
    },
    {
        path: 'add-aspiration',
        component: AddAspirationComponent,
        canActivate: [MsalGuard],
    },


    {
        path: 'viewlist',
        component: ViewAspirationComponent,
        canActivate: [MsalGuard],
    },
    {
        path: 'hrlist',
        component: HrCommentsListComponent,

    },
    {
        path: 'rm',
        component: RmCommentsComponent,

    },
    {
        // Needed for handling redirect after login
        path: 'auth',
        component: MsalRedirectComponent
    },
    {path: 'cxo-comments', component:CxoCommentListComponent, canActivate:[MsalGuard],},
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'chart',
        component: StatusWiseAspirationComponent
    },
    {
        path: 'welcome',
        component: AspirationDetailsComponent
    },
    {
        path: '**',
        component: ErrorComponent
    },
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    { path: 'common', loadChildren: () => import('./common/common.module').then(m => m.CommonModule) },
    { path: 'hr', loadChildren: () => import('./hr/hr.module').then(m => m.HrModule) },
    { path: 'rm-comments', loadChildren: () => import('./rm-comments/rm-comments.module').then(m => m.RmCommentsModule) },
    { path: 'buhead', loadChildren: () => import('./buhead/buhead.module').then(m => m.BuheadModule) },
    { path: 'cxo', loadChildren: () => import('./cxo/cxo.module').then(m => m.CxoModule) }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // Don't perform initial navigation in iframes or popups
        initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
