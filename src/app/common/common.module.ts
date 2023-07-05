import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { CommonComponent } from './common.component';
import { TypeWiseAspirationComponent } from './type-wise-aspiration/type-wise-aspiration.component';
import { StatusWiseAspirationComponent } from './status-wise-aspiration/status-wise-aspiration.component';
import { AspirationFullfillmentComponent } from './aspiration-fullfillment/aspiration-fullfillment.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ErrorComponent } from './error-routes/error.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    CommonComponent,
    TypeWiseAspirationComponent,
    StatusWiseAspirationComponent,
    AspirationFullfillmentComponent,
    ErrorComponent
  ],
  imports: [
    //CommonModule,
    CommonRoutingModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
   
  ]
})
export class CommonModule { }
